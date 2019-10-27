import React, { useState } from "react";
import { func } from "prop-types";

export default function Whiteboard({ hideWhiteboard }) {
  const data = [
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
      <main>
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
