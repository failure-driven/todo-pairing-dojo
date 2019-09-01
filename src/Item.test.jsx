import React from "react";
import { shallow } from "enzyme";
import Item from "./Item";

it("renders a list item", () => {
  const wrapper = shallow(
    <Item
      item={{ text: "todo text" }}
      toggleComplete={jest.fn()}
      removeItem={jest.fn()}
    />
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
      <button
        onClick={[Function]}
      />
    </li>
  `);
});

it("renders a list item that is complete", () => {
  const wrapper = shallow(
    <Item
      item={{ isComplete: true, text: "todo text" }}
      toggleComplete={jest.fn()}
      removeItem={jest.fn()}
    />
  );
  expect(wrapper.find("li").prop("className")).toEqual("completed");
});

it("Calls toggleComplete when the checkbox is checked", () => {
  const mockToggleComplete = jest.fn();
  const wrapper = shallow(
    <Item
      item={{ id: "123", text: "todo text" }}
      toggleComplete={mockToggleComplete}
      removeItem={jest.fn()}
    />
  );
  wrapper
    .find("input[type='checkbox']")
    .at(0)
    .simulate("click");
  expect(mockToggleComplete).toHaveBeenCalledWith("123");
});

it("Calls removeItem when remove button is clicked", () => {
  const mockRemoveItem = jest.fn();
  const wrapper = shallow(
    <Item
      item={{ id: "123", text: "todo text" }}
      toggleComplete={jest.fn()}
      removeItem={mockRemoveItem}
    />
  );
  wrapper
    .find("button")
    .at(0)
    .simulate("click");
  expect(mockRemoveItem).toHaveBeenCalledWith("123");
});
