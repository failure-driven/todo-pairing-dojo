import React, { useState, useEffect, useRef } from "react";
import { func, number, array } from "prop-types";

export default function Slideshow({ hideSlideshow, index, data }) {
  const [slideIndex, setSlideIndex] = useState(index);

  const handleKeyPress = event => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      let localIndex = slideIndex;
      if (event.key === "ArrowRight") {
        localIndex = slideIndex + 1;
        if (data.length <= localIndex) {
          localIndex = 0;
        }
      }
      if (event.key === "ArrowLeft") {
        localIndex = slideIndex - 1;
        if (localIndex < 0) {
          localIndex = data.length - 1;
        }
      }
      setSlideIndex(localIndex);
    } else {
      hideSlideshow();
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

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      ref={inputRef}
      className='whiteboard'
      onKeyDown={handleKeyPress}
      onClick={handleClick}
      autoFocus
      tabIndex='0'
    >
      <main>
        <img
          src={data[slideIndex].image_source}
          alt={`slide ${slideIndex}`}
        />
      </main>
    </div>
  );
}

Slideshow.propTypes = {
  hideSlideshow: func,
  data: array.isRequired,
  index: number,
};

Slideshow.defaultProps = {
  hideSlideshow: () => {},
  index: 0,
};
