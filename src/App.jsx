import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import CaseStudiesSection from "./sections/CaseStudiesSection.jsx";
import CaseStudyDetailSection from "./sections/CaseStudyDetailSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import CultureSection from "./sections/CultureSection.jsx";
import MenuPanel from "./components/MenuPanel.jsx";
import Preloader from "./components/Preloader.jsx";
import FooterSection from "./sections/FooterSection.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import ImpactSection from "./sections/ImpactSection.jsx";
import InternationalBrandsSection from "./sections/InternationalBrandsSection.jsx";
import ServicesSection from "./sections/ServicesSection.jsx";
import WorkSection from "./sections/WorkSection.jsx";

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
    const updateCaseDetailState = () => {
      const openCase = document.querySelector(".ds-case:target");
      const isCaseDetailOpen = Boolean(openCase);
      if (openCase) {
        openCase.scrollTop = 0;
        openCase.focus({ preventScroll: true });
      }
      document.body.classList.toggle("case-detail-open", isCaseDetailOpen);
      document.documentElement.classList.toggle("case-detail-open", isCaseDetailOpen);
    };

    window.addEventListener("hashchange", updateCaseDetailState);
    window.addEventListener("load", updateCaseDetailState);
    updateCaseDetailState();

    return () => {
      window.removeEventListener("hashchange", updateCaseDetailState);
      window.removeEventListener("load", updateCaseDetailState);
      document.body.classList.remove("case-detail-open");
      document.documentElement.classList.remove("case-detail-open");
    };
  }, []);

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
    const handleEscape = (event) => {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      if (document.querySelector(".ds-case:target")) window.location.hash = "case-studies";
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {showPreloader && <Preloader progress={preloaderProgress} />}

      <Header isMenuOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen((isOpen) => !isOpen)} />
      <MenuPanel isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main>
        <HeroSection startTyping={!showPreloader} />
        <ServicesSection />
        <CultureSection />
        <InternationalBrandsSection />
        <ImpactSection />
        <WorkSection />
        <CaseStudiesSection />
        <CaseStudyDetailSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}

export default App;
