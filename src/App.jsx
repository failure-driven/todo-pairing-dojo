import React from "react";
import "./App.css";
import Form from "./Form";
import List from "./List";

function App() {
  const addItem = () => {};

  return (
    <div>
      <h1>Todo - pairing dojo</h1>
      <Form addItem={addItem} />
      <List />
    </div>
  );
}

export default App;
