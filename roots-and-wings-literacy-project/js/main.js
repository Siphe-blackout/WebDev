/**
 * Roots & Wings Literacy Project — main.js
 * Mobile nav, scroll reveal, animated counters, demo form handling
 */
(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      navLinks.classList.toggle("is-open", !open);
    });

    // Close menu when a link is clicked (mobile)
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("is-open");
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  const reveals = document.querySelectorAll(".reveal");

  if (reveals.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- Animated counters ---------- */
  function animateCount(el) {
    const target = parseInt(el.getAttribute("data-count"), 10);
    const suffix = el.getAttribute("data-suffix") || "";
    if (isNaN(target)) return;

    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      el.textContent = value.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }
    requestAnimationFrame(tick);
  }

  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    const counterIo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            counterIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(function (el) {
      counterIo.observe(el);
    });
  } else {
    counters.forEach(function (el) {
      const target = el.getAttribute("data-count");
      const suffix = el.getAttribute("data-suffix") || "";
      el.textContent = Number(target).toLocaleString() + suffix;
    });
  }

  /* ---------- Demo form handling ---------- */
  document.querySelectorAll("[data-demo-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const success = form.querySelector(".form-success");
      if (success) {
        success.style.display = "block";
      }
      // Reset after a short delay for demo UX
      setTimeout(function () {
        form.reset();
        // Re-activate default amount button if present
        const activeBtn = form.querySelector(".amount-btn.active");
        if (!activeBtn) {
          const first = form.querySelector(".amount-btn");
          if (first) first.classList.add("active");
        }
      }, 100);
    });
  });

  /* ---------- Donation amount buttons ---------- */
  document.querySelectorAll(".amount-group").forEach(function (group) {
    const buttons = group.querySelectorAll(".amount-btn");
    const custom = group.parentElement.querySelector("#custom-amount");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        if (custom) custom.value = "";
      });
    });

    if (custom) {
      custom.addEventListener("input", function () {
        if (custom.value) {
          buttons.forEach(function (b) {
            b.classList.remove("active");
          });
        }
      });
    }
  });
})();
