import caseStudies from "../data/caseStudies.js";

const pad = (index) => String(index + 1).padStart(2, "0");

function CaseStudyBlock({ slide, index }) {
  return (
    <div className="ds-grid ds-case__block">
      <div className="ds-case__block-head">
        <span className="ds-case__block-num">{pad(index)}</span>
        <h3>{slide.label}</h3>
      </div>

      <div className="ds-case__block-body">
        {slide.stats?.length > 0 && (
          <dl className="ds-case__stats">
            {slide.stats.map((stat) => (
              <div className="ds-case__stat" key={`${stat.label}-${stat.value}`}>
                <dt className="ds-caps">{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {slide.items?.length > 0 && (
          <ul className="ds-case__list">
            {slide.items.map((item) => (
              <li key={item}>
                <span aria-hidden="true">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function CaseStudyDetailPanel({ study, index }) {
  const total = caseStudies.length;
  const prev = caseStudies[(index - 1 + total) % total];
  const next = caseStudies[(index + 1) % total];
  const titleId = `${study.id}-title`;

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
            <p className="ds-label">
              <span>Case study</span>
              <span>
                {pad(index)} / {total}
              </span>
            </p>
            <span className="ds-case__client">{study.client}</span>
          </div>
          <h2 className="ds-case__title" id={titleId}>
            {study.title}
          </h2>
        </div>
      </header>

      <div className="ds-case__body">
        <div className="ds-wrap">
          {study.slides.map((slide, slideIndex) => (
            <CaseStudyBlock slide={slide} index={slideIndex} key={`${study.id}-${slide.label}`} />
          ))}
        </div>
      </div>

      <nav className="ds-case__pager" aria-label="More case studies">
        <div className="ds-wrap">
          <div className="ds-grid ds-case__pager-row">
            <a className="ds-case__prev" href={`#${prev.id}`}>
              <span className="ds-caps">← Previous · {pad((index - 1 + total) % total)}</span>
              <span className="ds-case__pager-title">{prev.title}</span>
            </a>
            <a className="ds-case__next" href={`#${next.id}`}>
              <span className="ds-caps">Next · {pad((index + 1) % total)} →</span>
              <span className="ds-case__pager-title">{next.title}</span>
            </a>
          </div>
          <div className="ds-case__index">
            <span className="ds-caps">All case studies</span>
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
