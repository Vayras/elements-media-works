function SectionMarker({ label }) {
  return (
    <div className="section-marker" aria-hidden="true">
      <span id="sectionLabel">{label}</span>
      <span className="marker-shape"></span>
    </div>
  );
}

export default SectionMarker;
