
import React from "react";

function HogFilter({ onToggleGreased, showGreased }) {
  return (
    <button onClick={onToggleGreased}>
      {showGreased ? "Show All Hogs" : "Show Greased Hogs Only"}
    </button>
  );
}

export default HogFilter;
