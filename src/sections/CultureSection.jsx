import { useRef } from "react";

const cultureCopy =
  "We craft bold narratives, design high-impact campaigns, and build seamless brand ecosystems across platforms and mediums, where creativity meets data-backed insights, and brands grow to be a part of the contemporary culture.";

const cultureWords = cultureCopy.split(" ");

function CultureSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const lensRef = useRef(null);

  const moveLens = (event) => {
    if (event.pointerType === "touch") return;

    const section = sectionRef.current.getBoundingClientRect();
    const text = textRef.current.getBoundingClientRect();
    const lens = lensRef.current;
    const x = event.clientX - section.left;
    const y = event.clientY - section.top;
    const radius = lens.offsetWidth / 2;

    lens.style.setProperty("--lens-x", `${x}px`);
    lens.style.setProperty("--lens-y", `${y}px`);
    lens.style.setProperty("--copy-left", `${text.left - section.left - x + radius}px`);
    lens.style.setProperty("--copy-top", `${text.top - section.top - y + radius}px`);
    lens.style.setProperty("--copy-width", `${text.width}px`);
    lens.style.setProperty("--origin-x", `${event.clientX - text.left}px`);
    lens.style.setProperty("--origin-y", `${event.clientY - text.top}px`);
  };

  return (
    <section
      className="section-block culture"
      id="culture"
      data-section-label="Culture"
      data-section-color="#003366"
      ref={sectionRef}
      onPointerEnter={(event) => {
        if (event.pointerType === "touch") return;
        lensRef.current.classList.add("is-visible");
        moveLens(event);
      }}
      onPointerMove={moveLens}
      onPointerLeave={() => lensRef.current.classList.remove("is-visible")}
    >
      <p
        className="culture__text"
        ref={textRef}
        style={{ "--culture-word-count": cultureWords.length }}
      >
        {cultureWords.map((word, index) => (
          <span className="culture__word" style={{ "--word-index": index }} key={`${word}-${index}`}>
            {word}
          </span>
        ))}
      </p>
      <div className="culture__lens" ref={lensRef} aria-hidden="true">
        <p className="culture__text culture__lens-copy">
          {cultureWords.map((word, index) => (
            <span className="culture__word" key={`${word}-lens-${index}`}>
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

export default CultureSection;
