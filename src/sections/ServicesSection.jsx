const serviceCards = [
  { className: "service-card--red", label: "GO-GETTER" },
  { className: "service-card--yellow", label: "INNOVATOR" },
  { className: "service-card--blue", label: "RISK-TAKER" },
  { className: "service-card--green", label: "LEADER" },
  { className: "service-card--pink", label: "Brand Essence" },
];

function ServicesSection() {
  return (
    <section
      className="section-block services surface-blue"
      id="services"
      data-section-label="Brand Essence"
      data-section-color="#FADA5E"
    >
      <div className="services__sticky">
        <div className="services__track" id="servicesTrack">
          <article className="services__panel services__panel--intro reveal">
            <div className="services__intro">
              <div className="phrase-blob blob-one">
                <span>Brand</span>
                <span>Essence</span>
                <span>Summary</span>
              </div>
              <p className="services__copy">
                Think of these parameters as a guide to representing our brand
                in every interaction, both internally and externally.
              </p>
            </div>
          </article>
          {serviceCards.map((card) => (
            <article className="services__panel reveal" key={card.label}>
              <div className={`service-card ${card.className}`}>
                <span>{card.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
