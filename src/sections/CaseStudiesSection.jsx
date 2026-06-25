const caseStudies = [
  "Keep Girls In School 5th Edition",
  "ARQ by The Leela",
  "#PlayLikeMumbai for Mumbai Indians",
  "Heineken @ Coachella & UEFA",
  "Vivienne Westwood",
  "Brand Building: TIRA",
  "Long Term Partnership: AJIO",
  "Journey With Johnnie Walker",
  "Jio World Plaza & NMACC Launch",
  "The Launch of Vantara",
];

function CaseStudiesSection() {
  return (
    <section
      className="section-block case-studies"
      id="case-studies"
      data-section-label="Case Studies"
      data-section-color="#FADA5E"
    >
      <div className="case-studies__inner">
        <div className="case-studies__side reveal" aria-hidden="true">
          Case Studies
        </div>

        <div className="case-studies__content">
          <div className="case-studies__grid" aria-label="Case studies">
            {caseStudies.map((title, index) => {
              const isAvailable = index === 0;
              const CardTag = isAvailable ? "a" : "article";

              return (
                <CardTag
                  className={`case-study-card reveal${isAvailable ? " case-study-card--link" : ""}`}
                  href={isAvailable ? "#keep-girls-case-study" : undefined}
                  key={title}
                >
                  <div className="case-study-card__mark" aria-hidden="true">
                    <span>{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                </CardTag>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
