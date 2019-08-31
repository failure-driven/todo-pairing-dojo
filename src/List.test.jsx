import React from "react";
import { shallow } from "enzyme";
import List from "./List";

it("renders an empty unorderd list", () => {
  const wrapper = shallow(<List />);
  expect(wrapper.find("ul")).toHaveLength(1);
  expect(wrapper.find("ul li")).toHaveLength(0);
  expect(wrapper).toMatchInlineSnapshot("<ul />");
});
