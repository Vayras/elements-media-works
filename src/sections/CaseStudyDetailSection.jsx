import caseStudies from "../data/caseStudies.js";

const EMAIL = "collabs@elementsmediaworks.com";
const TONES = ["blush", "sky", "yellow", "white"];

const pad = (index) => String(index + 1).padStart(2, "0");

/* The headline result shown under the title: the first figure of the last
   chapter that has figures. Studies without figures simply skip it. */
function leadStat(study) {
  const withStats = study.slides.filter((slide) => slide.stats?.length);
  return withStats.length ? withStats[withStats.length - 1].stats[0] : null;
}

/* Chapter links scroll inside the open panel. They are buttons, not hash links,
   because changing the hash would close the case study (it opens on :target). */
function jumpTo(id) {
  const chapter = document.getElementById(id);
  if (!chapter) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  chapter.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

function CaseStudyChapter({ study, slide, index }) {
  const [first, ...rest] = slide.items ?? [];
  const id = `${study.id}-ch-${pad(index)}`;

  return (
    <section className="ds-grid ds-case__chapter" id={id} aria-labelledby={`${id}-title`}>
      <div className="ds-case__chapter-head">
        <span className="ds-case__chapter-num">{pad(index)}</span>
        <h3 id={`${id}-title`}>{slide.label}</h3>
      </div>

      <div className="ds-case__chapter-body">
        {first && <p className="ds-case__opening">{first}</p>}

        {slide.stats?.length > 0 && (
          <dl className="ds-case__stats">
            {slide.stats.map((stat, statIndex) => (
              <div className={`ds-case__stat ds-case__stat--${TONES[statIndex % TONES.length]}`} key={`${stat.label}-${stat.value}`}>
                <dd>{stat.value}</dd>
                <dt>{stat.label}</dt>
              </div>
            ))}
          </dl>
        )}

        {rest.length > 0 && (
          <ul className="ds-case__list">
            {rest.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function CaseStudyDetailPanel({ study, index }) {
  const total = caseStudies.length;
  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;
  const prev = caseStudies[prevIndex];
  const next = caseStudies[nextIndex];
  const titleId = `${study.id}-title`;
  const lead = leadStat(study);

  return (
    <article className="ds-case" id={study.id} aria-labelledby={titleId} tabIndex={-1}>
      <div className="ds-case__bar">
        <div className="ds-wrap ds-case__bar-inner">
          <a className="ds-link ds-case__back" href="#case-studies">
            ← All case studies
          </a>
          <a className="ds-case__close" href="#case-studies" aria-label="Close case study">
            <span className="ds-case__close-text">Close</span>
            <span aria-hidden="true">✕</span>
          </a>
        </div>
      </div>

      <header className="ds-case__hero">
        <div className="ds-wrap ds-grid">
          <div className="ds-case__meta">
            <span className="ds-case__count">
              Case study {pad(index)} of {total}
            </span>
            <span className="ds-case__client">{study.client}</span>
            <span className="ds-case__chapters-count">{study.slides.length} chapters</span>
          </div>

          <div className="ds-case__heading">
            <h2 className="ds-case__title" id={titleId}>
              {study.title}
            </h2>
            {lead && (
              <p className="ds-case__lead">
                <strong>{lead.value}</strong>
                <span>{lead.label}</span>
              </p>
            )}
          </div>

          <nav className="ds-case__toc" aria-label="Chapters">
            {study.slides.map((slide, slideIndex) => (
              <button type="button" onClick={() => jumpTo(`${study.id}-ch-${pad(slideIndex)}`)} key={slide.label}>
                <span>{pad(slideIndex)}</span>
                {slide.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <div className="ds-case__body">
        <div className="ds-wrap ds-case__chapters">
          {study.slides.map((slide, slideIndex) => (
            <CaseStudyChapter study={study} slide={slide} index={slideIndex} key={`${study.id}-${slide.label}`} />
          ))}
        </div>

        <nav className="ds-wrap ds-case__more" aria-label="More case studies">
          <a className="ds-grid ds-case__next" href={`#${next.id}`}>
            <span className="ds-case__next-meta">
              <span className="ds-case__next-kicker">Up next · {pad(nextIndex)}</span>
              <span>{next.client}</span>
            </span>
            <span className="ds-case__next-main">
              <span className="ds-case__next-title">{next.title}</span>
              <span className="ds-case__next-cta">
                Read the case study <span aria-hidden="true">→</span>
              </span>
            </span>
          </a>

          <div className="ds-case__more-row">
            <a className="ds-case__prev" href={`#${prev.id}`}>
              <span aria-hidden="true">←</span>
              <span>Previous · {prev.title}</span>
            </a>
            <div className="ds-case__index">
              <span className="ds-case__index-label">All studies</span>
              {caseStudies.map((item, itemIndex) => (
                <a
                  className="ds-case__index-link"
                  href={`#${item.id}`}
                  aria-label={item.title}
                  aria-current={item.id === study.id ? "page" : undefined}
                  key={item.id}
                >
                  {pad(itemIndex)}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      <footer className="ds-case__cta">
        <div className="ds-wrap ds-grid">
          <p className="ds-case__cta-title">Let’s build your next brand moment.</p>
          <a className="ds-link ds-case__cta-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </footer>
    </article>
  );
}

function CaseStudyDetailSection() {
  return (
    <>
      {caseStudies.map((study, index) => (
        <CaseStudyDetailPanel study={study} index={index} key={study.id} />
      ))}
    </>
  );
}

export default CaseStudyDetailSection;
