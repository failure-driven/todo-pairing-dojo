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

  const toggleIsComplete = item =>
    Object.assign(item, { isComplete: !item.isComplete });

  const toggleComplete = id => {
    setItems(
      items.map(item => (item.id === id ? toggleIsComplete(item) : item))
    );
  };

  return (
    <div>
      <h1>Todo - pairing dojo</h1>
      <Form addItem={addItem} />
      <List items={items} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
