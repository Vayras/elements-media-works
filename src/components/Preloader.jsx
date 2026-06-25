import EmwWall from "./EmwWall.jsx";

function Preloader({ progress }) {
  return (
    <div className="preloader" id="preloader" aria-hidden="true">
      <EmwWall className="wall-blue" id="loaderWall" rows={10} />
      <div className="loader__percent">
        <div className="loader-shape">
          <span>{progress}%</span>
        </div>
      </div>
      <div className="loader__progress" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default Preloader;
