import React, { useState, useEffect, useRef } from "react";
import { any, func, number, array, shape, string } from "prop-types";

const SlideShowImage = ({
  imageData: { src, alt, style, credit, creditUrl },
}) => (
  <>
    <img src={src} alt={alt} style={style} />
    {credit && creditUrl && (
      <div className="credits">
        <p>{credit}</p>
        <p>
          <a href={creditUrl} alt="credit link">
            {creditUrl}
          </a>
        </p>
      </div>
    )}
  </>
);

SlideShowImage.propTypes = {
  imageData: shape({
    str: string,
    style: any,
    alt: string,
    credit: string,
    creditUrl: string,
  }),
};

export default function Slideshow({ hideSlideshow, index, data, extraData }) {
  const [slideIndex, setSlideIndex] = useState(index);
  const [extraIndex, setExtraIndex] = useState(0);
  const [imageData, setImageData] = useState(data[slideIndex]);

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
      setImageData(data[localIndex]);
      if (event.key === "ArrowDown") {
        if (
          extraData[slideIndex] &&
          extraData[slideIndex][extraIndex] &&
          extraData[slideIndex][extraIndex]
        ) {
          if (extraData[slideIndex][extraIndex].action) {
            extraData[slideIndex][extraIndex].action("play");
          } else if (extraData[slideIndex][extraIndex]) {
            setImageData(extraData[slideIndex][extraIndex]);
          } else {
            setImageData(data[slideIndex]);
            setExtraIndex(0);
          }
          setExtraIndex(extraIndex + 1);
        } else {
          setImageData(data[slideIndex]);
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
      className="whiteboard"
      onKeyDown={handleKeyPress}
      onClick={handleClick}
      autoFocus
      tabIndex="0"
    >
      <main>
        <SlideShowImage imageData={imageData} alt={`slide ${slideIndex}`} />
      </main>
    </div>
  );
}

Slideshow.propTypes = {
  hideSlideshow: func,
  data: array.isRequired,
  extraData: array,
  index: number,
};

Slideshow.defaultProps = {
  hideSlideshow: () => {},
  index: 0,
  extraData: [],
};
