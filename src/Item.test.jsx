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

describe("when there is an item", () => {
  const mockToggleComplete = jest.fn();
  const mockRemoveItem = jest.fn();
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(
      <Item
        item={{ id: "123", text: "todo text" }}
        toggleComplete={mockToggleComplete}
        removeItem={mockRemoveItem}
      />
    );
  });

  it("Calls toggleComplete when the checkbox is checked", () => {
    wrapper
      .find("input[type='checkbox']")
      .at(0)
      .simulate("click");
    expect(mockToggleComplete).toHaveBeenCalledWith("123");
  });
});
