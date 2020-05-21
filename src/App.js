import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>#Todo's for the day</h3>
      <form>
        <input type="text" />
        <br />
        <Button variant="success">Submit</Button>
      </form>
    </div>
  );
}

export default App;
//need to install both "bootstrap" & "react-bootstrap"
