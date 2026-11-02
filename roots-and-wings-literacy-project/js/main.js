/**
 * Roots & Wings Literacy Project — main.js
 * Mobile nav, scroll reveal, counters, forms, validation,
 * accordion, lightbox, search/filter, AJAX-style submission
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
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
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
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    const counterIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          counterIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { counterIo.observe(el); });
  } else {
    counters.forEach(function (el) {
      const target = el.getAttribute("data-count");
      const suffix = el.getAttribute("data-suffix") || "";
      el.textContent = Number(target).toLocaleString() + suffix;
    });
  }

  /* ---------- Donation amount buttons ---------- */
  document.querySelectorAll(".amount-group").forEach(function (group) {
    const buttons = group.querySelectorAll(".amount-btn");
    const custom = group.parentElement.querySelector("#custom-amount");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        if (custom) custom.value = "";
      });
    });
    if (custom) {
      custom.addEventListener("input", function () {
        if (custom.value) buttons.forEach(function (b) { b.classList.remove("active"); });
      });
    }
  });

  /* =====================================================
     FORM VALIDATION + AJAX-STYLE SUBMISSION
     ===================================================== */

  function showError(input, message) {
    const errorEl = document.getElementById(input.id + "-error");
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.display = "block";
    }
    input.classList.add("is-invalid");
    input.setAttribute("aria-invalid", "true");
  }

  function clearError(input) {
    const errorEl = document.getElementById(input.id + "-error");
    if (errorEl) {
      errorEl.textContent = "";
      errorEl.style.display = "none";
    }
    input.classList.remove("is-invalid");
    input.removeAttribute("aria-invalid");
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validatePhone(value) {
    if (!value) return true; // optional
    return /^[\d\s\-\+\(\)]{7,20}$/.test(value);
  }

  /* Character counters */
  document.querySelectorAll("textarea[maxlength]").forEach(function (ta) {
    const counter = document.getElementById(ta.id + "-count");
    if (counter) {
      ta.addEventListener("input", function () {
        counter.textContent = ta.value.length;
      });
    }
  });

  /* ----- Enquiry Form ----- */
  const enquiryForm = document.getElementById("enquiry-form");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      const first = document.getElementById("eq-first");
      const last = document.getElementById("eq-last");
      const email = document.getElementById("eq-email");
      const phone = document.getElementById("eq-phone");
      const interest = document.getElementById("eq-interest");

      [first, last, email, phone, interest].forEach(clearError);

      if (!first.value.trim() || first.value.trim().length < 2) {
        showError(first, "Please enter your first name (min 2 characters).");
        valid = false;
      }
      if (!last.value.trim() || last.value.trim().length < 2) {
        showError(last, "Please enter your last name (min 2 characters).");
        valid = false;
      }
      if (!validateEmail(email.value.trim())) {
        showError(email, "Please enter a valid email address.");
        valid = false;
      }
      if (phone.value && !validatePhone(phone.value.trim())) {
        showError(phone, "Please enter a valid phone number.");
        valid = false;
      }
      if (!interest.value) {
        showError(interest, "Please select what you are enquiring about.");
        valid = false;
      }

      if (!valid) return;

      // Simulate AJAX submission
      const submitBtn = enquiryForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";

      setTimeout(function () {
        const responses = {
          "tutoring": "Thank you! Free tutoring places are currently available for the upcoming term. A programme coordinator will contact you within 2 business days to discuss matching and schedule.",
          "book-mailings": "Thank you! Our monthly book mailings are free for eligible families. We will confirm availability and shipping details by email within 3 business days.",
          "summer-camps": "Thank you! Summer Reading Camp registration opens in March. We have noted your interest and will send priority information when registration begins. Camps are free for participating families.",
          "volunteer": "Thank you for your interest in volunteering! We will send you the next orientation dates and the short application form within 2 business days.",
          "sponsor": "Thank you for considering a sponsorship. A member of our partnerships team will reach out within 3 business days with current sponsorship packages and impact reports.",
          "other": "Thank you for your enquiry. We have received your message and will respond within 2 business days."
        };

        const responseBox = document.getElementById("enquiry-response");
        responseBox.innerHTML = "<strong>Enquiry received!</strong><br>" + (responses[interest.value] || responses["other"]);
        responseBox.style.display = "block";

        enquiryForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Enquiry";
      }, 900);
    });
  }

  /* ----- Contact Form ----- */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById("c-name");
      const email = document.getElementById("c-email");
      const topic = document.getElementById("c-topic");
      const message = document.getElementById("c-message");

      [name, email, topic, message].forEach(clearError);

      if (!name.value.trim() || name.value.trim().length < 2) {
        showError(name, "Please enter your full name.");
        valid = false;
      }
      if (!validateEmail(email.value.trim())) {
        showError(email, "Please enter a valid email address.");
        valid = false;
      }
      if (!topic.value) {
        showError(topic, "Please select a message type.");
        valid = false;
      }
      if (!message.value.trim() || message.value.trim().length < 10) {
        showError(message, "Please write a message of at least 10 characters.");
        valid = false;
      }

      if (!valid) return;

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";

      // Build mailto as a realistic “send email” action
      const subject = encodeURIComponent("Website contact: " + topic.options[topic.selectedIndex].text);
      const body = encodeURIComponent(
        "Name: " + name.value + "\n" +
        "Email: " + email.value + "\n" +
        "Topic: " + topic.options[topic.selectedIndex].text + "\n\n" +
        message.value
      );
      const mailto = "mailto:hello@rootsandwingsliteracy.org?subject=" + subject + "&body=" + body;

      setTimeout(function () {
        const responseBox = document.getElementById("contact-response");
        responseBox.innerHTML =
          "<strong>Ready to send!</strong><br>" +
          "Your message has been prepared. " +
          "<a href=\"" + mailto + "\" class=\"btn btn-primary\" style=\"margin-top:0.8rem; display:inline-flex;\">Open Email Client to Send</a>" +
          "<p style=\"margin-top:0.8rem; font-size:0.9rem;\">Or copy the details above and email us at hello@rootsandwingsliteracy.org.</p>";
        responseBox.style.display = "block";

        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      }, 700);
    });
  }

  /* Demo forms (newsletter, etc.) */
  document.querySelectorAll("[data-demo-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const success = form.querySelector(".form-success");
      if (success) success.style.display = "block";
      setTimeout(function () { form.reset(); }, 100);
    });
  });

  /* =====================================================
     ACCORDION
     ===================================================== */
  document.querySelectorAll(".accordion-header").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const item = btn.closest(".accordion-item");
      const isOpen = item.classList.contains("is-open");
      // close others in the same accordion
      item.parentElement.querySelectorAll(".accordion-item").forEach(function (i) {
        i.classList.remove("is-open");
        i.querySelector(".accordion-header").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* =====================================================
     LIGHTBOX GALLERY
     ===================================================== */
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img src="" alt="">';
  document.body.appendChild(lightbox);

  const lbImg = lightbox.querySelector("img");
  const lbClose = lightbox.querySelector(".lightbox-close");

  document.querySelectorAll("[data-lightbox]").forEach(function (thumb) {
    thumb.addEventListener("click", function (e) {
      e.preventDefault();
      lbImg.src = thumb.getAttribute("data-full") || thumb.src;
      lbImg.alt = thumb.alt || "";
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  lbClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

  /* =====================================================
     SEARCH / FILTER (Programs page example)
     ===================================================== */
  const searchInput = document.getElementById("program-search");
  const filterButtons = document.querySelectorAll("[data-filter]");
  const programCards = document.querySelectorAll("[data-program]");

  function filterPrograms() {
    const query = (searchInput ? searchInput.value.toLowerCase() : "");
    const activeFilter = document.querySelector("[data-filter].is-active");
    const filter = activeFilter ? activeFilter.getAttribute("data-filter") : "all";

    programCards.forEach(function (card) {
      const text = card.textContent.toLowerCase();
      const type = card.getAttribute("data-program");
      const matchesSearch = !query || text.includes(query);
      const matchesFilter = filter === "all" || type === filter;
      card.style.display = matchesSearch && matchesFilter ? "" : "none";
    });
  }

  if (searchInput) searchInput.addEventListener("input", filterPrograms);
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      filterPrograms();
    });
  });

})();