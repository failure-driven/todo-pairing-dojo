import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

it("renders an in put which is autofocused", () => {
  const wrapper = shallow(<Form addItem={jest.fn()} />);
  expect(wrapper.find("input")).toHaveLength(1);
  expect(wrapper.find("input").prop("autoFocus")).toEqual(true);
  expect(wrapper).toMatchInlineSnapshot(`
    <input
      autoFocus={true}
      onChange={[Function]}
      onKeyDown={[Function]}
      value=""
    />
  `);
});

it("allows input to be typed in", () => {
  const wrapper = shallow(<Form addItem={jest.fn()} />);
  expect(wrapper.find("input").prop("value")).toEqual("");
  wrapper
    .find("input")
    .simulate("change", { target: { value: "an important todo" } });
  expect(wrapper.find("input").prop("value")).toEqual("an important todo");
});

it("adds the item from the input value when enter is pressed and clears value", () => {
  const mockAddItem = jest.fn();
  const wrapper = shallow(<Form addItem={mockAddItem} />);
  wrapper
    .find("input")
    .simulate("change", { target: { value: "an important todo" } });
  wrapper.find("input").simulate("keyDown", { key: "Enter" });
  expect(mockAddItem).toHaveBeenCalledWith("an important todo");
  expect(wrapper.find("input").prop("value")).toEqual("");
});
