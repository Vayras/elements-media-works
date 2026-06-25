const root = document.documentElement;
const body = document.body;
const preloader = document.querySelector("#preloader");
const progress = document.querySelector("#loaderProgress");
const loaderBar = document.querySelector("#loaderBar");
const menuToggle = document.querySelector(".menu-toggle");
const menuPanel = document.querySelector("#menuPanel");
const sectionLabel = document.querySelector("#sectionLabel");
const cursor = document.querySelector(".cursor");
const aboutStatement = document.querySelector(".about__statement");
const servicesSection = document.querySelector("#services");
const servicesTrack = document.querySelector("#servicesTrack");

const setLiveColor = (color) => {
  root.style.setProperty("--live-color", color);
};

const applySectionState = (section) => {
  if (!section) return;

  const { sectionLabel: label, sectionColor: color } = section.dataset;
  if (sectionLabel && label) {
    sectionLabel.textContent = label;
  }
  if (color) setLiveColor(color);
  body.classList.toggle("in-footer", section.classList.contains("site-footer"));
};

const finishLoader = () => {
  body.classList.add("loaded");
  window.setTimeout(() => {
    if (preloader) preloader.remove();
  }, 900);
};

if (progress) {
  let value = 0;
  const loaderTimer = window.setInterval(() => {
    value = Math.min(100, value + Math.ceil(Math.random() * 13));
    progress.textContent = `${value}%`;
    if (loaderBar) loaderBar.style.width = `${value}%`;
    if (value >= 100) {
      window.clearInterval(loaderTimer);
      // hold at 100% briefly, then play the collapse (RPA loadComplete delay)
      window.setTimeout(finishLoader, 650);
    }
  }, 70);
}

const setMenuState = (isOpen) => {
  menuToggle.classList.toggle("is-open", isOpen);
  menuPanel.classList.toggle("is-open", isOpen);
  body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
};

menuToggle.addEventListener("click", () => {
  setMenuState(!menuPanel.classList.contains("is-open"));
});

menuPanel.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuState(false);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuState(false);
});

const sections = document.querySelectorAll(".section-block[data-section-label]");

let ticking = false;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const updateServicesScroll = () => {
  if (!servicesSection || !servicesTrack) return;

  const rect = servicesSection.getBoundingClientRect();
  const scrollableDistance = servicesSection.offsetHeight - window.innerHeight;
  const trackDistance = servicesTrack.scrollWidth - window.innerWidth;
  const progress = scrollableDistance > 0 ? clamp(-rect.top / scrollableDistance, 0, 1) : 0;
  const activeIndex = Math.round(progress * (servicesTrack.children.length - 1));
  const introProgress = clamp(progress * (servicesTrack.children.length - 1), 0, 1);
  const copyOpacity = 0.6 + introProgress * 0.4;

  servicesTrack.style.transform = `translate3d(${-trackDistance * progress}px, 0, 0)`;
  servicesSection.style.setProperty("--services-copy-opacity", copyOpacity.toFixed(3));
  [...servicesTrack.children].forEach((panel, index) => {
    panel.classList.toggle("is-current", index === activeIndex);
  });
};

const updateStatementOpacity = () => {
  if (!aboutStatement) return;

  const rect = aboutStatement.getBoundingClientRect();
  const fadeStart = window.innerHeight * 0.9;
  const fadeEnd = window.innerHeight * 0.25;
  const progress = clamp((fadeStart - rect.top) / (fadeStart - fadeEnd), 0, 1);
  const opacity = 0.6 + progress * 0.4;

  aboutStatement.style.setProperty("--statement-opacity", opacity.toFixed(3));
};

const updateSectionByViewport = () => {
  const viewportLine = window.innerHeight * 0.55;
  // With sticky-stacking, several sections can straddle the viewport line at
  // once (earlier ones stay pinned). The visually-topmost is the LAST match in
  // DOM order, since later sections have higher z-index and paint over.
  const matching = [...sections].filter((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= viewportLine && rect.bottom >= viewportLine;
  });
  const activeSection = matching[matching.length - 1] || sections[0];

  applySectionState(activeSection);
  updateStatementOpacity();
  updateServicesScroll();
  ticking = false;
};

const requestSectionUpdate = () => {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(updateSectionByViewport);
};

window.addEventListener("scroll", requestSectionUpdate, { passive: true });
window.addEventListener("resize", requestSectionUpdate);
window.addEventListener("load", requestSectionUpdate);
updateSectionByViewport();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.16,
  }
);

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

if (cursor && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });

  document.querySelectorAll("a, button").forEach((item) => {
    item.addEventListener("mouseenter", () => cursor.classList.add("is-hovering"));
    item.addEventListener("mouseleave", () => cursor.classList.remove("is-hovering"));
  });
}
