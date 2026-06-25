import { useEffect, useState } from "react";

const heroCopy = "We’re an integrated marketing and brand experience agency.";

function HeroSection({ startTyping }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!startTyping) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayText(heroCopy);
      return undefined;
    }

    let index = 0;
    const typingTimer = window.setInterval(() => {
      index += 1;
      setDisplayText(heroCopy.slice(0, index));

      if (index >= heroCopy.length) {
        window.clearInterval(typingTimer);
      }
    }, 45);

    return () => window.clearInterval(typingTimer);
  }, [startTyping]);

  return (
    <section
      className="section-block hero surface-red"
      id="top"
      data-section-label="Home"
      data-section-color="#FADA5E"
    >
      <h1 className="hero-typewriter reveal" aria-label={heroCopy}>
        <span aria-hidden="true">{displayText}</span>
        <span className="typewriter-cursor" aria-hidden="true">|</span>
      </h1>
      <a className="scroll-indicator" href="#services" aria-label="Scroll to see more">
        <span>Scroll to see more</span>
        <span className="scroll-indicator__shape" aria-hidden="true"></span>
      </a>
    </section>
  );
}

export default HeroSection;
