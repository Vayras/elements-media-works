import caseStudies from "../data/caseStudies.js";
import CaseStudyTitle from "../components/CaseStudyTitle.jsx";

function CaseStudiesSection() {
  return (
    <section
      className="section-block case-studies"
      id="case-studies"
      data-section-label="Case Studies"
      data-section-color="#003366"
      data-section-surface="light"
    >
      <div className="case-studies__inner">
        <div className="case-studies__side reveal" aria-hidden="true">
          Case Studies
        </div>

        <div className="case-studies__content">
          <div className="case-studies__grid" aria-label="Case studies">
            {caseStudies.map((study, index) => (
              <a
                className="case-study-card reveal case-study-card--link"
                href={`#${study.id}`}
                key={study.id}
              >
                <div className="case-study-card__mark" aria-hidden="true">
                  <span>{index + 1}</span>
                </div>
                <h3>
                  <CaseStudyTitle title={study.title} />
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
