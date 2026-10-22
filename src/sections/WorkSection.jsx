import { asset } from "../asset";
import reels from "../data/reels.json";

const INSTAGRAM_URL = "https://www.instagram.com/elementsmediaworks/";

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

function ReelTile({ href, image, title, meta, index }) {
  return (
    <li className="ds-reel reveal">
      <a className="ds-reel__link" href={href} target="_blank" rel="noreferrer">
        <span className="ds-reel__media">
          <img src={image} alt="" loading="lazy" />
          <span className="ds-reel__watch">Watch reel ↗</span>
        </span>
        <span className="ds-reel__meta">
          <span className="ds-caps">
            {String(index + 1).padStart(2, "0")} · {meta}
          </span>
          <span className="ds-reel__title">{title}</span>
        </span>
      </a>
    </li>
  );
}

function WorkSection() {
  return (
    <section className="ds-work" id="projects" aria-labelledby="workTitle">
      <div className="ds-wrap">
        <div className="ds-grid ds-work__head">
          <div className="ds-work__intro">
            <p className="ds-label ds-work__label">
              <span>05</span>
              <span>Selected reels</span>
            </p>
            <h2 className="ds-h2" id="workTitle">
              Work
            </h2>
          </div>
          <a className="ds-link ds-work__handle" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            @elementsmediaworks ↗
          </a>
        </div>

        <ol className="ds-work__rail">
          {workItems.map((item, index) => (
            <ReelTile
              key={item.href}
              href={item.href}
              image={item.image}
              title={item.title}
              meta={item.category}
              index={index}
            />
          ))}
          <li className="ds-reel ds-reel--cta reveal">
            <a className="ds-reel__link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <span className="ds-reel__media ds-reel__media--cta">
                <span className="ds-caps">More on Instagram</span>
                <span className="ds-reel__cta-title">All reels ↗</span>
              </span>
              <span className="ds-reel__meta">
                <span className="ds-caps">@elementsmediaworks</span>
                <span className="ds-reel__title">Follow along</span>
              </span>
            </a>
          </li>
        </ol>

        {reels.length > 0 && (
          <>
            <div className="ds-work__subhead">
              <h3>Latest on Instagram</h3>
            </div>
            <ol className="ds-work__rail">
              {reels.map((reel, index) => (
                <ReelTile
                  key={reel.id}
                  href={reel.permalink}
                  image={reel.thumbnail}
                  title={reel.caption ? reel.caption.split("\n")[0].slice(0, 60) : "Instagram reel"}
                  meta="Reel"
                  index={index}
                />
              ))}
            </ol>
          </>
        )}
      </div>
    </section>
  );
}

export default WorkSection;
