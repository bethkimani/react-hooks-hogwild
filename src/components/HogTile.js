import React, { useState } from "react";

function HogTile({ hog, onHideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => setShowDetails((prev) => !prev);

  return (
    <div className="hog-tile" onClick={handleToggleDetails}>
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} style={{ width: "150px", height: "150px" }} />
      {showDetails && (
        <div className="hog-details">
          <p><strong>Specialty:</strong> {hog.specialty}</p>
          <p><strong>Weight:</strong> {hog.weight} kg</p>
          <p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
          <p><strong>Highest Medal:</strong> {hog["highest medal achieved"]}</p>
        </div>
      )}
      <button onClick={(e) => { e.stopPropagation(); onHideHog(hog.name); }}>
        Hide
      </button>
    </div>
  );
}

export default HogTile;
