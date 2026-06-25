function AboutSection() {
  return (
    <section
      className="section-block about surface-blue"
      id="about"
      data-section-label="Our Story"
      data-section-color="#FADA5E"
    >
      <div className="about__statement">
        <p>
          Through all of this, one thing has remained constant: we love making
          the impossible happen.
        </p>
      </div>
      <div className="about__lower">
        <div className="about__intro reveal">
          <p>
            It has been a decade of constantly defying norms and breeding ideas
            that challenge the status quo; a decade of partnering with
            changemakers and constantly pushing the envelope.
          </p>
          <a className="shape-button" href="#projects">
            Our Vision
          </a>
        </div>
        <a className="brand-feature reveal" href="#projects" aria-label="Brand Guidelines">
          <span>Brand Guidelines</span>
          <img src="/assets/images/image-video.webp" alt="" />
        </a>
      </div>
    </section>
  );
}

export default AboutSection;
