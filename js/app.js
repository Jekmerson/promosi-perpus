/**
 * Main Presentation & Showcase Logic
 * Sistem Informasi Perpustakaan Sekolah - Showcase Portfolio
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavbar();
  renderModulesGrid();
  renderScreenshotGallery();
  initGalleryModal();
  initScrollAnimations();
});

/* ----------------------------------------------------
 * Theme Toggler (Dark / Light Mode)
 * -------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const currentTheme = localStorage.getItem("site-theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = activeTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("site-theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector(".theme-icon");
  if (!icon) return;
  if (theme === "dark") {
    icon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  } else {
    icon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

/* ----------------------------------------------------
 * Navbar & Smooth Scroll
 * -------------------------------------------------- */
function initNavbar() {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    highlightCurrentNavSection();
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-open");
      mobileToggle.classList.toggle("is-active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("mobile-open");
        mobileToggle.classList.remove("is-active");
      });
    });
  }
}

function highlightCurrentNavSection() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPosition = window.scrollY + 150;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

/* ----------------------------------------------------
 * Render Modules Bento Grid
 * -------------------------------------------------- */
function renderModulesGrid() {
  const container = document.getElementById("modules-bento-grid");
  if (!container || !window.APP_DATA || !window.APP_DATA.modules) return;

  container.innerHTML = window.APP_DATA.modules.map((mod, idx) => `
    <div class="bento-card ${idx === 0 || idx === 3 ? 'bento-span-2' : ''}" data-aos="fade-up">
      <div class="bento-header">
        <div class="bento-icon-wrapper">${mod.icon}</div>
        <span class="bento-tag">${mod.tag}</span>
      </div>
      <h3 class="bento-title">${mod.title}</h3>
      <p class="bento-desc">${mod.desc}</p>
      <div class="bento-highlights">
        ${mod.highlights.map(h => `<span class="highlight-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> ${h}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* ----------------------------------------------------
 * Render Screenshots Gallery
 * -------------------------------------------------- */
let activeGalleryCategory = "all";

function renderScreenshotGallery() {
  const container = document.getElementById("gallery-grid");
  const filterButtons = document.querySelectorAll(".gallery-filter-btn");
  if (!container || !window.APP_DATA || !window.APP_DATA.screenshots) return;

  function render() {
    const items = window.APP_DATA.screenshots.filter(item => {
      if (activeGalleryCategory === "all") return true;
      if (activeGalleryCategory === "master") return item.category === "master" || item.category === "katalog";
      if (activeGalleryCategory === "sirkulasi") return item.category === "sirkulasi";
      if (activeGalleryCategory === "koleksi") return item.category === "koleksi";
      if (activeGalleryCategory === "laporan") return item.category === "laporan" || item.category === "kunjungan";
      return item.category === activeGalleryCategory;
    });

    container.innerHTML = items.map((item) => `
      <div class="gallery-card" onclick="openGalleryModal(${window.APP_DATA.screenshots.indexOf(item)})">
        <div class="gallery-image-wrapper">
          <img src="${item.file}" alt="${item.title}" loading="lazy" class="gallery-img">
          <div class="gallery-overlay">
            <span class="gallery-zoom-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              Klik untuk Perbesar HD
            </span>
          </div>
          <span class="gallery-card-badge">${item.badge}</span>
        </div>
        <div class="gallery-info">
          <span class="gallery-cat-label">${item.categoryLabel}</span>
          <h4 class="gallery-card-title">${item.title}</h4>
          <p class="gallery-card-desc">${item.description}</p>
        </div>
      </div>
    `).join("");
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeGalleryCategory = btn.dataset.category;
      render();
    });
  });

  render();
}

/* ----------------------------------------------------
 * Gallery Modal HD Zoom Viewer
 * -------------------------------------------------- */
let currentModalIndex = 0;

function initGalleryModal() {
  const modal = document.getElementById("gallery-hd-modal");
  const prevBtn = document.getElementById("modal-prev-btn");
  const nextBtn = document.getElementById("modal-next-btn");
  const closeBtn = document.getElementById("modal-gallery-close");

  if (!modal) return;

  window.openGalleryModal = function(index) {
    currentModalIndex = index;
    updateModalContent();
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  function updateModalContent() {
    const item = window.APP_DATA.screenshots[currentModalIndex];
    if (!item) return;

    const modalImg = document.getElementById("modal-gallery-img");
    const modalTitle = document.getElementById("modal-gallery-title");
    const modalDesc = document.getElementById("modal-gallery-desc");
    const modalBadge = document.getElementById("modal-gallery-badge");
    const modalCounter = document.getElementById("modal-gallery-counter");

    if (modalImg) modalImg.src = item.file;
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalDesc) modalDesc.textContent = item.description;
    if (modalBadge) modalBadge.textContent = item.badge;
    if (modalCounter) modalCounter.textContent = `${currentModalIndex + 1} / ${window.APP_DATA.screenshots.length}`;
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      currentModalIndex = (currentModalIndex - 1 + window.APP_DATA.screenshots.length) % window.APP_DATA.screenshots.length;
      updateModalContent();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      currentModalIndex = (currentModalIndex + 1) % window.APP_DATA.screenshots.length;
      updateModalContent();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("modal-overlay-bg")) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    } else if (e.key === "ArrowLeft") {
      currentModalIndex = (currentModalIndex - 1 + window.APP_DATA.screenshots.length) % window.APP_DATA.screenshots.length;
      updateModalContent();
    } else if (e.key === "ArrowRight") {
      currentModalIndex = (currentModalIndex + 1) % window.APP_DATA.screenshots.length;
      updateModalContent();
    }
  });
}

/* ----------------------------------------------------
 * Scroll & Intersection Animations
 * -------------------------------------------------- */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll("[data-aos]");
  
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    animatedElements.forEach(el => el.classList.add("aos-animate"));
  }
}
