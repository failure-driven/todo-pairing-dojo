import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

it("renders an in put which is autofocused", () => {
  const wrapper = shallow(<Form />);
  expect(wrapper.find("input")).toHaveLength(1);
  expect(wrapper.find("input").prop("autoFocus")).toEqual(true);
  expect(wrapper).toMatchInlineSnapshot(`
    <input
      autoFocus={true}
    />
  `);
});
