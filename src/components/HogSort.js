import React from "react";

function HogSort({ onSort }) {
  return (
    <div>
      <button onClick={() => onSort("name")}>Sort by Name</button>
      <button onClick={() => onSort("weight")}>Sort by Weight</button>
    </div>
  );
}

export default HogSort;
