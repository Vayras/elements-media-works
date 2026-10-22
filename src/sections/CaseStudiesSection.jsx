import { useRef, useState } from "react";
import caseStudies from "../data/caseStudies.js";

const pad = (index) => String(index + 1).padStart(2, "0");

function CaseStudiesSection() {
  const [selected, setSelected] = useState(0);
  const featureRef = useRef(null);
  const study = caseStudies[selected];

  const pick = (index) => {
    setSelected(index);
    const feature = featureRef.current;
    if (feature && feature.getBoundingClientRect().top < 0) {
      feature.scrollIntoView({ block: "start" });
    }
  };

  return (
    <section className="ds-cases" id="case-studies" aria-labelledby="casesTitle">
      <div className="ds-wrap">
        <div className="ds-grid ds-cases__head">
          <div className="ds-cases__intro">
            <p className="ds-label ds-cases__label">
              <span>06</span>
              <span>Deep dives</span>
            </p>
            <h2 className="ds-h2" id="casesTitle">
              Case Studies
            </h2>
          </div>
          <p className="ds-lede ds-cases__lede">
            Ten stories from launches, long-term partnerships and cultural moments.
          </p>
        </div>

        <div className="ds-grid ds-cases__body">
          <article className="ds-cases__feature" ref={featureRef} aria-live="polite">
            <div className="ds-cases__feature-top">
              <span className="ds-cases__num" aria-hidden="true">
                {pad(selected)}
              </span>
              <span className="ds-caps ds-cases__client">{study.client}</span>
            </div>
            <h3 className="ds-cases__title">{study.title}</h3>
            <p className="ds-cases__summary">{study.summary}</p>
            <div className="ds-cases__result">
              <div className="ds-cases__stat">
                <span className="ds-caps">Headline result</span>
                <strong>{study.stat}</strong>
                <span>{study.statLabel}</span>
              </div>
              <a className="ds-btn ds-btn--navy" href={`#${study.id}`}>
                Read the case study
                <span className="ds-btn__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </article>

          <ol className="ds-cases__list" aria-label="All case studies">
            {caseStudies.map((item, index) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="ds-cases__item"
                  aria-current={index === selected ? "true" : undefined}
                  onClick={() => pick(index)}
                >
                  <span className="ds-cases__item-num">{pad(index)}</span>
                  <span className="ds-cases__item-title">{item.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
