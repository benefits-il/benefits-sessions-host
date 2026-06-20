/* ===========================================================================
   console.js — קיפול רצועות בקונסולת-ההוראה (benefits-sessions-host).
   Vanilla JS, בלי שום תלות. הופך כל .lane-head ללחיץ — מקפל/פותח את .lane-body.
   כל הסגנון יושב ב-console.css; כאן רק ההתנהגות.
   =========================================================================== */
(function () {
  'use strict';

  /* ---- תצורה (שתי ההכרעות של בן) ----------------------------------------
     DEFAULT_OPEN — מצב-ברירת-מחדל בטעינה:
        'all'        = כל הרצועות פתוחות.
        'class-only' = רק "בכיתה" פתוחה, השאר מכווצות.
     PERSIST — לשמור את מצב-הקיפול בין רענונים ב-localStorage (true/false).
     ----------------------------------------------------------------------- */
  var DEFAULT_OPEN = 'class-only';
  var PERSIST = false;

  var STORE_PREFIX = 'host-lanes:';

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function isClassLane(lane) {
    var h = lane.querySelector('.lane-head h2');
    return !!h && h.textContent.trim() === 'בכיתה';
  }

  function apply(lane, head, collapsed) {
    lane.classList.toggle('is-collapsed', collapsed);
    head.setAttribute('aria-expanded', String(!collapsed));
  }

  ready(function () {
    var lanes = Array.prototype.slice.call(
      document.querySelectorAll('.session-lanes .lane')
    );
    if (!lanes.length) return;

    var storeKey = STORE_PREFIX + location.pathname;
    var saved = null;
    if (PERSIST) {
      try { saved = JSON.parse(localStorage.getItem(storeKey) || 'null'); }
      catch (e) { saved = null; }
    }

    function persist() {
      if (!PERSIST) return;
      try {
        localStorage.setItem(storeKey, JSON.stringify(
          lanes.map(function (l) { return l.classList.contains('is-collapsed'); })
        ));
      } catch (e) {}
    }

    lanes.forEach(function (lane, i) {
      var head = lane.querySelector('.lane-head');
      var body = lane.querySelector('.lane-body');
      if (!head || !body) return;

      if (!body.id) body.id = 'lane-body-' + i;

      /* חץ-קיפול — דקורטיבי, החל ל-aria */
      var chev = document.createElement('i');
      chev.className = 'ti ti-chevron-down lane-toggle';
      chev.setAttribute('aria-hidden', 'true');
      head.appendChild(chev);
      if (!head.querySelector('.ln-count')) chev.classList.add('is-end');

      /* כותרת-הרצועה הופכת לכפתור-קיפול */
      head.setAttribute('role', 'button');
      head.setAttribute('tabindex', '0');
      head.setAttribute('aria-controls', body.id);
      head.classList.add('is-toggleable');

      /* מצב התחלתי */
      var collapsed;
      if (PERSIST && saved && typeof saved[i] === 'boolean') {
        collapsed = saved[i];
      } else if (DEFAULT_OPEN === 'class-only') {
        collapsed = !isClassLane(lane);
      } else {
        collapsed = false;
      }
      apply(lane, head, collapsed);

      function toggle() {
        apply(lane, head, !lane.classList.contains('is-collapsed'));
        persist();
      }

      head.addEventListener('click', toggle);
      head.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          toggle();
        }
      });
    });
  });
})();
