const serviceItems = [
  { title: "Content Marketing", tag: "IPs & stories that convert", tone: "yellow" },
  { title: "Brand Solutions", tag: "Campaigns that drive action", tone: "raspberry" },
  { title: "Marketing Innovations", tag: "New tech, fresh experiences", tone: "blush" },
  { title: "Talent & Influencers", tag: "Voices across cultures", tone: "sky" },
  { title: "Licensing & Merchandising", tag: "Collabs people keep", tone: "white" },
];

function ServicesSection() {
  return (
    <section className="ds-services" id="services" aria-labelledby="servicesTitle">
      <div className="ds-wrap ds-services__inner">
        <h2 className="ds-label ds-services__label" id="servicesTitle">
          <span>01</span>
          <span>Services</span>
        </h2>

        <ul className="ds-services__bento">
          {serviceItems.map((service, index) => (
            <li className={`ds-services__tile ds-services__tile--${service.tone} reveal`} key={service.title}>
              <div className="ds-services__tile-top">
                <h3 className="ds-services__name">{service.title}</h3>
                <span className="ds-services__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="ds-services__tag">{service.tag}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ServicesSection;
