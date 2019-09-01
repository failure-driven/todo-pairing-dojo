import React from "react";
import { shallow } from "enzyme";
import List from "./List";

it("renders an empty unorderd list", () => {
  const wrapper = shallow(<List items={[]} />);
  expect(wrapper.find("ul")).toHaveLength(1);
  expect(wrapper.find("ul Item")).toHaveLength(0);
  expect(wrapper).toMatchInlineSnapshot("<ul />");
});

it("renders a list of items", () => {
  const items = [
    { id: 1, text: "todo item 1" },
    { id: 2, text: "todo item 2" },
  ];
  const wrapper = shallow(<List items={items} />);
  expect(wrapper.find("ul")).toHaveLength(1);
  expect(wrapper.find("ul Item")).toHaveLength(2);
  expect(wrapper).toMatchInlineSnapshot(
    `
    <ul>
      <Item
        item={
          Object {
            "id": 1,
            "text": "todo item 1",
          }
        }
        key="1"
      />
      <Item
        item={
          Object {
            "id": 2,
            "text": "todo item 2",
          }
        }
        key="2"
      />
    </ul>
  `
  );
});
