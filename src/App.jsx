import React, { useState } from "react";
import uuid from "uuid/v4";
import "./App.scss";
import Form from "./Form";
import List from "./List";
import Slideshow from "./Slideshow";

const Final = () => (
  <div className="final">
    <img src="fresho_logo.png" alt="fresho logo" id="fresho-logo" />
  </div>
);

const whiteboardData = [
  { src: "/slides/slide.001.jpeg" },
  { src: "/slides/slide.002.jpeg" },
  { src: "/slides/slide.003.jpeg" },
  { src: "/slides/slide.004.jpeg" },
  { src: "/slides/slide.005.jpeg" },
  { src: "/slides/slide.006.jpeg" },
  { src: "/slides/slide.007.jpeg" },
  { src: "/slides/slide.008.jpeg" },
  { src: "/slides/slide.009.jpeg" },
];

const specials = [
  { src: "/slides/background/03_selena_elsa.gif" },
  { src: "/slides/background/03_selena_elsa_win.gif" },
  { src: "/slides/background/03_selena_elsa_highlight.gif" },
  { src: "/slides/background/03_selena_drops_liz.gif" },
  { src: "/slides/background/03_fresho_build_punishment.gif" },
];

const backgroundData = [
  {
    src: "/slides/background/00_ss-mm-rubyconfau-2020.jpg",
    style: { width: "1280px", height: "720px" },
    // src: "/slides/background/00_ss-mm-reactconfau-2020.jpg",
    // style: { width: "1280px", height: "640px" },
  },
  {
    src: "/slides/background/01_austin-distel-wawEfYdpkag-unsplash.jpg",
    credit: "Photo by Austin Distel on Unsplash",
    creditUrl: "https://unsplash.com/photos/wawEfYdpkag",
  },
  {
    src:
      "http://s3-ap-southeast-2.amazonaws.com/failure-driven-blog/railscamp-24-woodfield-hobart/commit_03_edward_0f515e5ecc3.gif",
  },
  {
    src: "/slides/background/02_nathan-dumlao-6VhPY27jdps-unsplash.jpg",
    credit: "Photo by Nathan Dumlao on Unsplash",
    creditUrl: "https://unsplash.com/photos/6VhPY27jdps",
  },
  {
    src: "/slides/background/03_michael_run_smooth.gif",
  },
  {
    src: "/slides/background/04_john-fornander-C56oCEdK14c-unsplash.jpg",
    credit: "Photo by John Fornander on Unsplash",
    creditUrl: "https://unsplash.com/photos/C56oCEdK14c",
  },

  {
    src: "/slides/background/05_brooke-lark-pGM4sjt_BdQ-unsplash.jpg",
    credit: "Photo by Brooke Lark on Unsplash",
    creditUrl: "https://unsplash.com/photos/pGM4sjt_BdQ",
  },
  {
    src:
      "http://s3-ap-southeast-2.amazonaws.com/failure-driven-blog/railscamp-24-woodfield-hobart/commit_06_emily_coats_74791c0fa7e.gif",
  },
  { src: "/slides/slide.001.jpeg" },
  { src: "/slides/slide.002.jpeg" },
  { src: "/slides/slide.003.jpeg" },
  { src: "/slides/slide.004.jpeg" },
  { src: "/slides/slide.005.jpeg" },
  { src: "/slides/slide.006.jpeg" },
  { src: "/slides/slide.007.jpeg" },
  { src: "/slides/slide.008.jpeg" },
  { src: "/slides/slide.009.jpeg" },
];

var audio = new Audio("/audio/rockstar_40_sec_edit.mp3");

const onTheDay1 = () =>
  new Date().getTime() > new Date("20 Feb 2020 16:00:00 GMT+1100").getTime()
    ? "/slides/background/03_selena_elsa.gif"
    : "/slides/background/03_selena_drops_liz.gif";

