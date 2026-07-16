const workItems = [
  {
    image: "/assets/images/socias.webp",
    title: "Valentino",
    category: "Valentino",
  },
  {
    image: "/assets/images/jierzum.webp",
    title: "The Kollective",
    category: "Events",
  },
  {
    image: "/assets/images/openbank-222.webp",
    title: "Mahou Xmas Fest",
    category: "Mahou",
  },
];

function WorkSection() {
  return (
    <section
      className="section-block work surface-blue"
      id="projects"
      data-section-label="Work"
      data-section-color="#AD2754"
    >
      <div className="work__inner">
        <div className="work__head">

        </div>
        <div className="work__title-row">
          <h2 className="work__title">Work</h2>
          <a className="work__seeall" href="#contact">
            : View all
          </a>
        </div>

        <div className="work-grid">
          {workItems.map((item) => (
            <article className="work-card reveal" key={item.title}>
              <div className="work-card__media">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
