import { launchBrands, partnerBrands } from "../data/brands.js";

function LogoMarquee({ logos, direction = "left", duration, label, tone, eager = false }) {
  return (
    <div
      className={`ds-marquee ds-marquee--${direction} ds-marquee--${tone}`}
      style={{ "--ds-marquee-duration": `${duration}s` }}
    >
      <div className="ds-marquee__track">
        {[0, 1].map((copy) => (
          <ul
            className="ds-marquee__group"
            aria-label={copy === 0 ? label : undefined}
            aria-hidden={copy === 1 ? true : undefined}
            key={copy}
          >
            {logos.map((logo) => (
              <li className="ds-marquee__item" key={`${logo.name}-${copy}`}>
                <img className={logo.isWhite ? "is-white" : undefined} src={logo.src} alt={copy === 0 ? logo.name : ""} loading={eager ? "eager" : "lazy"} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

function InternationalBrandsSection() {
  return (
    <section className="ds-clients" id="international-brands" aria-labelledby="clientsTitle">
      <div className="ds-wrap ds-grid ds-clients__head">
        <div className="ds-clients__intro">
          <p className="ds-label ds-clients__label">
            <span>03</span>
            <span>Clients</span>
          </p>
          <h2 className="ds-h2" id="clientsTitle">
            We help international brands launch in India.
          </h2>
        </div>
        <p className="ds-lede ds-clients__lede">
          Strategy, content, creators, events and cultural moments that make global names feel native to Indian audiences.
        </p>
      </div>

      <div className="ds-wrap ds-clients__row-head">
        <h3>Global launches</h3>
        <span>{launchBrands.length} international brands we brought to India</span>
      </div>
      <LogoMarquee logos={launchBrands} direction="left" duration={60} label="International brands launched in India" tone="light" eager />

      <div className="ds-clients__band">
        <div className="ds-wrap ds-clients__row-head ds-clients__row-head--dark">
          <h3>And won the trust of many…</h3>
          <span>{partnerBrands.length} Indian and global brands</span>
        </div>
        <LogoMarquee logos={partnerBrands} direction="right" duration={220} label="Brands we have worked with" tone="dark" />
      </div>
    </section>
  );
}

export default InternationalBrandsSection;
