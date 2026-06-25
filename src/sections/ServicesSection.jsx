import { useEffect, useState } from "react";

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
    opensPanel: true,
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

const brandSolutionItems = [
  {
    title: "Digital",
    image: "/assets/images/tendencias.webp",
    items: ["Influencers & KOLs", "UGC & Content Seeding", "Meme Marketing", "Amplification & Speed ORM"],
  },
  {
    title: "Events",
    image: "/assets/images/openbank-222-alt.webp",
    items: ["Sponsorships", "Strategy and Execution", "Culture & Lifestyle Collabs"],
  },
  {
    title: "Music",
    image: "/assets/images/detail-07.webp",
    items: ["Live Concerts", "Sponsorships", "Original Composition"],
  },
  {
    title: "Sports",
    image: "/assets/images/openbank.webp",
    items: ["League Sponsorships", "Team Sponsorships", "Athlete Endorsements"],
  },
  {
    title: "Films",
    image: "/assets/images/image-video.webp",
    items: ["In-film branding", "Co-branded Tie-ups", "Licensing & Merch"],
  },
];

function BrandSolutionsDrawer({ isOpen, onClose }) {
  return (
    <div className={`brand-solutions-drawer${isOpen ? " is-open" : ""}`} aria-hidden={!isOpen}>
      <button className="brand-solutions-drawer__backdrop" type="button" aria-label="Close brand solutions" onClick={onClose} />
      <aside className="brand-solutions-drawer__panel" role="dialog" aria-modal="true" aria-label="Brand solutions across">
        <button className="brand-solutions-drawer__close" type="button" aria-label="Close brand solutions" onClick={onClose}>
          ×
        </button>

        <div className="brand-solutions__content">
          <div className="brand-solutions__head reveal">
            <h2>Brand solutions across:</h2>
          </div>

          <div className="brand-solutions__grid" aria-label="Brand solution categories">
            {brandSolutionItems.map((solution) => (
              <article className="brand-solution-card reveal" key={solution.title}>
                <img src={solution.image} alt="" loading="lazy" />
                <div className="brand-solution-card__copy">
                  <h3>{solution.title}</h3>
                  <ul>
                    {solution.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

function ServicesSection() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("side-panel-open", isSolutionsOpen);
    document.documentElement.classList.toggle("side-panel-open", isSolutionsOpen);

    return () => {
      document.body.classList.remove("side-panel-open");
      document.documentElement.classList.remove("side-panel-open");
    };
  }, [isSolutionsOpen]);

  useEffect(() => {
    if (!isSolutionsOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsSolutionsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isSolutionsOpen]);

  return (
    <section
      className="section-block services-overview surface-blue"
      id="services"
      data-section-label="Our Services"
      data-section-color="#FADA5E"
    >
      <div className="services-overview__inner">
        <div className="services-overview__head reveal">
          <span className="services-overview__note" aria-hidden="true"></span>
        </div>

        <div className="services-overview__title-row reveal">
          <h2 className="services-overview__title">Our Services</h2>
          <span className="services-overview__eyebrow">Span Across</span>
        </div>

        <div className="services-overview__grid" aria-label="Services categories">
          {serviceItems.map((service) => {
            const CardTag = service.opensPanel ? "button" : "article";

            return (
              <CardTag
                className={`services-overview__card reveal${service.opensPanel ? " services-overview__card--button" : ""}`}
                key={service.title}
                type={service.opensPanel ? "button" : undefined}
                onClick={service.opensPanel ? () => setIsSolutionsOpen(true) : undefined}
              >
                <span className="services-overview__number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </CardTag>
            );
          })}
        </div>
      </div>

      <BrandSolutionsDrawer isOpen={isSolutionsOpen} onClose={() => setIsSolutionsOpen(false)} />
    </section>
  );
}

export default ServicesSection;
