import React, { useState } from "react";
import { func } from "prop-types";

export default function Whiteboard({ hideWhiteboard }) {
  const data = [
    { image_source: "/slides/slide_01.png" },
    { image_source: "/slides/slide_02.png" },
    { image_source: "/slides/slide_03.png" },
  ];
  const [index, setIndex] = useState(0);

  const handleKeyPress = event => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      let localIndex = index;
      if (event.key === "ArrowRight") {
        localIndex = index + 1;
        if (data.length <= localIndex) {
          localIndex = 0;
        }
      }
      if (event.key === "ArrowLeft") {
        localIndex = index - 1;
        if (localIndex < 0) {
          localIndex = data.length - 1;
        }
      }
      setIndex(localIndex);
    }
    if (event.key === "q") {
      hideWhiteboard();
    }
  };

  const handleClick = () => {
    // do nothing
    // let localIndex = index + 1;
    // if (data.length <= localIndex) {
    //   localIndex = 0;
    // }
    // setIndex(localIndex);
  };

  return (
    <div
      className='whiteboard'
      onKeyDown={handleKeyPress}
      onClick={handleClick}
      autoFocus
      tabIndex='0'
    >
      <h1>Whiteboard</h1>
      <main>
        <h1>slide {index + 1}</h1>
        <img src={data[index].image_source} alt={`slide ${index}`} />
      </main>
    </div>
  );
}

Whiteboard.propTypes = {
  hideWhiteboard: func,
};
Whiteboard.defaultProps = {
  hideWhiteboard: () => {},
};
