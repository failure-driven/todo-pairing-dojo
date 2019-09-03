import React from "react";
import { shallow } from "enzyme";
import App from "./App";

jest.mock("uuid/v4");

it("renders a title a form and a list", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("h1").text()).toEqual("Todo - pairing dojo");
  expect(wrapper.find("Form")).toHaveLength(1);
  expect(wrapper.find("List")).toHaveLength(1);
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

describe("when there are 2 items", () => {
  let wrapper = null;
  beforeEach(() => {
    const mockUuid = require("uuid/v4");
    mockUuid.mockImplementationOnce(() => "123");
    mockUuid.mockImplementationOnce(() => "ABC");

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

  it("removes an item when removeItem is called", () => {
    wrapper.find("List").prop("removeItem")("123");
    expect(wrapper.find("List").prop("items")).toEqual([
      { id: "ABC", ordinal: 2, isComplete: false, text: "todo 2" },
    ]);
  });
});

describe("Special slide todos", () => {
  beforeEach(() => {
    const mockUuid = require("uuid/v4");
    mockUuid.mockImplementationOnce(() => "UUID_1");
    mockUuid.mockImplementationOnce(() => "UUID_2");
    mockUuid.mockImplementationOnce(() => "UUID_3");
    mockUuid.mockImplementationOnce(() => "UUID_4");
    mockUuid.mockImplementationOnce(() => "UUID_5");
  });

  it('shows the checklist when " check." is typed', () => {
    const wrapper = shallow(<App />);
    wrapper.find("Form").prop("addItem")("c");
    expect(wrapper.find("List").prop("items")).toEqual([
      {
        id: "UUID_1",
        ordinal: 1,
        isComplete: false,
        text: "1 - Ergonomics",
      },
      {
        id: "UUID_2",
        ordinal: 2,
        isComplete: false,
        text: "2 - Distractions",
      },
      {
        id: "UUID_3",
        ordinal: 3,
        isComplete: false,
        text: "3 - Work",
      },
      {
        id: "UUID_4",
        ordinal: 4,
        isComplete: false,
        text: "4 - Regular breaks",
      },
      {
        id: "UUID_5",
        ordinal: 5,
        isComplete: false,
        text: "5 - Mini retros",
      },
    ]);
  });

  it('shows the final slide when " fin." is typed', () => {
    const wrapper = shallow(<App />);
    wrapper.find("Form").prop("addItem")("f");
    expect(wrapper.find("List").prop("items")).toEqual([
      {
        id: "UUID_1",
        ordinal: 1,
        isComplete: false,
        text: "1 - Ergonomics",
      },
      {
        id: "UUID_2",
        ordinal: 2,
        isComplete: false,
        text: "2 - Distractions",
      },
      {
        id: "UUID_3",
        ordinal: 3,
        isComplete: false,
        text: "3 - Work",
      },
      {
        id: "UUID_4",
        ordinal: 4,
        isComplete: false,
        text: "4 - Regular breaks",
      },
      {
        id: "UUID_5",
        ordinal: 5,
        isComplete: false,
        text: "5 - Mini retros",
      },
    ]);
  });
});
