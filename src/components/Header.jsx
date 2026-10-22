import { useEffect, useRef } from "react";
import Logo from "./Logo";

function Header({ isMenuOpen, onMenuToggle }) {
  const headerRef = useRef(null);

  useEffect(() => {
    let frame;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      headerRef.current?.style.setProperty("--ds-scroll", progress.toFixed(4));
      frame = undefined;
    };
    const onScroll = () => {
      if (frame === undefined) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== undefined) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="ds-header" ref={headerRef}>
      <div className="ds-wrap ds-header__bar">
        <a className="ds-header__brand" href="#top" aria-label="EMW, Elements Media Works home">
          <Logo />
        </a>
        <button
          className="ds-header__menu"
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="menuPanel"
          onClick={onMenuToggle}
        >
          <span className="ds-header__menu-text">Menu</span>
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M3 6h14M3 10h14M3 14h14" />
          </svg>
        </button>
      </div>
      <div className="ds-header__progress" aria-hidden="true" />
    </header>
  );
}

export default Header;
