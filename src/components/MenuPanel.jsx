const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#culture", label: "Culture" },
  { href: "#international-brands", label: "Brands" },
  { href: "#impact", label: "Impact" },
  { href: "#projects", label: "Work" },
  { href: "#case-studies", label: "Case Studies" },
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
