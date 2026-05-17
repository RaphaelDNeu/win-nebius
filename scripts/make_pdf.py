#!/usr/bin/env python3
"""Generate the deck PDF via Chrome DevTools Protocol.

Launches headless Chrome with remote debugging, navigates to the deck
in reveal's print-pdf mode, waits for the pdf-ready event, then calls
Page.printToPDF and streams the result to disk.

Why CDP instead of `chrome --print-to-pdf`:
  reveal.js 6's print mode does heavy DOM rewrites and emits a custom
  `pdf-ready` event when the print layout is finished. The flag-based
  --print-to-pdf path prints before that event fires and produces a
  blank page. CDP lets us wait for the event, then print.

Requirements:
  pip3 install --user websocket-client

Usage:
  python3 scripts/make_pdf.py http://localhost:8765/?print-pdf deck.pdf
"""

import base64, json, os, subprocess, sys, time, urllib.request

import websocket  # type: ignore

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
DEBUG_PORT = 9222
USER_DATA = "/tmp/nebius-pdf-profile"
PAGE_WIDTH_PX = 1996
PAGE_HEIGHT_PX = 1122


def send(ws, msg_id, method, params=None):
    payload = {"id": msg_id, "method": method}
    if params is not None:
        payload["params"] = params
    ws.send(json.dumps(payload))
    while True:
        msg = json.loads(ws.recv())
        if msg.get("id") == msg_id:
            return msg


def wait_for_console(ws, marker, timeout=60):
    deadline = time.time() + timeout
    while time.time() < deadline:
        ws.settimeout(max(0.1, deadline - time.time()))
        try:
            msg = json.loads(ws.recv())
        except websocket.WebSocketTimeoutException:
            return False
        if msg.get("method") == "Runtime.consoleAPICalled":
            for arg in msg["params"].get("args", []):
                if arg.get("value") == marker:
                    return True
    return False


def main():
    if len(sys.argv) != 3:
        print(__doc__, file=sys.stderr)
        sys.exit(2)
    url, out = sys.argv[1], sys.argv[2]

    subprocess.run(["rm", "-rf", USER_DATA], check=False)
    chrome = subprocess.Popen(
        [
            CHROME,
            f"--remote-debugging-port={DEBUG_PORT}",
            f"--user-data-dir={USER_DATA}",
            "--remote-allow-origins=*",
            "--headless=new",
            "--disable-gpu",
            "--hide-scrollbars",
            "--window-size=1920,1080",
            "--no-first-run",
            "--no-default-browser-check",
            "about:blank",
        ],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )

    try:
        for _ in range(40):
            try:
                tabs = json.loads(
                    urllib.request.urlopen(
                        f"http://127.0.0.1:{DEBUG_PORT}/json"
                    ).read()
                )
                page_tabs = [t for t in tabs if t.get("type") == "page"]
                if page_tabs:
                    break
            except Exception:
                pass
            time.sleep(0.25)
        else:
            print("Chrome never opened a debug socket.", file=sys.stderr)
            sys.exit(2)

        ws = websocket.create_connection(
            page_tabs[0]["webSocketDebuggerUrl"], timeout=60
        )

        send(ws, 1, "Page.enable")
        send(ws, 2, "Runtime.enable")
        send(ws, 10, "Emulation.setDeviceMetricsOverride",
             {"width": 1920, "height": 1080, "deviceScaleFactor": 1,
              "mobile": False})
        # Bridge reveal's pdf-ready event into a console marker we can wait for.
        send(ws, 3, "Page.addScriptToEvaluateOnNewDocument", {
            "source": (
                "(function(){"
                "  let fired = false;"
                "  function fire(){ if(!fired){fired=true;"
                "    console.log('NEBIUS_PDF_READY');} }"
                "  const iv = setInterval(function(){"
                "    if (window.Reveal && Reveal.on) {"
                "      Reveal.on('pdf-ready', fire); clearInterval(iv);"
                "    }"
                "  }, 50);"
                "  document.addEventListener('pdf-ready', fire);"
                "})();"
            )
        })
        send(ws, 4, "Page.navigate", {"url": url})

        if not wait_for_console(ws, "NEBIUS_PDF_READY", timeout=45):
            print("warning: pdf-ready never fired, printing anyway",
                  file=sys.stderr)
        time.sleep(1.0)

        # reveal sizes each pdf-page to 1996x1122 px from our 1920x1080
        # config plus its 4% margin. Match Chrome paper to that, so each
        # slide lands exactly one page.
        resp = send(ws, 5, "Page.printToPDF", {
            "printBackground": True,
            "paperWidth": PAGE_WIDTH_PX / 96.0,
            "paperHeight": PAGE_HEIGHT_PX / 96.0,
            "marginTop": 0, "marginBottom": 0,
            "marginLeft": 0, "marginRight": 0,
            "preferCSSPageSize": True,
            "scale": 1.0,
            "transferMode": "ReturnAsStream",
        })
        if "result" not in resp:
            print("printToPDF failed:", resp.get("error"), file=sys.stderr)
            sys.exit(3)

        stream = resp["result"]["stream"]
        chunks = []
        i = 100
        while True:
            r = send(ws, i, "IO.read", {"handle": stream, "size": 1 << 20})
            d = r["result"]
            chunk = d["data"]
            chunks.append(base64.b64decode(chunk) if d.get("base64Encoded")
                          else chunk.encode("latin-1"))
            if d.get("eof"):
                break
            i += 1
        send(ws, 999, "IO.close", {"handle": stream})

        data = b"".join(chunks)
        with open(out, "wb") as f:
            f.write(data)
        print(f"wrote {len(data)} bytes to {out}")
    finally:
        chrome.terminate()
        try:
            chrome.wait(timeout=5)
        except Exception:
            chrome.kill()


if __name__ == "__main__":
    main()
