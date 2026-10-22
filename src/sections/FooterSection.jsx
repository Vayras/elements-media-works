import Logo from "../components/Logo.jsx";

const INSTAGRAM_URL = "https://www.instagram.com/elementsmediaworks/";

const exploreLinks = [
  { href: "#services", label: "Services" },
  { href: "#international-brands", label: "Clients" },
  { href: "#impact", label: "Impact" },
  { href: "#projects", label: "Work" },
  { href: "#case-studies", label: "Case Studies" },
];

function FooterSection() {
  return (
    <footer className="ds-footer">
      <div className="ds-wrap">
        <div className="ds-grid ds-footer__grid">
          <div className="ds-footer__brand">
            <Logo className="ds-footer__logo" />
            <span>Elements Media Works</span>
          </div>

          <div className="ds-footer__col">
            <h2 className="ds-caps">Visit</h2>
            <address>
              Shri Krishna Complex, 501, Link Rd,
              <br />
              Veera Desai Industrial Estate, Andheri West,
              <br />
              Mumbai, Maharashtra 400053
            </address>
          </div>

          <div className="ds-footer__col">
            <h2 className="ds-caps">Talk</h2>
            <a className="ds-link" href="tel:+919820691905">
              +91 98206 91905
            </a>
            <a className="ds-link" href="tel:+919867349147">
              +91 98673 49147
            </a>
          </div>

          <nav className="ds-footer__col" aria-label="Footer">
            <h2 className="ds-caps">Explore</h2>
            <div className="ds-footer__links">
              {exploreLinks.map((link) => (
                <a className="ds-link" href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
              <a className="ds-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Instagram ↗
              </a>
            </div>
          </nav>
        </div>

        <div className="ds-footer__bottom">
          <span>© {new Date().getFullYear()} Elements Media Works</span>
          <a className="ds-link" href="#top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
