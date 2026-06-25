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

function BrandSolutionsSection() {
  return (
    <section
      className="section-block brand-solutions"
      id="brand-solutions"
      data-section-label="Brand Solutions"
      data-section-color="#003366"
    >
      <aside className="brand-solutions__side reveal" aria-label="Brand solutions intro">
        <span>Brand</span>
        <strong>Solutions</strong>
        <small>Across</small>
      </aside>

      <div className="brand-solutions__content">
        <div className="brand-solutions__head reveal">
          <p>What we build for brands</p>
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
    </section>
  );
}

export default BrandSolutionsSection;
