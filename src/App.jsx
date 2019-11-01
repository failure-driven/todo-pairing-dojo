import React, { useState } from "react";
import uuid from "uuid/v4";
import "./App.scss";
import Form from "./Form";
import List from "./List";
import Slideshow from "./Slideshow";

const Final = () => <div className='final'></div>;

const whiteboardData = [
  { image_source: "/slides/slide.001.jpeg" },
  { image_source: "/slides/slide.002.jpeg" },
  { image_source: "/slides/slide.003.jpeg" },
  { image_source: "/slides/slide.004.jpeg" },
  { image_source: "/slides/slide.005.jpeg" },
  { image_source: "/slides/slide.006.jpeg" },
  { image_source: "/slides/slide.007.jpeg" },
  { image_source: "/slides/slide.008.jpeg" },
  { image_source: "/slides/slide.009.jpeg" },
];

const backgroundData = [
  {
    image_source:
      "/slides/background/01_austin-distel-wawEfYdpkag-unsplash.jpg",
    credit: "Photo by Austin Distel on Unsplash",
    credit_url: "https://unsplash.com/photos/wawEfYdpkag",
  },
  {
    image_source:
      "/slides/background/02_nathan-dumlao-6VhPY27jdps-unsplash.jpg",
    credit: "Photo by Nathan Dumlao on Unsplash",
    credit_url: "https://unsplash.com/photos/6VhPY27jdps",
  },
  {
    image_source: "/slides/background/03_fresho_build_punishment.gif",
    credit: "Selena & Michael",
    credit_url: "https://failure-driven.com",
  },
  {
    image_source:
      "/slides/background/04_john-fornander-C56oCEdK14c-unsplash.jpg",
    credit: "Photo by John Fornander on Unsplash",
    credit_url: "https://unsplash.com/photos/C56oCEdK14c",
  },

  {
    image_source:
      "/slides/background/05_brooke-lark-pGM4sjt_BdQ-unsplash.jpg",
    credit: "Photo by Brooke Lark on Unsplash",
    credit_url: "https://unsplash.com/photos/pGM4sjt_BdQ",
  },
];

function App() {
  const [items, setItems] = useState([]);
  const [showFinal, setShowFinal] = useState(false);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [slideshowData, setSlideshowData] = useState();
  const [slideshowIndex, setSlideshowIndex] = useState();
  const [endState, setEndState] = useState(false);

  const createItem = (text, index) => {
    return {
      id: uuid(),
      ordinal: index || items.length + 1,
      isComplete: false,
      text: text,
    };
  };
  const addItem = text => {
    if (text === "w") {
      setSlideshowData(whiteboardData);
      setSlideshowIndex(0);
      setShowSlideshow(true);
      setItems([]);
    }
    if (["1", "2", "3", "4", "5"].includes(text)) {
      setSlideshowData(backgroundData);
      setSlideshowIndex(parseInt(text, 10) - 1);
      setShowSlideshow(true);
      setItems([]);
    }
    if (text === "f") {
      setShowFinal(true);
    }
    if (text === "" && endState) {
      if (items.length === 1)
        setItems([...items, createItem("2 - Distractions")]);
      if (items.length === 2) setItems([...items, createItem("3 - Work")]);
      if (items.length === 3)
        setItems([...items, createItem("4 - Regular breaks")]);
      if (items.length === 4)
        setItems([...items, createItem("5 - Mini retros")]);
      if (items.length > 4) setShowFinal(true);
    } else if (text === "e") {
      setShowFinal(false);
      setEndState(true);
      setItems([createItem("1 - Ergonomics")]);
    } else if (text === "c" || text === "f") {
      setItems(
        [
          "1 - Ergonomics",
          "2 - Distractions",
          "3 - Work",
          "4 - Regular breaks",
          "5 - Mini retros",
        ].map((text, index) => createItem(text, index + 1))
      );
    } else if (text === "cl" || text === "q") {
      setEndState(false);
      setShowFinal(false);
      setItems([]);
    } else {
      setShowFinal(false);
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

  if (showSlideshow)
    return (
      <Slideshow
        hideSlideshow={() => {
          setShowSlideshow(false);
        }}
        data={slideshowData}
        index={slideshowIndex}
      />
    );

  return (
    <div className='todo'>
      <h1>Todo - pairing dojo</h1>
      <Form addItem={addItem} />
      <List
        items={items}
        toggleComplete={toggleComplete}
        removeItem={removeItem}
      />
      {showFinal && <Final />}
    </div>
  );
}

export default App;