const onTheDay2 = () =>
  new Date().getTime() > new Date("20 Feb 2020 16:00:00 GMT+1100").getTime()
    ? "/slides/background/03_selena_elsa_win.gif"
    : "/slides/background/03_enter_the_ring.gif";

const extraData = [
  [
    {
      src: "/slides/background/00_01_ss-mm-reactconfau-2020.jpg",
      style: { width: "1280px", height: "720px" },
    },
    {
      src: "/slides/background/00_02_ss-mm-reactconfau-2020.jpg",
      style: { width: "1280px", height: "720px" },
    },
    {
      src: "/slides/background/00_03_ss-mm-reactconfau-2020.jpg",
      style: { width: "1280px", height: "720px" },
    },
    {
      src: "/slides/background/00_04_ss-mm-reactconfau-2020.jpg",
      style: { width: "1280px", height: "720px" },
    },
    {
      src: "/slides/background/00_05_ss-mm-reactconfau-2020.jpg",
    },
  ],
  null,
  null,
  null,
  [
    {
      action: action => {
        if (action === "play") {
          audio.play();
        }
        if (action === "stop") {
          audio.pause();
          audio.load();
        }
      },
    },
    { src: onTheDay1() },
  ],
  null,
  null,
  [{ src: onTheDay2() }],
];

function App() {
  const [items, setItems] = useState([]);
  const [showFinal, setShowFinal] = useState(false);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [slideshowData, setSlideshowData] = useState();
  const [slideshowIndex, setSlideshowIndex] = useState();
  const [endState, setEndState] = useState(false);
  const [title, setTitle] = useState("Todo - pairing dojo");

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
    if (["1", "2", "3", "4", "5", "6"].includes(text)) {
      setSlideshowData(backgroundData);
      setSlideshowIndex(parseInt(text, 10) - 1);
      setShowSlideshow(true);
      setItems([]);
    }
    if (text === "99") {
      setSlideshowData(specials);
      setSlideshowIndex(0);
      setShowSlideshow(true);
      setItems([]);
    }
    if (text === "f") {
      setShowFinal(true);
      setTitle("10x - pair programming");
    }
    if (text === "" && endState) {
      if (items.length === 1)
        setItems([...items, createItem("2 - Distractions")]);
      if (items.length === 2)
        setItems([...items, createItem("3 - Regular breaks")]);
      if (items.length === 3) setItems([...items, createItem("4 - Plan")]);
      if (items.length === 4) setItems([...items, createItem("5 - Work")]);
      if (items.length === 5)
        setItems([...items, createItem("6 - Mini retros")]);
      if (items.length > 4) {
        setShowFinal(true);
        setTitle("10x - pair programming");
      }
    } else if (text === "m") {
      setTitle("Rockstar");
      extraData[4][0].action("play");
    } else if (text === "s") {
      setTitle("Todo - pairing dojo");
      extraData[4][0].action("stop");
    } else if (text === "e") {
      setShowFinal(false);
      setTitle("Todo - pairing dojo");
      setEndState(true);
      setItems([createItem("1 - Ergonomics")]);
    } else if (text === "c" || text === "f") {
      setItems(
        [
          "1 - Ergonomics",
          "2 - Distractions",
          "3 - Regular breaks",
          "4 - Plan",
          "5 - Work",
          "6 - Mini retros",
        ].map((text, index) => createItem(text, index + 1)),
      );
    } else if (text === "cl" || text === "q") {
      setEndState(false);
      setShowFinal(false);
      setTitle("Todo - pairing dojo");
      setItems([]);
    } else {
      setShowFinal(false);
      setTitle("Todo - pairing dojo");
      setItems([...items, createItem(text)]);
    }
  };

  const toggleIsComplete = item =>
    Object.assign(item, { isComplete: !item.isComplete });

  const toggleComplete = id => {
    setItems(
      items.map(item => (item.id === id ? toggleIsComplete(item) : item)),
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
        extraData={extraData}
      />
    );

  return (
    <div className="todo">
      <h1>{title}</h1>
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
