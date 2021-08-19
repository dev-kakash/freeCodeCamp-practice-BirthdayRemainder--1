import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const handleButton = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h5 style={{ marginBottom: "15px" }}>
          {people.length} Birthdays Today
        </h5>
        <List people={people} />
        <button onClick={() => handleButton()}>Clear</button>
      </section>
    </main>
  );
}

export default App;
