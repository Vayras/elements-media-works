import { useEffect, useRef } from "react";
import { asset } from "../asset";
import Logo from "./Logo";

export const CONTACT_EMAIL = "collabs@elementsmediaworks.com";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#culture", label: "Who we are" },
  { href: "#international-brands", label: "Clients" },
  { href: "#impact", label: "Impact" },
  { href: "#projects", label: "Work" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
];

function MenuPanel({ isOpen, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (isOpen) closeRef.current?.focus();
  }, [isOpen]);

  return (
    <nav
      className={`ds-menu${isOpen ? " is-open" : ""}`}
      id="menuPanel"
      aria-label="Menu"
      aria-hidden={!isOpen}
      onClick={(event) => {
        if (event.target.closest("a")) onClose();
      }}
    >
      <div className="ds-menu__bar">
        <div className="ds-wrap">
          <a className="ds-menu__brand" href="#top" aria-label="EMW, Elements Media Works home" tabIndex={isOpen ? 0 : -1}>
            <Logo />
          </a>
          <button className="ds-menu__close" type="button" onClick={onClose} ref={closeRef} tabIndex={isOpen ? 0 : -1}>
            Close
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          </button>
        </div>
      </div>

      <div className="ds-wrap ds-grid ds-menu__body">
        <ol className="ds-menu__links">
          {navLinks.map((link, index) => (
            <li key={link.label} style={{ "--i": index }}>
              <a href={link.href} tabIndex={isOpen ? 0 : -1}>
                <span className="ds-menu__num">{String(index + 1).padStart(2, "0")}</span>
                <span className="ds-menu__word">{link.label}</span>
              </a>
            </li>
          ))}
        </ol>

        <aside className="ds-menu__aside">
          <a className="ds-btn ds-btn--navy" href={`mailto:${CONTACT_EMAIL}?subject=Let%E2%80%99s%20collab`} tabIndex={isOpen ? 0 : -1}>
            Let’s collab<span className="ds-btn__arrow" aria-hidden="true">→</span>
          </a>
          <img className="ds-menu__reel" src={asset("assets/images/contacto.gif")} alt="" />
          <div className="ds-menu__info">
            <span className="ds-caps">Email</span>
            <a className="ds-link" href={`mailto:${CONTACT_EMAIL}`} tabIndex={isOpen ? 0 : -1}>{CONTACT_EMAIL}</a>
          </div>
          <div className="ds-menu__info">
            <span className="ds-caps">Visit</span>
            <address style={{ fontStyle: "normal" }}>
              Shri Krishna Complex, 501, Link Rd,
              <br />
              Veera Desai Industrial Estate, Andheri West,
              <br />
              Mumbai, Maharashtra 400053
            </address>
          </div>
          <div className="ds-menu__info">
            <span className="ds-caps">Talk</span>
            <a className="ds-link" href="tel:+919820691905" tabIndex={isOpen ? 0 : -1}>+91 98206 91905</a>
            <a className="ds-link" href="tel:+919867349147" tabIndex={isOpen ? 0 : -1}>+91 98673 49147</a>
            <a className="ds-link" href="https://www.instagram.com/elementsmediaworks/" target="_blank" rel="noreferrer" tabIndex={isOpen ? 0 : -1}>
              Instagram ↗
            </a>
          </div>
        </aside>
      </div>
    </nav>
  );
}

export default MenuPanel;
