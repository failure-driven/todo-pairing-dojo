import React from "react";
import { shallow } from "enzyme";
import Whiteboard from "./Whiteboard";

it("renders a whiteboard explanation", () => {
  const wrapper = shallow(<Whiteboard hideWhiteboard={() => {}} />);
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
