/* Dear Z. — small progressive enhancements. The site works without JS. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- header: solid after scrolling, mobile menu ---- */
  var header = document.querySelector("[data-header]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");

  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function setMenu(open) {
    if (!header || !toggle) return;
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
  }
  if (nav) {
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  /* ---- hero: drifting memory debris in the nine colors ---- */
  var field = document.querySelector("[data-debris]");
  if (field && !reduceMotion) {
    var colors = ["#e5484d", "#f0892b", "#f2cf3a", "#5bb85b", "#3f7fd9", "#8b5cc7", "#f4a7b9", "#86cdf0", "#e9b466"];
    var count = window.innerWidth < 600 ? 14 : 26;
    for (var i = 0; i < count; i++) {
      var d = document.createElement("i");
      var size = (Math.random() * 3 + 1.5).toFixed(1);
      d.style.cssText =
        "left:" + (Math.random() * 100).toFixed(2) + "%;" +
        "width:" + size + "px;height:" + size + "px;" +
        "--c:" + colors[i % colors.length] + ";" +
        "--o:" + (Math.random() * 0.5 + 0.35).toFixed(2) + ";" +
        "--dx:" + (Math.random() * 80 - 40).toFixed(0) + "px;" +
        "--dur:" + (Math.random() * 12 + 12).toFixed(1) + "s;" +
        "--delay:-" + (Math.random() * 20).toFixed(1) + "s;";
      field.appendChild(d);
    }
  }

  /* ---- chapters: arrow buttons for the horizontal scroll ---- */
  var scroller = document.querySelector("[data-scroller]");
  var prev = document.querySelector("[data-scroll-prev]");
  var next = document.querySelector("[data-scroll-next]");
  if (scroller && prev && next) {
    var step = function () {
      var card = scroller.querySelector("li");
      return card ? card.getBoundingClientRect().width + 20 : 320;
    };
    var sync = function () {
      prev.disabled = scroller.scrollLeft <= 4;
      next.disabled = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 4;
    };
    prev.addEventListener("click", function () { scroller.scrollBy({ left: -step(), behavior: reduceMotion ? "auto" : "smooth" }); });
    next.addEventListener("click", function () { scroller.scrollBy({ left: step(), behavior: reduceMotion ? "auto" : "smooth" }); });
    scroller.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();
  }

  /* ---- lightbox for gallery + chapter art ---- */
  var dialog = document.querySelector("[data-lightbox-dialog]");
  var links = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox]"));
  if (dialog && links.length && typeof dialog.showModal === "function") {
    var img = dialog.querySelector("[data-lightbox-img]");
    var cap = dialog.querySelector("[data-lightbox-caption]");
    var btnPrev = dialog.querySelector("[data-lightbox-prev]");
    var btnNext = dialog.querySelector("[data-lightbox-next]");
    var current = 0;

    var show = function (i) {
      current = (i + links.length) % links.length;
      var a = links[current];
      var thumb = a.querySelector("img");
      img.src = a.getAttribute("href");
      img.alt = thumb ? thumb.alt : "";
      cap.textContent = a.getAttribute("data-caption") || "";
    };
    btnPrev.hidden = btnNext.hidden = links.length < 2;

    links.forEach(function (a, i) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        show(i);
        dialog.showModal();
      });
    });
    btnPrev.addEventListener("click", function () { show(current - 1); });
    btnNext.addEventListener("click", function () { show(current + 1); });
    dialog.querySelector("[data-lightbox-close]").addEventListener("click", function () { dialog.close(); });
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) dialog.close();
    });
    dialog.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });
  }

  /* ---- audio & video: only one plays at a time ---- */
  var media = Array.prototype.slice.call(document.querySelectorAll("audio, video"));
  media.forEach(function (m) {
    m.addEventListener("play", function () {
      media.forEach(function (o) { if (o !== m) o.pause(); });
      var t = m.closest("[data-track]");
      if (t) t.classList.add("is-playing");
    });
    m.addEventListener("pause", function () {
      var t = m.closest("[data-track]");
      if (t) t.classList.remove("is-playing");
    });
  });
})();
