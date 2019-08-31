import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("renders the app", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchInlineSnapshot(`
    <div>
      <h1>
        Todo - pairing dojo
      </h1>
    </div>
  `);
});
