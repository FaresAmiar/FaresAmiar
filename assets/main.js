/* Fares Amiar — page perso : thème, sommaire actif, apparitions.
   Aucune dépendance, aucun tracker. */

(function () {
  "use strict";

  /* --- thème sombre / clair, mémorisé --- */
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  var label = btn ? btn.querySelector(".theme__label") : null;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (btn) btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    if (label) label.textContent = theme === "dark" ? "Sombre" : "Clair";
  }

  var stored = null;
  try { stored = localStorage.getItem("fa-theme"); } catch (e) { stored = null; }
  if (stored === "light" || stored === "dark") {
    applyTheme(stored);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    applyTheme("light");
  }

  if (btn) {
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("fa-theme", next); } catch (e) {}
    });
  }

  /* --- lien de nav actif selon la section visible --- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".top__nav a"));
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var seen = new Map();
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { seen.set(en.target.id, en.isIntersecting ? en.intersectionRatio : 0); });
      var best = null;
      seen.forEach(function (ratio, id) { if (best === null || ratio > seen.get(best)) best = id; });
      navLinks.forEach(function (a) {
        a.setAttribute("aria-current", best && a.getAttribute("href") === "#" + best ? "true" : "false");
      });
    }, { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* --- apparitions douces, désactivées si mouvement réduit --- */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(".section, .row, .card");
  if (reduce || !("IntersectionObserver" in window)) return;

  targets.forEach(function (el) { el.classList.add("reveal"); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
  targets.forEach(function (el) { io.observe(el); });
})();
