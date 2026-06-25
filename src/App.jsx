import { useEffect, useState } from "react";
import Cursor from "./components/Cursor.jsx";
import Header from "./components/Header.jsx";
import CultureSection from "./sections/CultureSection.jsx";
import MenuPanel from "./components/MenuPanel.jsx";
import Preloader from "./components/Preloader.jsx";
import FooterSection from "./sections/FooterSection.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import ServicesSection from "./sections/ServicesSection.jsx";
import WorkSection from "./sections/WorkSection.jsx";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [preloaderProgress, setPreloaderProgress] = useState(0);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.classList.toggle("loaded", isLoaded);
    return () => document.body.classList.remove("loaded");
  }, [isLoaded]);

  useEffect(() => {
    let value = 0;
    let finishTimeout;
    let removeTimeout;

    const loaderTimer = window.setInterval(() => {
      value = Math.min(100, value + Math.ceil(Math.random() * 13));
      setPreloaderProgress(value);

      if (value >= 100) {
        window.clearInterval(loaderTimer);
        finishTimeout = window.setTimeout(() => {
          setIsLoaded(true);
          removeTimeout = window.setTimeout(() => setShowPreloader(false), 900);
        }, 650);
      }
    }, 70);

    return () => {
      window.clearInterval(loaderTimer);
      window.clearTimeout(finishTimeout);
      window.clearTimeout(removeTimeout);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const sections = document.querySelectorAll(".section-block[data-section-label]");
    const aboutStatement = document.querySelector(".about__statement");
    const cultureSection = document.querySelector("#culture");
    const servicesSection = document.querySelector("#services");
    const servicesTrack = document.querySelector("#servicesTrack");
    let ticking = false;
    let animationFrame;

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

    const updateCultureOpacity = () => {
      if (!cultureSection) return;

      const start = cultureSection.offsetTop - window.innerHeight;
      const end = cultureSection.offsetTop;
      const progress = clamp((window.scrollY - start) / (end - start), 0, 1);
      const opacity = 0.1 + progress * 0.9;

      cultureSection.style.setProperty("--culture-opacity", opacity.toFixed(3));
    };

    const applySectionState = (section) => {
      if (!section) return;

      const { sectionColor: color } = section.dataset;
      if (color) root.style.setProperty("--live-color", color);
      body.classList.toggle("in-footer", section.classList.contains("site-footer"));
    };

    const updateSectionByViewport = () => {
      const viewportLine = window.innerHeight * 0.55;
      const matching = [...sections].filter((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= viewportLine && rect.bottom >= viewportLine;
      });
      const activeSection = matching[matching.length - 1] || sections[0];

      applySectionState(activeSection);
      updateStatementOpacity();
      updateCultureOpacity();
      updateServicesScroll();
      ticking = false;
    };

    const requestSectionUpdate = () => {
      if (ticking) return;
      ticking = true;
      animationFrame = window.requestAnimationFrame(updateSectionByViewport);
    };

    window.addEventListener("scroll", requestSectionUpdate, { passive: true });
    window.addEventListener("resize", requestSectionUpdate);
    window.addEventListener("load", requestSectionUpdate);
    updateSectionByViewport();

    return () => {
      window.removeEventListener("scroll", requestSectionUpdate);
      window.removeEventListener("resize", requestSectionUpdate);
      window.removeEventListener("load", requestSectionUpdate);
      window.cancelAnimationFrame(animationFrame);
      body.classList.remove("in-footer");
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) return undefined;

    let isSnapping = false;
    let unlockTimer;
    let lastWheelTime = 0;
    const snapDuration = 900;

    const getSnapPoints = () =>
      [...document.querySelectorAll(".section-block[data-section-label]")]
        .map((section) => ({
          id: section.id,
          // Use the element's natural document position. getBoundingClientRect()
          // changes while sticky sections are pinned and can cause half-section snaps.
          top: Math.round(section.offsetTop),
        }))
        .sort((a, b) => a.top - b.top);

    const getCurrentSnapIndex = (snapPoints) => {
      const currentTop = window.scrollY;
      return snapPoints.reduce((nearestIndex, point, index) => {
        const nearestDistance = Math.abs(snapPoints[nearestIndex].top - currentTop);
        const pointDistance = Math.abs(point.top - currentTop);
        return pointDistance < nearestDistance ? index : nearestIndex;
      }, 0);
    };

    const lockUntilScrollSettles = () => {
      isSnapping = true;
      window.clearTimeout(unlockTimer);
      unlockTimer = window.setTimeout(() => {
        isSnapping = false;
      }, snapDuration);
    };

    const snapTo = (direction) => {
      const snapPoints = getSnapPoints();
      if (!snapPoints.length) return;

      const currentIndex = getCurrentSnapIndex(snapPoints);
      const targetIndex = clamp(currentIndex + direction, 0, snapPoints.length - 1);
      const target = snapPoints[targetIndex];
      if (!target || targetIndex === currentIndex) return;

      lockUntilScrollSettles();
      window.scrollTo({ top: target.top, behavior: "smooth" });
    };

    const snapToEdge = (edge) => {
      const snapPoints = getSnapPoints();
      const target = edge === "start" ? snapPoints[0] : snapPoints[snapPoints.length - 1];
      if (!target) return;

      lockUntilScrollSettles();
      window.scrollTo({ top: target.top, behavior: "smooth" });
    };

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < 12 || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      event.preventDefault();

      const now = Date.now();
      if (isSnapping || now - lastWheelTime < snapDuration) return;

      lastWheelTime = now;
      snapTo(event.deltaY > 0 ? 1 : -1);
    };

    const handleKeyDown = (event) => {
      const target = event.target;
      const isTyping =
        target instanceof HTMLElement &&
        (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));
      const isNextKey = ["ArrowDown", "PageDown"].includes(event.key) || (event.key === " " && !event.shiftKey);
      const isPreviousKey = ["ArrowUp", "PageUp"].includes(event.key) || (event.key === " " && event.shiftKey);
      const isEdgeKey = ["Home", "End"].includes(event.key);

      if (isTyping || event.metaKey || event.ctrlKey || event.altKey || (!isNextKey && !isPreviousKey && !isEdgeKey)) {
        return;
      }

      event.preventDefault();
      if (isSnapping) return;

      if (isNextKey) {
        snapTo(1);
      } else if (isPreviousKey) {
        snapTo(-1);
      } else if (event.key === "Home") {
        snapToEdge("start");
      } else if (event.key === "End") {
        snapToEdge("end");
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(unlockTimer);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

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

    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    if (!cursor || !window.matchMedia("(pointer: fine)").matches) return undefined;

    const moveCursor = (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    const handleEnter = () => cursor.classList.add("is-hovering");
    const handleLeave = () => cursor.classList.remove("is-hovering");
    const interactiveItems = document.querySelectorAll("a, button");

    window.addEventListener("mousemove", moveCursor);
    interactiveItems.forEach((item) => {
      item.addEventListener("mouseenter", handleEnter);
      item.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveItems.forEach((item) => {
        item.removeEventListener("mouseenter", handleEnter);
        item.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {showPreloader && <Preloader progress={preloaderProgress} />}
      <Cursor />
      <Header isMenuOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen((isOpen) => !isOpen)} />
      <MenuPanel isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main>
        <HeroSection startTyping={!showPreloader} />
        <ServicesSection />
        <CultureSection />
        <WorkSection />
      </main>
      <FooterSection />
    </>
  );
}

export default App;
