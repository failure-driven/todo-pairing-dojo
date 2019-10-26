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
      <h1>
        Whiteboard
      </h1>
      <main>
        <h1>
          slide 
          1
        </h1>
        <img
          alt="slide 0"
          src="/slides/slide_01.png"
        />
      </main>
    </div>
  `);
});
