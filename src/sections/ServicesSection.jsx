const serviceItems = [
  {
    number: "01",
    title: "Content Marketing",
    description: "With bespoke IPs and AFPs: stories that connect and convert.",
  },
  {
    number: "02",
    title: "Brand Solutions",
    description: "Designing & executing campaigns that shape perception & drive action.",
  },
  {
    number: "03",
    title: "Marketing Innovations",
    description: "Leveraging new tools & technology to deliver fresh brand experiences.",
  },
  {
    number: "04",
    title: "Talent & Influencers",
    description: "Authentic voices amplified across various cultural tiers.",
  },
  {
    number: "05",
    title: "Licensing & Merchandising",
    description: "Tangible extensions and licensed collaborations that deepen brand love.",
  },
];

function ServicesSection() {
  return (
    <section
      className="section-block services-overview surface-blue"
      id="services"
      data-section-label="Our Services"
      data-section-color="#FADA5E"
    >
      <div className="services-overview__inner">
        <div className="services-overview__head reveal">

        </div>

        <div className="services-overview__title-row reveal">
          <h2 className="services-overview__title">Our Services</h2>

        </div>

        <div className="services-overview__grid" aria-label="Services categories">
          {serviceItems.map((service) => (
            <article className="services-overview__card reveal" key={service.title}>
              <span className="services-overview__number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
