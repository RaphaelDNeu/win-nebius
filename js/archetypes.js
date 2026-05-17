/*
 * archetypes.js
 *
 * Five reusable layout components for the deck. Each archetype takes a
 * data object (defined per slide in content.js) and returns the HTML for
 * a reveal.js <section>. A small renderer at the bottom walks
 * window.DECK_CONTENT.slides and injects sections into the .slides root
 * before reveal.js initializes.
 *
 * Archetypes
 *   title      Slide 0 and the three section dividers
 *   statement  One headline, heavy negative space, optional sub
 *   image      Full-bleed photo with navy scrim, optional caption
 *   data       Hero number callouts plus rounded-top bar grammar
 *   cards      Two to four rounded cards on the dark base, cap of four
 *   diagram    Custom layout for Slide 4.2
 *
 * All copy is read from content.js. Nothing in this file should be
 * edited to change wording, only to change layout behavior.
 */

(function () {
  'use strict';

  /* small helper: escape user-provided strings before inserting as HTML */
  function esc(s) {
    if (s === undefined || s === null) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function notesBlock(notes) {
    if (!notes) return '';
    return '<aside class="notes">' + esc(notes) + '</aside>';
  }

  /* ----- archetype: title ------------------------------------------- */
  function renderTitle(d) {
    var eyebrow = d.eyebrow ? '<div class="t-eyebrow">' + esc(d.eyebrow) + '</div>' : '';
    var subtitle = d.subtitle ? '<div class="t-subtitle">' + esc(d.subtitle) + '</div>' : '';
    var meta = d.meta ? '<div class="t-meta">' + esc(d.meta) + '</div>' : '';
    var logo = d.showLogo ? '<div class="t-logo">NEBIUS</div>' : '';
    return (
      '<div class="archetype archetype-title">' +
      '  <div class="t-mark"></div>' +
      '  ' + logo +
      '  <div class="t-block">' +
      '    ' + eyebrow +
      '    <h1 class="t-title">' + esc(d.title) + '</h1>' +
      '    ' + subtitle +
      '  </div>' +
      '  ' + meta +
      '</div>'
    );
  }

  /* ----- archetype: statement --------------------------------------- */
  function renderStatement(d) {
    var eyebrow = d.eyebrow ? '<div class="s-eyebrow">' + esc(d.eyebrow) + '</div>' : '';
    var sub = d.sub ? '<p class="s-sub">' + esc(d.sub) + '</p>' : '';
    var mark = d.accent ? '<div class="s-mark"></div>' : '';
    return (
      '<div class="archetype archetype-statement">' +
      '  ' + mark +
      '  ' + eyebrow +
      '  <h2 class="s-headline">' + esc(d.headline) + '</h2>' +
      '  ' + sub +
      '</div>'
    );
  }

  /* ----- archetype: data -------------------------------------------- */
  function renderData(d) {
    var callouts = (d.callouts || []).map(function (c, i) {
      var color = i === 0 ? 'lime' : 'purple';
      return (
        '<div class="d-callout d-callout-' + color + ' fragment fade-up">' +
        '  <div class="d-value">' + esc(c.value) + '</div>' +
        '  <div class="d-unit">' + esc(c.unit) + '</div>' +
        '  <div class="d-label">' + esc(c.label) + '</div>' +
        '</div>'
      );
    }).join('');

    var bars = '';
    if (d.bars && d.bars.series && d.bars.series.length) {
      var max = Math.max.apply(null, d.bars.series.map(function (b) { return b.value; }));
      var barEls = d.bars.series.map(function (b) {
        var h = Math.round((b.value / max) * 100);
        var cls = b.color === 'lime' ? 'd-bar-lime' : 'd-bar-purple';
        return (
          '<div class="d-bar-col fragment fade-up">' +
          '  <div class="d-bar-value">' + esc(String(b.value)) + '</div>' +
          '  <div class="d-bar-wrap">' +
          '    <div class="d-bar ' + cls + '" style="height:' + h + '%"></div>' +
          '  </div>' +
          '  <div class="d-bar-label">' + esc(b.label) + '</div>' +
          '</div>'
        );
      }).join('');
      bars =
        '<div class="d-bars">' +
        '  <div class="d-bars-header">' +
        '    <div class="d-bars-title">' + esc(d.bars.title) + '</div>' +
        '    <div class="d-bars-unit">' + esc(d.bars.unit) + '</div>' +
        '  </div>' +
        '  <div class="d-bars-grid">' + barEls + '</div>' +
        '</div>';
    }

    var eyebrow = d.eyebrow ? '<div class="d-eyebrow">' + esc(d.eyebrow) + '</div>' : '';
    var headline = d.headline ? '<h2 class="d-headline">' + esc(d.headline) + '</h2>' : '';

    return (
      '<div class="archetype archetype-data">' +
      '  <div class="d-header">' + eyebrow + headline + '</div>' +
      '  <div class="d-body">' +
      '    <div class="d-callouts">' + callouts + '</div>' +
      '    ' + bars +
      '  </div>' +
      '</div>'
    );
  }

  /* ----- archetype: image ------------------------------------------- */
  function renderImage(d) {
    var caption = d.caption ? '<div class="i-caption">' + esc(d.caption) + '</div>' : '';
    var src = d.src || '';
    var alt = d.alt || d.caption || 'placeholder';
    var inner = src
      ? '<img class="i-img" src="' + esc(src) + '" alt="' + esc(alt) + '">'
      : '<div class="i-placeholder">PLACEHOLDER: ' + esc(d.placeholder || alt) + '</div>';
    return (
      '<div class="archetype archetype-image">' +
      '  <div class="i-frame">' + inner + '<div class="i-scrim"></div>' + caption + '</div>' +
      '</div>'
    );
  }

  /* ----- archetype: cards ------------------------------------------- */
  function renderCards(d) {
    var cards = (d.cards || []).slice(0, 4).map(function (c) {
      var lines = (c.lines || []).map(function (l) {
        return '<li>' + esc(l) + '</li>';
      }).join('');
      return (
        '<div class="c-card fragment fade-up">' +
        '  <div class="c-card-headline">' + esc(c.headline) + '</div>' +
        (lines ? '<ul class="c-card-lines">' + lines + '</ul>' : '') +
        '</div>'
      );
    }).join('');
    var eyebrow = d.eyebrow ? '<div class="c-eyebrow">' + esc(d.eyebrow) + '</div>' : '';
    var headline = d.headline ? '<h2 class="c-headline">' + esc(d.headline) + '</h2>' : '';
    return (
      '<div class="archetype archetype-cards">' +
      '  <div class="c-header">' + eyebrow + headline + '</div>' +
      '  <div class="c-grid c-grid-' + Math.min((d.cards || []).length, 4) + '">' + cards + '</div>' +
      '</div>'
    );
  }

  /* ----- archetype: imagedata --------------------------------------- */
  /* hybrid layout used by Slide 1.3: a left column of stacked stats     */
  /* against a right-side 2x2 photo grid that fills the rest of the     */
  /* slide. Photos get the standard navy scrim. Use placeholders until  */
  /* real images land in /images/.                                       */
  function renderImageData(d) {
    var stats = (d.stats || []).map(function (s) {
      return (
        '<div class="id-stat">' +
        '  <div class="id-stat-value">' + esc(s.value) + '</div>' +
        '  <div class="id-stat-unit">' + esc(s.unit) + '</div>' +
        '  <div class="id-stat-label">' + esc(s.label) + '</div>' +
        '</div>'
      );
    }).join('');

    var images = (d.images || []).slice(0, 4).map(function (img) {
      var inner = img.src
        ? '<img class="id-img" src="' + esc(img.src) + '" alt="' + esc(img.placeholder || '') + '"' +
          ' onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';">' +
          '<div class="id-img-placeholder" style="display:none">PLACEHOLDER: ' + esc(img.placeholder || '') + '</div>'
        : '<div class="id-img-placeholder">PLACEHOLDER: ' + esc(img.placeholder || '') + '</div>';
      return (
        '<div class="id-photo">' +
        inner +
        '<div class="id-scrim"></div>' +
        '</div>'
      );
    }).join('');

    var eyebrow = d.eyebrow ? '<div class="id-eyebrow">' + esc(d.eyebrow) + '</div>' : '';

    return (
      '<div class="archetype archetype-imagedata">' +
      '  <div class="id-left">' +
      '    ' + eyebrow +
      '    <div class="id-stats">' + stats + '</div>' +
      '  </div>' +
      '  <div class="id-grid">' + images + '</div>' +
      '</div>'
    );
  }

  /* ----- archetype: logos ------------------------------------------- */
  /* Slides 1.1 and 1.2 variants. A row or grid of company wordmarks    */
  /* rendered monochrome white or lime, no full-color brand marks, per  */
  /* the constraint in section 4.2 of the brief.                        */
  function renderLogos(d) {
    var items = (d.logos || []).map(function (l) {
      var color = l.accent === 'lime' ? 'lg-lime' : 'lg-white';
      var sub = l.sub ? '<div class="lg-sub">' + esc(l.sub) + '</div>' : '';
      return (
        '<div class="lg-item ' + color + '">' +
        '  <div class="lg-mark">' + esc(l.name) + '</div>' +
        '  ' + sub +
        '</div>'
      );
    }).join('');
    var eyebrow = d.eyebrow ? '<div class="lg-eyebrow">' + esc(d.eyebrow) + '</div>' : '';
    var headline = d.headline ? '<h2 class="lg-headline">' + esc(d.headline) + '</h2>' : '';
    var cols = Math.min((d.logos || []).length, 4);
    return (
      '<div class="archetype archetype-logos">' +
      '  <div class="lg-header">' + eyebrow + headline + '</div>' +
      '  <div class="lg-grid lg-grid-' + cols + '">' + items + '</div>' +
      '</div>'
    );
  }

  /* ----- archetype: thesis ------------------------------------------ */
  /* Slide 2.4 specifically: one thesis headline at the top, two        */
  /* supporting columns underneath. Each column has a label, a lime     */
  /* hero figure, a context line, and an optional secondary figure.    */
  function renderThesis(d) {
    var eyebrow = d.eyebrow ? '<div class="th-eyebrow">' + esc(d.eyebrow) + '</div>' : '';
    var cols = (d.columns || []).slice(0, 2).map(function (col) {
      var hero = col.hero
        ? '<div class="th-hero"><span class="th-hero-value">' + esc(col.hero.value) + '</span>' +
          '<span class="th-hero-unit">' + esc(col.hero.unit || '') + '</span></div>' +
          '<div class="th-hero-label">' + esc(col.hero.label || '') + '</div>'
        : '';
      var support = col.support ? '<p class="th-support">' + esc(col.support) + '</p>' : '';
      var context = col.context ? '<p class="th-context">' + esc(col.context) + '</p>' : '';
      var secondary = col.secondary
        ? '<div class="th-secondary"><span class="th-secondary-value">' + esc(col.secondary.value) + '</span> ' +
          '<span class="th-secondary-label">' + esc(col.secondary.label || '') + '</span></div>'
        : '';
      return (
        '<div class="th-col">' +
        '  <div class="th-col-label">' + esc(col.label || '') + '</div>' +
        '  ' + support +
        '  ' + hero +
        '  ' + context +
        '  ' + secondary +
        '</div>'
      );
    }).join('');
    return (
      '<div class="archetype archetype-thesis">' +
      '  <div class="th-header">' + eyebrow +
      '    <h2 class="th-headline">' + esc(d.headline) + '</h2>' +
      '  </div>' +
      '  <div class="th-cols">' + cols + '</div>' +
      '</div>'
    );
  }

  /* ----- archetype: diagram ----------------------------------------- */
  /* Slide 4.2: two motions side by side, then a horizontal band        */
  /* underneath labeled VC ecosystem and DevRel feeding both.           */
  function renderDiagram(d) {
    var motions = (d.motions || []).slice(0, 2).map(function (m) {
      var lines = (m.lines || []).map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('');
      var cls = m.accent === 'lime' ? 'dg-motion-lime' : 'dg-motion-purple';
      return (
        '<div class="dg-motion ' + cls + '">' +
        '  <div class="dg-motion-label">' + esc(m.label || '') + '</div>' +
        '  <div class="dg-motion-headline">' + esc(m.headline || '') + '</div>' +
        (lines ? '<ul class="dg-motion-lines">' + lines + '</ul>' : '') +
        '</div>'
      );
    }).join('');
    var band = d.band
      ? '<div class="dg-band">' +
        '  <div class="dg-band-arrows"><span></span><span></span></div>' +
        '  <div class="dg-band-content">' +
        '    <div class="dg-band-label">' + esc(d.band.label || '') + '</div>' +
        '    <div class="dg-band-text">' + esc(d.band.text || '') + '</div>' +
        '  </div>' +
        '</div>'
      : '';
    var eyebrow = d.eyebrow ? '<div class="dg-eyebrow">' + esc(d.eyebrow) + '</div>' : '';
    var headline = d.headline ? '<h2 class="dg-headline">' + esc(d.headline) + '</h2>' : '';
    return (
      '<div class="archetype archetype-diagram">' +
      '  <div class="dg-header">' + eyebrow + headline + '</div>' +
      '  <div class="dg-motions">' + motions + '</div>' +
      '  ' + band +
      '</div>'
    );
  }

  /* ----- archetype: timeline ---------------------------------------- */
  /* Slide 4.3: a short dated horizontal timeline of regulatory events. */
  function renderTimeline(d) {
    var items = (d.items || []).map(function (it, i) {
      var cls = it.accent === 'lime' ? 'tl-item-lime' : 'tl-item-purple';
      return (
        '<div class="tl-item ' + cls + '">' +
        '  <div class="tl-date">' + esc(it.date || '') + '</div>' +
        '  <div class="tl-dot"></div>' +
        '  <div class="tl-text">' + esc(it.text || '') + '</div>' +
        '</div>'
      );
    }).join('');
    var eyebrow = d.eyebrow ? '<div class="tl-eyebrow">' + esc(d.eyebrow) + '</div>' : '';
    var headline = d.headline ? '<h2 class="tl-headline">' + esc(d.headline) + '</h2>' : '';
    var footer = d.footer ? '<p class="tl-footer">' + esc(d.footer) + '</p>' : '';
    return (
      '<div class="archetype archetype-timeline">' +
      '  <div class="tl-header">' + eyebrow + headline + '</div>' +
      '  <div class="tl-track"><div class="tl-line"></div>' + items + '</div>' +
      '  ' + footer +
      '</div>'
    );
  }

  var renderers = {
    title: renderTitle,
    statement: renderStatement,
    image: renderImage,
    data: renderData,
    cards: renderCards,
    imagedata: renderImageData,
    thesis: renderThesis,
    diagram: renderDiagram,
    timeline: renderTimeline,
    logos: renderLogos
  };

  function renderSlide(slide) {
    var fn = renderers[slide.archetype];
    if (!fn) {
      return '<section><h2>Unknown archetype: ' + esc(slide.archetype) + '</h2></section>';
    }
    var id = slide.id ? ' id="' + esc(slide.id) + '"' : '';
    var transition = slide.archetype === 'title' ? ' data-transition="fade"' : '';
    return (
      '<section' + id + ' data-archetype="' + esc(slide.archetype) + '"' + transition + '>' +
      fn(slide.data || {}) +
      notesBlock(slide.notes) +
      '</section>'
    );
  }

  function mount() {
    var content = window.DECK_CONTENT;
    if (!content || !content.slides) {
      console.error('DECK_CONTENT missing. Did content.js load before archetypes.js?');
      return;
    }
    var root = document.querySelector('.reveal .slides');
    if (!root) {
      console.error('.reveal .slides root not found in DOM.');
      return;
    }
    root.innerHTML = content.slides.map(renderSlide).join('\n');
  }

  /* expose for debugging and for the bootstrap in index.html */
  window.NEBIUS_DECK = {
    mount: mount,
    render: renderSlide,
    renderers: renderers
  };
})();
