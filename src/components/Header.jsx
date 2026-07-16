import Logo from "./Logo";

function Header({ isMenuOpen, onMenuToggle }) {
  return (
    <header className="site-header" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="EMW home">
        <Logo className="emw-logo" />
      </a>
      <button
        className={`menu-toggle${isMenuOpen ? " is-open" : ""}`}
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="menuPanel"
        onClick={onMenuToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Header;
