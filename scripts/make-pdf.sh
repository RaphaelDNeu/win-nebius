#!/usr/bin/env bash
# Generate deck.pdf at the project root.
#
# Assumes a local http server is already running. If not, run in one
# terminal:
#   python3 -m http.server 8000
# and pass http://localhost:8000/?print-pdf as the URL below.

set -euo pipefail
cd "$(dirname "$0")/.."

URL="${1:-http://localhost:8000/?print-pdf}"
OUT="${2:-deck.pdf}"

if ! python3 -c "import websocket" 2>/dev/null; then
  echo "Installing websocket-client into user site-packages..."
  python3 -m pip install --user --quiet websocket-client
fi

python3 scripts/make_pdf.py "$URL" "$OUT"
echo "Done. Open with: open $OUT"
