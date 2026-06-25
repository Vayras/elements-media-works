function HeroSection() {
  return (
    <section
      className="section-block hero surface-red"
      id="top"
      data-section-label="Brand Guidelines"
      data-section-color="#FADA5E"
    >
      <a className="skip-intro" href="#about">
        Introduction.
      </a>
      <div className="hero-media reveal">
        <img src="/assets/images/imagen.webp" alt="Brand Guidelines" />
      </div>
    </section>
  );
}

export default HeroSection;
