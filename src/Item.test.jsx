import React from "react";
import { shallow } from "enzyme";
import Item from "./Item";

it("renders a list item", () => {
  const wrapper = shallow(<Item item={{ text: "todo text" }} />);
  expect(wrapper.find("li").text()).toEqual("todo text");
  expect(wrapper).toMatchInlineSnapshot(
    `
    <li>
      todo text
    </li>
  `
  );
});
