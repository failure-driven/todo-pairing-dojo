import React from "react";
import { shallow } from "enzyme";
import Item from "./Item";

it("renders a list item", () => {
  const wrapper = shallow(
    <Item item={{ text: "todo text" }} toggleComplete={jest.fn()} />
  );
  expect(wrapper.find("li").text()).toEqual("todo text");
  expect(wrapper.find("input").prop("type")).toEqual("checkbox");
  expect(wrapper).toMatchInlineSnapshot(`
    <li
      className=""
    >
      <input
        onClick={[Function]}
        type="checkbox"
      />
      <span
        className="checkmark"
        onClick={[Function]}
      />
      <span>
        todo text
      </span>
    </li>
  `);
});

it("renders a list item that is complete", () => {
  const wrapper = shallow(
    <Item
      item={{ isComplete: true, text: "todo text" }}
      toggleComplete={jest.fn()}
    />
  );
  expect(wrapper.find("li").prop("className")).toEqual("completed");
});

it("Calls toggleComplete when the checkbox is checked", () => {
  const toggleComplete = jest.fn();
  const wrapper = shallow(
    <Item
      item={{ id: "123", text: "todo text" }}
      toggleComplete={toggleComplete}
    />
  );
  wrapper
    .find("input[type='checkbox']")
    .at(0)
    .simulate("click");
  expect(toggleComplete).toHaveBeenCalledWith("123");
});
