const impactStats = [
  { value: "12+", label: "Years" },
  { value: "450+", label: "Brands" },
  { value: "10k+", label: "Campaigns" },
  { value: "1M+", label: "Content Pieces" },
  { value: "100+", label: "Film Associations" },
  { value: "500+", label: "Celebrity Associations" },
  { value: "250k+", label: "Influencer Activations" },
  { value: "10 Bn+", label: "Impressions Delivered" },
];

const brandLogos = [
  { name: "Vodafone", src: "/assets/logos/vodafone.svg" },
  { name: "Siemens", src: "/assets/logos/siemens.svg" },
  { name: "Santander", src: "/assets/logos/santander.svg" },
  { name: "Sanitas", src: "/assets/logos/sanitas.svg" },
  { name: "DIA", src: "/assets/logos/dia.svg" },
  { name: "Burger King", src: "/assets/logos/burger-king.svg" },
  { name: "L'Oréal", src: "/assets/logos/loreal.svg" },
  { name: "Repsol", src: "/assets/logos/repsol.svg" },
  { name: "Fresenius", src: "/assets/logos/fresenius.svg" },
  { name: "Mahou", src: "/assets/logos/logo1.svg" },
  { name: "Meta", src: "/assets/logos/logo2.svg" },
  { name: "BBVA", src: "/assets/logos/logo3.svg" },
];

function ImpactSection() {
  const marqueeLogos = [...brandLogos, ...brandLogos];

  return (
    <section
      className="section-block impact-section"
      id="impact"
      data-section-label="Impact"
      data-section-color="#003366"
    >
      <div className="impact-section__inner">
        <div className="impact-section__head reveal">
          <p>Our journey</p>
          <h2>We have come a long way</h2>
        </div>

        <div className="impact-stats" aria-label="Impact metrics">
          {impactStats.map((stat) => (
            <article className="impact-stat reveal" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>

        <div className="impact-logos reveal" aria-label="Brands who trust us">
          <h3>And won the trust of many...</h3>
          <div className="impact-logo-row">
            <div className="impact-logo-track">
              {marqueeLogos.map((logo, index) => (
                <span className="impact-logo" key={`${logo.name}-${index}`}>
                  <img src={logo.src} alt={logo.name} loading="lazy" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
