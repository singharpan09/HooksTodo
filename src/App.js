import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>#Todo's for the day</h3>
      <form onSubmit>
        <input type="text" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
