const serviceItems = [
  { title: "Content Marketing", tag: "IPs & stories that convert" },
  { title: "Brand Solutions", tag: "Campaigns that drive action" },
  { title: "Marketing Innovations", tag: "New tech, fresh experiences" },
  { title: "Talent & Influencers", tag: "Voices across cultures" },
  { title: "Licensing & Merchandising", tag: "Collabs people keep" },
];

function ServicesSection() {
  return (
    <section className="ds-services" id="services" aria-labelledby="servicesTitle">
      <div className="ds-wrap ds-services__inner">
        <h2 className="ds-label ds-services__label" id="servicesTitle">
          <span>01</span>
          <span>Services</span>
        </h2>

        <ul className="ds-services__grid">
          {serviceItems.map((service, index) => (
            <li className="ds-services__cell reveal" key={service.title}>
              <h3 className="ds-services__name">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{service.title}</span>
              </h3>
              <p className="ds-services__tag">{service.tag}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ServicesSection;
