import React from "react";
import { shallow } from "enzyme";
import App from "./App";

jest.mock("uuid/v4");

it("renders a title a form and a list", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("h1").text()).toEqual("Todo - pairing dojo");
  expect(wrapper.find("Form")).toHaveLength(1);
  expect(wrapper.find("List")).toHaveLength(1);
  expect(wrapper).toMatchInlineSnapshot(`
    <div
      className="todo"
    >
      <h1>
        Todo - pairing dojo
      </h1>
      <Form
        addItem={[Function]}
      />
      <List
        items={Array []}
        toggleComplete={[Function]}
      />
    </div>
  `);
});

it("adds a todo item when addItem is called", () => {
  const mockUuid = require("uuid/v4");
  mockUuid.mockImplementationOnce(() => "123");

  const wrapper = shallow(<App />);
  expect(wrapper.find("List").prop("items")).toEqual([]);
  wrapper.find("Form").prop("addItem")("todo item 1");
  expect(wrapper.find("List").prop("items")).toEqual([
    { id: "123", ordinal: 1, isComplete: false, text: "todo item 1" },
  ]);
});

it("Marks item as complete when toggleComplete is called", () => {
  const mockUuid = require("uuid/v4");
  mockUuid.mockImplementationOnce(() => "123");

  const wrapper = shallow(<App />);

  wrapper.find("Form").prop("addItem")("todo 1");
  wrapper.find("List").prop("toggleComplete")("123");
  expect(wrapper.find("List").prop("items")).toEqual([
    { id: "123", ordinal: 1, isComplete: true, text: "todo 1" },
  ]);
});
