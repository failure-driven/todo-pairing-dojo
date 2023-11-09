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
    <svg id="mable-logo" xmlns="http://www.w3.org/2000/svg" width="230" height="64" viewBox="0 0 115 32" fill="none">
      <g clipPath="url(#clip0_12_5913)">
      <path d="M88.8369 32C87.2441 32 85.1796 31.398 83.9258 29.7406C83.5302 30.3879 82.9761 30.9224 82.3162 31.2932C81.6564 31.6641 80.913 31.8588 80.157 31.8588C79.4009 31.8588 78.6575 31.6641 77.9977 31.2932C77.3378 30.9224 76.7837 30.3879 76.3881 29.7406C75.1544 31.3947 73.0799 31.9966 71.4703 31.9966C69.6642 32.0155 67.9238 31.3167 66.6281 30.0526C65.3055 28.7459 64.5754 26.908 64.5754 24.8746C64.5754 22.8412 65.3055 20.9967 66.6281 19.7018C67.9295 18.4493 69.6682 17.7598 71.4703 17.7813C73.2561 17.7813 74.8993 18.4676 75.8661 19.5736C76.0188 19.1308 76.3049 18.7468 76.6848 18.4749C77.0647 18.203 77.5195 18.0566 77.9859 18.0561H78.8386V24.8561L78.8486 25.1545V27.4071C78.8491 27.7553 78.987 28.0891 79.2321 28.3354C79.4772 28.5816 79.8095 28.7201 80.1561 28.7206H80.2232C80.564 28.6969 80.8826 28.5426 81.1134 28.2898C81.3442 28.0369 81.4696 27.7046 81.4636 27.3616V24.8561V10.9612H84.5905V19.4286C85.5623 18.3866 87.0947 17.7847 88.8604 17.7847C92.8382 17.7847 95.7268 20.769 95.7268 24.878C95.7268 26.9114 94.9983 28.756 93.6758 30.0559C92.3806 31.3188 90.6417 32.0174 88.8369 32V32ZM88.6422 20.8719C86.6935 20.8719 84.614 22.2663 84.614 24.8527C84.614 27.6448 86.6986 28.9178 88.6422 28.9178C90.8694 28.9178 92.5495 27.1694 92.5495 24.8527C92.5495 22.5057 90.9433 20.8702 88.6422 20.8702V20.8719ZM71.6902 20.8719C69.4092 20.8719 67.7543 22.5462 67.7543 24.8527C67.7543 27.1593 69.4461 28.9178 71.6902 28.9178C73.6254 28.9178 75.7083 27.6448 75.7083 24.8527C75.7117 22.2646 73.6422 20.8702 71.6935 20.8702L71.6902 20.8719Z" fill="#F56B0C"/>
      <path d="M108.243 32C104.215 32 101.292 28.9937 101.292 24.851C101.292 22.7805 101.994 20.9983 103.322 19.7017C104.584 18.4659 106.333 17.7847 108.243 17.7847C112.221 17.7847 114.998 20.6898 114.998 24.851C114.998 25.1646 114.998 25.5929 114.97 25.888L114.943 26.156H104.48C104.878 27.9635 106.355 29.1117 108.328 29.1117C109.824 29.1117 111.155 28.3985 111.801 27.2486L111.93 27.0193L112.174 27.1205C112.539 27.2739 112.957 27.4307 113.364 27.5825C113.699 27.7055 114.035 27.8337 114.34 27.9585L114.637 28.0782L114.496 28.3648C113.392 30.6393 111.054 32 108.243 32ZM111.843 23.5696C111.459 21.7706 110.106 20.6696 108.243 20.6696C106.316 20.6696 104.871 21.7959 104.478 23.5696H111.843Z" fill="#F56B0C"/>
      <path d="M96.8395 31.7353V10.9746H97.1366C97.8869 10.9755 98.6061 11.2753 99.1366 11.8082C99.6671 12.3412 99.9655 13.0637 99.9664 13.8174V31.7353H96.8395Z" fill="#F56B0C"/>
      <path d="M60.3626 31.7218V23.745C60.3626 22.0876 59.1004 20.8399 57.4253 20.8399C55.7503 20.8399 54.4881 22.0876 54.4881 23.745V31.7218H51.373V23.745C51.373 22.0876 50.1108 20.8399 48.4374 20.8399C46.764 20.8399 45.5002 22.0876 45.5002 23.745V31.7218H42.3901V24.0232C42.3901 20.5246 45.0453 17.7847 48.4324 17.7847C49.3038 17.77 50.1681 17.944 50.9666 18.2949C51.7651 18.6458 52.479 19.1653 53.0598 19.8181C53.6021 19.1878 54.2716 18.6805 55.024 18.3299C55.7764 17.9793 56.5943 17.7935 57.4237 17.7847C58.9912 17.7644 60.5077 18.3444 61.665 19.4067C62.2485 19.9649 62.7104 20.6387 63.0212 21.3854C63.3321 22.1322 63.4853 22.9357 63.471 23.745V31.7218H60.3626Z" fill="#F56B0C"/>
      <path d="M26.6213 11.0564C27.7362 10.4273 28.6163 9.44993 29.1279 8.27272C29.6396 7.09552 29.755 5.78274 29.4565 4.5337C29.158 3.28466 28.4619 2.16757 27.474 1.35202C26.4861 0.536469 25.2603 0.067003 23.9826 0.0148946C22.705 -0.0372137 21.4453 0.330881 20.3948 1.0633C19.3443 1.79571 18.5604 2.85244 18.1621 4.07307C17.7638 5.29369 17.7729 6.61154 18.1879 7.82654C18.6028 9.04154 19.4012 10.0873 20.4616 10.8052C19.1226 11.1688 17.8702 11.7995 16.7791 12.6598C15.6847 11.7988 14.4289 11.1681 13.0866 10.8052C14.1467 10.0871 14.9446 9.04122 15.3592 7.82629C15.7739 6.61135 15.7827 5.29369 15.3842 4.07328C14.9858 2.85288 14.2019 1.79637 13.1515 1.06412C12.1011 0.331868 10.8416 -0.0361504 9.56415 0.0159228C8.28667 0.0679959 7.06098 0.537318 6.07311 1.35265C5.08524 2.16799 4.38913 3.28483 4.09044 4.53365C3.79174 5.78247 3.90677 7.09509 4.41806 8.27228C4.92935 9.44947 5.80899 10.427 6.92346 11.0564C4.89757 11.8149 3.14981 13.1755 1.91294 14.9569C0.676073 16.7383 0.00880343 18.8559 0 21.0278V29.4076C-7.78095e-08 29.7215 0.0615724 30.0323 0.181199 30.3223C0.300825 30.6123 0.476161 30.8757 0.697185 31.0976C0.91821 31.3195 1.18059 31.4954 1.46934 31.6154C1.75808 31.7354 2.06753 31.797 2.37999 31.7968C2.59535 31.802 2.81057 31.7817 3.02115 31.7361V20.9941C3.02115 16.9897 6.14132 13.6108 10.1276 13.4809C11.7598 13.4242 13.3641 13.9181 14.6845 14.8838C13.4581 16.6326 12.8008 18.72 12.803 20.8592V27.9205C12.803 30.1529 14.6207 32.0362 16.8412 31.9991C17.8819 31.9801 18.8736 31.5518 19.6033 30.8062C20.333 30.0605 20.7424 29.0571 20.7435 28.0115V20.8592C20.7457 18.72 20.0884 16.6326 18.862 14.8838C20.1824 13.9181 21.7866 13.4242 23.4189 13.4809C27.4052 13.6091 30.5321 16.9897 30.5321 20.9941V31.7361C30.7426 31.7817 30.9579 31.802 31.1732 31.7968C31.4857 31.797 31.7951 31.7354 32.0839 31.6154C32.3726 31.4954 32.635 31.3195 32.856 31.0976C33.077 30.8757 33.2524 30.6123 33.372 30.3223C33.4916 30.0323 33.5532 29.7215 33.5532 29.4076V21.0278C33.5433 18.855 32.8746 16.7369 31.6362 14.9555C30.3978 13.1741 28.6485 11.814 26.6213 11.0564V11.0564ZM9.8053 3.20264C10.3364 3.20264 10.8556 3.36086 11.2973 3.65729C11.7389 3.95372 12.0831 4.37505 12.2863 4.86799C12.4896 5.36093 12.5428 5.90335 12.4392 6.42666C12.3355 6.94997 12.0798 7.43065 11.7042 7.80794C11.3286 8.18522 10.8501 8.44215 10.3292 8.54624C9.80828 8.65034 9.26832 8.59691 8.77762 8.39273C8.28692 8.18854 7.8675 7.84277 7.57242 7.39913C7.27734 6.9555 7.11984 6.43392 7.11984 5.90036C7.12249 5.1857 7.40627 4.50107 7.90932 3.99573C8.41237 3.49039 9.09389 3.20531 9.8053 3.20264V3.20264ZM17.7224 28.0115C17.7121 28.2575 17.6076 28.4899 17.4307 28.6603C17.2538 28.8306 17.0183 28.9258 16.7732 28.9258C16.5282 28.9258 16.2926 28.8306 16.1158 28.6603C15.9389 28.4899 15.8344 28.2575 15.8241 28.0115V20.8592C15.8215 19.5891 16.1471 18.34 16.769 17.2342C17.3914 18.34 17.7181 19.5889 17.7174 20.8592L17.7224 28.0115ZM23.7429 3.20264C24.2736 3.20431 24.792 3.36394 25.2325 3.66138C25.6731 3.95882 26.0159 4.38073 26.2179 4.87382C26.4199 5.36691 26.4719 5.90906 26.3673 6.43181C26.2627 6.95456 26.0063 7.43446 25.6304 7.8109C25.2545 8.18734 24.776 8.44343 24.2553 8.54684C23.7346 8.65025 23.1951 8.59634 22.7049 8.39191C22.2146 8.18748 21.7957 7.84171 21.501 7.39825C21.2063 6.9548 21.049 6.43356 21.049 5.90036C21.0517 5.18424 21.3366 4.49835 21.8415 3.99276C22.3463 3.48718 23.03 3.20308 23.7429 3.20264V3.20264Z" fill="#F56B0C"/>
      </g>
      <defs>
      <clipPath id="clip0_12_5913">
      <rect width="115" height="32" fill="white"/>
      </clipPath>
      </defs>
      <script xmlns=""/>
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
    // src: "/slides/background/00_ss-mm-rubyconfth-2022.jpg",
    // style: { width: "945px", height: "945px" },
    // src: "/slides/background/00_ss-mm-reactmiami-2023.jpg",
    // style: { width: "1280px", height: "800px" },
    // src: "/slides/background/00_ss-mm-railsconf-2023.jpg",
    // style: { width: "1094px", height: "800px" },
    src: "/slides/background/00_ss-mm-openconf-2023.jpg",
    style: { width: "1280px", height: "720px" },
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
    src: "/other/open_conf_pair_with_me_tweet.png",
  },
  {
    src: "/slides/background/02_nathan-dumlao-6VhPY27jdps-unsplash.jpg",
    credit: "Photo by Nathan Dumlao on Unsplash",
    creditUrl: "https://unsplash.com/photos/6VhPY27jdps",
  },
  {
    // src: "/slides/background/03_melbourne_run.gif",
    // src: "/slides/background/03_sydney_run.gif",
    // src: "/slides/background/03_bangkok_run.gif",
    // src: "/slides/background/03_miami_run.gif",
    src: "/slides/background/03_atlanta_run.gif",
    credit: "Music: www.bensound.com",
    creditUrl: "http://www.bensound.com",
  },
  {
    src: "/other/open_conf_pair_with_me_tweet.png",
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
  {
    src: "/slides/background/00_ss-mm-openconf-2023.jpg",
    style: { width: "1280px", height: "720px" },
  },
  // {
  //   // GOOD lolcommit goes here
  //   src: "/slides/background/00_success_winning.gif",
  // },
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
