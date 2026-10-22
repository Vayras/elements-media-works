const heroLines = ["We’re an integrated", "marketing and brand", "experience agency."];

function HeroSection({ startTyping }) {
  return (
    <section className={`ds-hero${startTyping ? " is-ready" : ""}`} id="top" aria-labelledby="heroTitle">
      <div className="ds-wrap ds-grid ds-hero__inner">
        <h1 className="ds-hero__title" id="heroTitle">
          {heroLines.map((line, index) => (
            <span className="ds-hero__line" key={line}>
              <span style={{ animationDelay: `${index * 90}ms` }}>{line}</span>
            </span>
          ))}
        </h1>
        <div className="ds-hero__actions">
          <a className="ds-btn ds-btn--yellow" href="#contact">
            Start a project<span className="ds-btn__arrow" aria-hidden="true">→</span>
          </a>
          <a className="ds-btn ds-btn--outline" href="#projects">
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
