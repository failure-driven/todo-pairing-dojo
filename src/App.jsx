import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.scss";
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

  const removeItem = id => {
    setItems(items.filter(element => element.id !== id));
  };

  return (
    <div className='todo'>
      <h1>Todo - pairing dojo</h1>
      <Form addItem={addItem} />
      <List items={items} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
