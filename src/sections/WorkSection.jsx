import { asset } from "../asset";
import reels from "../data/reels.json";

const workItems = [
  {
    image: asset("assets/images/work/hamleys.webp"),
    title: "Hamleys Holiday",
    category: "Campaign",
  },
  {
    image: asset("assets/images/work/stevemaiden.webp"),
    title: "Steve Madden",
    category: "Campaign",
  },
  {
    image: asset("assets/images/work/superdry.webp"),
    title: "Superdry Sport",
    category: "Campaign",
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
        <div className="work__title-row">
          <h2 className="work__title">Work</h2>
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

        {reels.length > 0 && (
          <>
            <div className="work__title-row work__title-row--ig">
              <h3 className="work__subtitle">On Instagram</h3>
              <a
                className="work__seeall"
                href="https://www.instagram.com/elementsmediaworks/"
                target="_blank"
                rel="noreferrer"
              >
                @elementsmediaworks
              </a>
            </div>

            <div className="work-grid">
              {reels.map((reel) => (
                <a
                  className="work-card reveal"
                  key={reel.id}
                  href={reel.permalink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="work-card__media">
                    <img src={reel.thumbnail} alt={reel.caption || "Instagram reel"} />
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default WorkSection;
