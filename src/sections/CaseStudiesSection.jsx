import { useRef, useState } from "react";
import caseStudies from "../data/caseStudies.js";

const pad = (index) => String(index + 1).padStart(2, "0");

function CaseStudiesSection() {
  const [selected, setSelected] = useState(0);
  const featureRef = useRef(null);

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
          {/* Every study is rendered in the same grid cell, so the panel is always as
              tall as the longest one and switching never changes the height. */}
          <div className="ds-cases__stage" ref={featureRef} aria-live="polite">
            {caseStudies.map((item, index) => {
              const isActive = index === selected;
              return (
                <article
                  className={`ds-cases__feature${isActive ? " is-active" : ""}`}
                  aria-hidden={!isActive}
                  key={item.id}
                >
                  <div className="ds-cases__feature-top">
                    <span className="ds-cases__num" aria-hidden="true">
                      {pad(index)}
                    </span>
                    <span className="ds-caps ds-cases__client">{item.client}</span>
                  </div>
                  <h3 className="ds-cases__title">{item.title}</h3>
                  <p className="ds-cases__summary">{item.summary}</p>
                  <div className="ds-cases__result">
                    <div className="ds-cases__stat">
                      <span className="ds-caps">Headline result</span>
                      <strong>{item.stat}</strong>
                      <span>{item.statLabel}</span>
                    </div>
                    <a className="ds-btn ds-btn--navy" href={`#${item.id}`} tabIndex={isActive ? undefined : -1}>
                      Read the case study
                      <span className="ds-btn__arrow" aria-hidden="true">
                        →
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

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
