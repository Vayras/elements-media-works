const caseStudySlides = [
  {
    label: "The Task",
    image: "/assets/images/1-case-study/1-case-study-task.svg",
  },
  {
    label: "The Solution",
    image: "/assets/images/1-case-study/1-case-study-solution.svg",
  },
  {
    label: "The Results",
    image: "/assets/images/1-case-study/1-case-study-result.svg",
  },
];

function CaseStudyDetailSection() {
  return (
    <aside className="case-study-detail" id="keep-girls-case-study" aria-label="Keep Girls In School case study">
      <a className="case-study-detail__scrim" href="#case-studies" aria-label="Close case study"></a>

      <div className="case-study-detail__panel">
        <div className="case-study-detail__head">
          <a className="case-study-detail__back" href="#case-studies">
            ← Case Studies
          </a>
          <h2>Keep Girls In School 5th Edition</h2>
        </div>

        <div className="case-study-detail__slides" aria-label="Keep Girls In School case study slides">
          {caseStudySlides.map((slide) => (
            <article className="case-study-detail__slide" key={slide.label}>
              <img src={slide.image} alt={slide.label} loading="lazy" />
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default CaseStudyDetailSection;
