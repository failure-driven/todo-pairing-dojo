import React, { useState, useEffect, useRef } from "react";
import { func, number, array, string } from "prop-types";

const SlideShowImage = ({ src, alt }) => <img src={src} alt={alt} />;

SlideShowImage.propTypes = {
  src: string,
  alt: string
};

export default function Slideshow({ hideSlideshow, index, data, extraData }) {
  const [slideIndex, setSlideIndex] = useState(index);
  const [extraIndex, setExtraIndex] = useState(0);
  const [imageSrc, setImageSrc] = useState(data[slideIndex].image_source);

  const handleKeyPress = event => {
    if (
      event.key === "ArrowRight" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowDown"
    ) {
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
      setImageSrc(data[localIndex].image_source);
      if (event.key === "ArrowDown") {
        if (
          extraData[slideIndex] &&
          extraData[slideIndex][extraIndex] &&
          extraData[slideIndex][extraIndex]
        ) {
          if (extraData[slideIndex][extraIndex].action) {
            extraData[slideIndex][extraIndex].action("play");
          } else if (extraData[slideIndex][extraIndex].image_source) {
            setImageSrc(extraData[slideIndex][extraIndex].image_source);
          } else {
            setImageSrc(data[slideIndex].image_source);
            setExtraIndex(0);
          }
          setExtraIndex(extraIndex + 1);
        } else {
          setImageSrc(data[slideIndex].image_source);
          setExtraIndex(0);
        }
      }
    } else if (
      event.key === "Control" ||
      event.key === "Alt" ||
      event.key === "Meta" ||
      event.key === "Shift"
    ) {
      return;
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
        <SlideShowImage src={imageSrc} alt={`slide ${slideIndex}`} />
      </main>
    </div>
  );
}

Slideshow.propTypes = {
  hideSlideshow: func,
  data: array.isRequired,
  extraData: array,
  index: number
};

Slideshow.defaultProps = {
  hideSlideshow: () => {},
  index: 0,
  extraData: []
};
