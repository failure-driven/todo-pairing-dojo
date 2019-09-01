import React, { useState } from "react";
import uuid from "uuid/v4";
import "./App.css";
import Form from "./Form";
import List from "./List";

function App() {
  const [items, setItems] = useState([]);

  const addItem = text => {
    const item = {
      id: uuid(),
      ordinal: items.length + 1,
      isComplete: false,
      text: text,
    };
    setItems([...items, item]);
  };

  return (
    <div>
      <h1>Todo - pairing dojo</h1>
      <Form addItem={addItem} />
      <List items={items} />
    </div>
  );
}

export default App;
