const metaLinks = [
  { href: "#services", label: "V 2.0 March 2024" },
  { href: "#contact", label: "For Internal Uses Only" },
  { href: "https://www.elementsmediaworks.com", label: "www.elementsmediaworks.com" },
];

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#culture", label: "Culture" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

function MenuPanel({ isOpen, onClose }) {
  return (
    <nav
      className={`menu-panel${isOpen ? " is-open" : ""}`}
      id="menuPanel"
      aria-label="Menu"
      onClick={(event) => {
        if (event.target.closest("a")) onClose();
      }}
    >
      <div className="menu-panel__extras">
        <a className="lang-chip" href="https://www.elementsmediaworks.com">
          EMW
        </a>
        <ul>
          {metaLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="menu-panel__shape">
        <div className="menu-panel__links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <img src="/assets/images/contacto.gif" alt="" />
      </div>
    </nav>
  );
}

export default MenuPanel;
