import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.scss";
import Form from "./Form";
import List from "./List";
import Slideshow from "./Slideshow";

const Final = () => (
  <div className="final">
    <img src="fresho_logo.png" alt="Fresho logo" id="fresho-logo" />
    <img src="pair_with_me_qr.png" alt="pair-with.me" id="pair-with-me" />
    <svg id="zepto-logo" xmlns="http://www.w3.org/2000/svg" width="357" height="54" fill="none" viewBox="0 0 119 28">
      <title>Zepto logo</title>
      <path fill="currentColor" d="M16.828 0H.957A.945.945 0 000 .933v15.48c0 .832 1.03 1.248 1.634.66l15.871-15.48c.603-.588.176-1.593-.677-1.593zM28.708 27.067V2.253c0-.831-1.03-1.248-1.633-.66L1.634 26.407C1.03 26.995 1.458 28 2.31 28h25.441a.945.945 0 00.957-.933zM118.4 14.008c0-5.376-3.376-9.015-8.934-9.015-5.49 0-8.968 3.706-8.968 9.015 0 5.309 3.478 9.015 8.968 9.015 5.524 0 8.934-3.706 8.934-9.015zm-8.934 5.542c-2.864 0-4.569-1.97-4.569-5.542 0-3.573 1.705-5.543 4.569-5.543 2.83 0 4.569 1.97 4.569 5.543 0 3.572-1.739 5.542-4.569 5.542zM100.26 5.428h-3.479V.793H92.52v4.635H89.79v3.205h2.728v9.75c0 3.105 1.705 4.407 5.49 4.407.443 0 1.194-.034 2.251-.134v-3.205h-1.467c-1.466 0-2.012-.4-2.012-1.503V8.633h3.479V5.428zM82.107 4.993c-2.49 0-4.365.968-5.627 2.872V5.394h-4.126V28h4.297v-7.615c1.261 1.77 3.069 2.638 5.456 2.638 5.388 0 7.877-4.174 7.877-9.015 0-4.875-2.455-9.015-7.877-9.015zm-5.559 9.015c0-3.606 1.705-5.543 4.536-5.543 2.864 0 4.535 1.837 4.535 5.41 0 2.87-1.16 5.675-4.535 5.675-3.342 0-4.536-2.637-4.536-5.542zM70.931 14.308c0-5.242-3.069-9.315-8.695-9.315-5.49 0-8.696 3.806-8.696 9.015 0 5.208 3.274 9.015 8.764 9.015 3.81 0 6.69-1.846 7.877-4.81.12-.3.223-.611.307-.933h-4.126c-.716 1.636-2.046 2.47-4.024 2.47-2.592 0-4.262-1.468-4.57-4.44h13.163v-1.002zm-8.73-6.043c2.49 0 4.059 1.603 4.434 4.107h-8.832c.409-2.771 2.046-4.107 4.399-4.107zM47.39 19.35c-1.603 0-2.797 0-3.615.033.58-.7 1.33-1.569 2.216-2.637l6.957-8.581V5.394H38.592v3.272h5.388c1.602 0 2.796 0 3.614-.034-.58.702-1.33 1.57-2.216 2.638l-6.957 8.58v2.772h14.936V19.35H47.39z">
      </path>
    </svg>
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
  { src: "/slides/background/03_selena_elsa_win.gif" },
  { src: "/slides/background/03_selena_elsa.gif" },
  { src: "/slides/background/03_selena_elsa_fight_only.gif" },
  { src: "/slides/background/03_selena_elsa_highlight.gif" },
  { src: "/slides/background/03_selena_drops_liz.gif" },
  { src: "/slides/background/03_fresho_build_punishment.gif" },
];

