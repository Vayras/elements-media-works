function CopyIcon() {
  return (
    <svg className="copy-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M14.8 9.2a4 4 0 1 0 0 5.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CaseStudyTitle({ title }) {
  const parts = String(title).split("©");
  if (parts.length === 1) return title;

  return parts.flatMap((part, i) => (i === 0 ? [part] : [<CopyIcon key={i} />, part]));
}

export default CaseStudyTitle;
