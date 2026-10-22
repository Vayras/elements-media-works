import caseStudies from "../data/caseStudies.js";
import CaseStudyTitle from "../components/CaseStudyTitle.jsx";

function CaseStudySlide({ slide }) {
  return (
    <article className={`case-study-detail__slide${slide.image ? "" : " case-study-detail__slide--text"}`}>
      {slide.image ? (
        <img src={slide.image} alt={slide.label} loading="lazy" />
      ) : (
        <div className="case-study-detail__slide-content">
          <h3 className="case-study-detail__slide-label">{slide.label}</h3>

          {slide.stats?.length > 0 && (
            <dl className="case-study-detail__stats">
              {slide.stats.map((stat) => (
                <div className="case-study-detail__stat" key={`${stat.label}-${stat.value}`}>
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          )}

          {slide.items?.length > 0 && (
            <ul className="case-study-detail__list">
              {slide.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </article>
  );
}

function CaseStudyDetailPanel({ study }) {
  return (
    <aside className="case-study-detail" id={study.id} aria-label={`${study.title} case study`}>
      <a className="case-study-detail__scrim" href="#case-studies" aria-label="Close case study"></a>

      <div className="case-study-detail__panel">
        <div className="case-study-detail__head">
          <a className="case-study-detail__back" href="#case-studies">
            ← Case Studies
          </a>
          <h2>
            <CaseStudyTitle title={study.title} />
          </h2>
        </div>

        <div className="case-study-detail__slides" aria-label={`${study.title} case study slides`}>
          {study.slides.map((slide) => (
            <CaseStudySlide slide={slide} key={`${study.id}-${slide.label}`} />
          ))}
        </div>
      </div>
    </aside>
  );
}

function CaseStudyDetailSection() {
  return (
    <>
      {caseStudies.map((study) => (
        <CaseStudyDetailPanel study={study} key={study.id} />
      ))}
    </>
  );
}

export default CaseStudyDetailSection;