const backgroundData = [
  {
    // src: "/slides/background/00_ss-mm-rubyconfau-2020.jpg",
    // style: { width: "1280px", height: "720px" },
    // src: "/slides/background/00_ss-mm-reactconfau-2020.jpg",
    // style: { width: "1280px", height: "640px" },
    src: "/slides/background/00_ss-mm-rubyconfth-2022.jpg",
    style: { width: "945px", height: "945px" },
  },
  {
    src: "/slides/background/01_austin-distel-wawEfYdpkag-unsplash.jpg",
    credit: "Photo by Austin Distel on Unsplash",
    creditUrl: "https://unsplash.com/photos/wawEfYdpkag",
  },
  // {
  //   // BAD lolcommit goes here
  //   src: "/slides/background/00_thats_how_you_pair.gif",
  // },
  {
    src: "/slides/background/02_nathan-dumlao-6VhPY27jdps-unsplash.jpg",
    credit: "Photo by Nathan Dumlao on Unsplash",
    creditUrl: "https://unsplash.com/photos/6VhPY27jdps",
  },
  {
    // src: "/slides/background/03_melbourne_run.gif",
    src: "/slides/background/03_sydney_run.gif",
    // TODO: Thailand Run/Muay Thai goes ere
    credit: "Music: www.bensound.com",
    creditUrl: "http://www.bensound.com",
  },
  {
    src: "/slides/background/03_bangkok_run.gif",
    credit: "Music: www.bensound.com",
    creditUrl: "http://www.bensound.com",
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
  { src: "/slides/slide.001.jpeg" },
  { src: "/slides/slide.002.jpeg" },
  { src: "/slides/slide.003.jpeg" },
  { src: "/slides/slide.004.jpeg" },
  { src: "/slides/slide.005.jpeg" },
  { src: "/slides/slide.006.jpeg" },
  { src: "/slides/slide.007.jpeg" },
  { src: "/slides/slide.008.jpeg" },
  { src: "/slides/slide.009.jpeg" },
  // {
  //   // GOOD lolcommit goes here
  //   src: "/slides/background/00_success_winning.gif",
  // },
  {
    src: "/slides/background/00_ss-mm-rubyconfth-2022.jpg",
    style: { width: "945px", height: "945px" },
  },
];

// var audio = new Audio("/audio/rockstar_40_sec_edit.mp3");
// var audio = new Audio("/audio/rockstar_22_sec_edit.mp3");
var audio = new Audio("/audio/bensound-extremeaction.mp3");

const onTheDay1 = () =>
  new Date().getTime() > new Date("20 Feb 2020 15:50:00 GMT+1100").getTime()
    ? "/slides/background/03_selena_elsa_fight_only.gif"
    : "/slides/background/03_selena_drops_liz.gif";

const onTheDay2 = () =>
  new Date().getTime() > new Date("20 Feb 2020 15:50:00 GMT+1100").getTime()
    ? "/slides/background/03_selena_elsa_win.gif"
    : "/slides/background/03_enter_the_ring.gif";

const extraData = [
  [
    // {
    //   src: "/slides/background/00_01_ss-mm-rubyconfau-2020.jpg",
    //   style: { width: "1280px", height: "720px" },
    // },
    // {
    //   src: "/slides/background/00_02_ss-mm-rubyconfau-2020.jpg",
    //   style: { width: "1280px", height: "720px" },
    // },
    // {
    //   src: "/slides/background/00_03_ss-mm-rubyconfau-2020.jpg",
    //   style: { width: "1280px", height: "720px" },
    // },
    // {
    //   src: "/slides/background/00_04_ss-mm-rubyconfau-2020.jpg",
    //   style: { width: "1280px", height: "720px" },
    // },
    // {
    //   src: "/slides/background/00_05_a_ss-mm-rubyconfau-2020.jpg",
    //   style: { width: "1280px", height: "720px" },
    // },
    // {
    //   src: "/slides/background/00_05_b_ss-mm-rubyconfau-2020.jpg",
    //   style: { width: "1280px", height: "720px" },
    // },
  ],
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
  ],
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
  ],
  null,
  [{ src: onTheDay1() }],
  null,
  null,
  null,
  null,
  null,
  null,
  null,
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
    if (["1", "2", "3", "4", "5", "6", "7", "8"].includes(text)) {
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
      extraData[3][0].action("play");
    } else if (text === "s") {
      setTitle("Todo - pairing dojo");
      extraData[3][0].action("stop");
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
