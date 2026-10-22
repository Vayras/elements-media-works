import { CONTACT_EMAIL } from "../components/MenuPanel.jsx";

const [emailUser, emailDomain] = CONTACT_EMAIL.split("@");

function ContactSection() {
  return (
    <section className="ds-contact" id="contact" aria-labelledby="contactTitle">
      <div className="ds-wrap ds-grid ds-contact__inner">
        <p className="ds-label ds-contact__label">
          <span>07</span>
          <span>Contact</span>
        </p>
        <h2 className="ds-contact__title" id="contactTitle">
          Let’s build your next brand moment.
        </h2>
        <a className="ds-contact__email" href={`mailto:${CONTACT_EMAIL}`}>
          {emailUser}@<wbr />
          {emailDomain}
        </a>
        <div className="ds-contact__cta">
          <a className="ds-btn ds-btn--yellow ds-btn--large" href={`mailto:${CONTACT_EMAIL}?subject=Let%E2%80%99s%20collab`}>
            Let’s collab
            <span className="ds-btn__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
