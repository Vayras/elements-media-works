import Logo from "../components/Logo.jsx";

const footerLinks = [{ href: "#top", label: "ELEMENTS MEDIA WORKS" }];


function FooterSection() {
  return (
    <footer
      className="section-block site-footer surface-blue"
      id="contact"
      data-section-label="Contact"
      data-section-color="#AD2754"
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

      </div>

      <div className="footer-wall">
        {/* Wall removed as requested */}
        <a className="contact-blob" href="mailto:shashwat@elementsmediaworks.com">
          <span>Contact</span>
          <span>E-MAIL</span>
          <strong aria-label="EMW, ELEMENTS MEDIA WORKS">
            <Logo className="emw-logo" />
          </strong>
        </a>
      </div>

      <div className="footer-bottom"></div>
    </footer>
  );
}

export default FooterSection;
