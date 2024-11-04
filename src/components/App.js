import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import HogFilter from "./HogFilter";
import HogSort from "./HogSort";
import HogForm from "./HogForm";

function App() {
  const [hogList, setHogList] = useState(hogs);
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [hiddenHogs, setHiddenHogs] = useState([]);  // New state to track hidden hogs

  const handleToggleGreased = () => {
    setShowGreased((prevShowGreased) => !prevShowGreased);
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  const handleAddHog = (newHog) => {
    setHogList([...hogList, newHog]);
  };

  const handleHideHog = (name) => {
    setHiddenHogs([...hiddenHogs, name]);
  };

  const displayedHogs = hogList
    .filter((hog) => (showGreased ? hog.greased : true))
    .filter((hog) => !hiddenHogs.includes(hog.name)) // Exclude hidden hogs
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "weight") return a.weight - b.weight;
      return 0;
    });

  return (
    <div className="App">
      <Nav />
      <HogFilter onToggleGreased={handleToggleGreased} showGreased={showGreased} />
      <HogSort onSort={handleSort} />
      <HogList hogs={displayedHogs} onHideHog={handleHideHog} />  {/* Pass handleHideHog */}
      <HogForm onAddHog={handleAddHog} />
    </div>
  );
}

export default App;
