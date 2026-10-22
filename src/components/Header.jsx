import Logo from "./Logo";

function Header({ isMenuOpen, onMenuToggle }) {
  return (
    <header className="ds-header">
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
    </header>
  );
}

export default Header;
