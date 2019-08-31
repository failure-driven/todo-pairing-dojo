import React from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const addItem = () => {};

  return (
    <div>
      <h1>Todo - pairing dojo</h1>
      <Form addItem={addItem} />
    </div>
  );
}

export default App;
