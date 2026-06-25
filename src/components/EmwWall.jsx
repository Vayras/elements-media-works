const WALL_TEXT = "EMWEMWEMWEMWEMWEMWEMWEMWEMWEMWEMWEMWEMWEMWEMWEMWEMW";

function EmwWall({ className = "", rows = 10, id }) {
  return (
    <div className={`emw-wall ${className}`.trim()} id={id}>
      {Array.from({ length: rows }, (_, index) => (
        <span key={index}>{WALL_TEXT}</span>
      ))}
    </div>
  );
}

export default EmwWall;
