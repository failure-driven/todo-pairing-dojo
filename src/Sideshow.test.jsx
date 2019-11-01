import React from "react";
import { shallow } from "enzyme";
import Slideshow from "./Slideshow";

it("renders a slideshow explanation", () => {
  const wrapper = shallow(
    <Slideshow
      hideSlideshow={() => {}}
      data={[{ alt: "slide 0", image_source: "/slides/slide.001.jpeg" }]}
    />
  );
  expect(wrapper).toMatchInlineSnapshot(`
    <div
      autoFocus={true}
      className="whiteboard"
      onClick={[Function]}
      onKeyDown={[Function]}
      tabIndex="0"
    >
      <main>
        <img
          alt="slide 0"
          src="/slides/slide.001.jpeg"
        />
      </main>
    </div>
  `);
});
