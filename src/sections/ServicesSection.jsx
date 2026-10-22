const serviceItems = [
  {
    title: "Content Marketing",
    description: "With bespoke IPs and AFPs: stories that connect and convert.",
  },
  {
    title: "Brand Solutions",
    description: "Designing & executing campaigns that shape perception & drive action.",
  },
  {
    title: "Marketing Innovations",
    description: "Leveraging new tools & technology to deliver fresh brand experiences.",
  },
  {
    title: "Talent & Influencers",
    description: "Authentic voices amplified across various cultural tiers.",
  },
  {
    title: "Licensing & Merchandising",
    description: "Tangible extensions and licensed collaborations that deepen brand love.",
  },
];

function ServicesSection() {
  return (
    <section className="ds-services" id="services" aria-labelledby="servicesTitle">
      <div className="ds-wrap ds-grid ds-services__inner">
        <div className="ds-services__head">
          <p className="ds-label">
            <span>01</span>
            <span>Services</span>
          </p>
          <h2 className="ds-services__title" id="servicesTitle">
            Our Services
          </h2>
        </div>

        <ol className="ds-services__list">
          {serviceItems.map((service, index) => (
            <li className="ds-services__item reveal" key={service.title}>
              <h3 className="ds-services__name">
                {service.title}
                <sup className="ds-services__num">{String(index + 1).padStart(2, "0")}</sup>
              </h3>
              <p className="ds-services__desc">{service.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ServicesSection;
