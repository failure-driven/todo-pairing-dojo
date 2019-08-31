import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("renders a title a form and a list", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("h1").text()).toEqual("Todo - pairing dojo");
  expect(wrapper.find("Form")).toHaveLength(1);
  expect(wrapper.find("List")).toHaveLength(1);
  expect(wrapper).toMatchInlineSnapshot(`
    <div>
      <h1>
        Todo - pairing dojo
      </h1>
      <Form
        addItem={[Function]}
      />
      <List />
    </div>
  `);
});
