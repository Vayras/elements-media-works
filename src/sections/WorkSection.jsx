import { asset } from "../asset";
import reels from "../data/reels.json";

const workItems = [
  {
    image: asset("assets/images/work/reel-dkjq5kboc-f.jpg"),
    title: "Eze Perfumes",
    category: "Campaign",
    href: "https://www.instagram.com/elementsmediaworks/reel/DKjq5kBoC-F/",
  },
  {
    image: asset("assets/images/work/post-dkhnd11ol6c.jpg"),
    title: "Johnnie Walker",
    category: "Keep Walking",
    href: "https://www.instagram.com/elementsmediaworks/p/DKHNd11ol6C/",
  },
  {
    image: asset("assets/images/work/post-dj4es-tinoh.jpg"),
    title: "Vivienne Westwood",
    category: "Fashion Week",
    href: "https://www.instagram.com/elementsmediaworks/p/DJ4es_tINoH/",
  },
  {
    image: asset("assets/images/work/why-work-with-us.jpg"),
    title: "Why Work With Us?",
    category: "Instagram",
    href: "https://www.instagram.com/elementsmediaworks/p/DNSUih-Ig3Q/",
  },
  {
    image: asset("assets/images/work/post-dwx83shihnc.jpg"),
    title: "The Face Shop",
    category: "Brand Elchemy",
    href: "https://www.instagram.com/elementsmediaworks/p/DWX83shiHNC/",
  },
  {
    image: asset("assets/images/work/post-dwtng4bikxl.jpg"),
    title: "Spykar",
    category: "Brand Elchemy",
    href: "https://www.instagram.com/elementsmediaworks/p/DWTnG4biKXl/",
  },
  {
    image: asset("assets/images/work/post-duyj5cgchs3.jpg"),
    title: "Black Dog",
    category: "Brand Elchemy",
    href: "https://www.instagram.com/elementsmediaworks/p/DUYJ5CgCHs3/",
  },
  {
    image: asset("assets/images/work/post-dtfqrg2indy.jpg"),
    title: "Black Dog Soda",
    category: "Campaign",
    href: "https://www.instagram.com/elementsmediaworks/p/DTfQrG2iNdY/",
  },
  {
    image: asset("assets/images/work/reel-do5xiisinwe.jpg"),
    title: "L'Oreal Paris x Tira",
    category: "Campaign",
    href: "https://www.instagram.com/elementsmediaworks/reel/DO5XiISiNWe/",
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
      <div className="work__snap" data-snap-anchor="mid" aria-hidden="true" />
      <div className="work__inner">
        <div className="work__title-row">
          <h2 className="work__title">Work</h2>
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
          {workItems.map((item) => (
            <a
              className="work-card reveal"
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-card__media">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </a>
          ))}
        </div>

        {reels.length > 0 && (
          <>
            <div className="work__title-row work__title-row--ig">
              <h3 className="work__subtitle">On Instagram</h3>
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
