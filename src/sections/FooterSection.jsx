import EmwWall from "../components/EmwWall.jsx";

const footerLinks = [
  { href: "#top", label: "Elements Mediaworks" },
  { href: "#top", label: "Brand Identity & Guidelines" },
  { href: "#services", label: "V 2.0 March 2024" },
  { href: "#contact", label: "For Internal Uses Only" },
];

const traits = ["GO-GETTER", "INNOVATOR", "RISK-TAKER", "LEADER"];

function FooterSection() {
  return (
    <footer
      className="section-block site-footer surface-blue"
      id="contact"
      data-section-label="Contact"
      data-section-color="#54AD27"
    >
      <div className="footer-top">
        <ul>
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <address>
          <span>217, Kuber Complex, New Link Road</span>
          <span>Andheri West, Mumbai 400053</span>
          <a href="tel:+919820691905">Mobile: +91 98206 91905</a>
          <a href="tel:+919867349147">+91 98673 49147</a>
          <a href="mailto:shashwat@elementsmediaworks.com">shashwat@elementsmediaworks.com</a>
          <a href="mailto:jaymin@elementsmediaworks.com">jaymin@elementsmediaworks.com</a>
        </address>
        <ul className="footer-social">
          {traits.map((trait) => (
            <li key={trait}>
              <a href="#services">{trait}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-wall">
        <EmwWall className="wall-footer" rows={8} />
        <a className="contact-blob" href="mailto:shashwat@elementsmediaworks.com">
          <span>Contact</span>
          <span>E-MAIL</span>
          <strong>EMW</strong>
        </a>
      </div>

      <div className="footer-bottom">
        <a className="brand brand--footer" href="#top">
          EMW
        </a>
        <span>V 2.0 March 2024</span>
      </div>
    </footer>
  );
}

export default FooterSection;
