import React, { useState } from "react";
import uuid from "uuid/v4";
import "./App.scss";
import Form from "./Form";
import List from "./List";

function App() {
  const [items, setItems] = useState([]);

  const createItem = (text, index) => {
    return {
      id: uuid(),
      ordinal: index || items.length + 1,
      isComplete: false,
      text: text,
    };
  };
  const addItem = text => {
    if (text === "c" || text === "f") {
      setItems(
        [
          "1 - Ergonomics",
          "2 - Distractions",
          "3 - Work",
          "4 - Regular breaks",
          "5 - Mini retros",
        ].map((text, index) => createItem(text, index + 1))
      );
    } else {
      setItems([...items, createItem(text)]);
    }
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
      <List
        items={items}
        toggleComplete={toggleComplete}
        removeItem={removeItem}
      />
    </div>
  );
}

export default App;
