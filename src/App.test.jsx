import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { v4 } from "uuid";

jest.mock('uuid', () => ({ v4: jest.fn() }))

it("renders a title a form and a list", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("h1").text()).toEqual("Todo - pairing dojo");
  expect(wrapper.find("Form")).toHaveLength(1);
  expect(wrapper.find("List")).toHaveLength(1);
});

it("adds a todo item when addItem is called", () => {
  v4.mockImplementationOnce(() => "123");

  const wrapper = shallow(<App />);
  expect(wrapper.find("List").prop("items")).toEqual([]);
  wrapper.find("Form").prop("addItem")("todo item 1");
  expect(wrapper.find("List").prop("items")).toEqual([
    { id: "123", ordinal: 1, isComplete: false, text: "todo item 1" },
  ]);
});

describe("when there are 2 items", () => {
  let wrapper = null;
  beforeEach(() => {
    v4.mockImplementationOnce(() => "ABC");
    v4.mockImplementationOnce(() => "123");

    wrapper = shallow(<App />);

    wrapper.find("Form").prop("addItem")("todo 1");
    wrapper.find("Form").prop("addItem")("todo 2");
  });

  it("Marks item as complete when toggleComplete is called", () => {
    wrapper.find("List").prop("toggleComplete")("123");
    expect(wrapper.find("List").prop("items")).toEqual([
      { id: "123", ordinal: 1, isComplete: true, text: "todo 1" },
      { id: "ABC", ordinal: 2, isComplete: false, text: "todo 2" },
    ]);
  });
});
