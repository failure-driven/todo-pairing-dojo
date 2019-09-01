import React from "react";
import { array } from "prop-types";
import Item from "./Item";

const List = ({ items }) => (
  <ul>
    {items.map(item => (
      <Item key={item.id} item={item} />
    ))}
  </ul>
);

List.propTypes = {
  items: array.isRequired,
};

export default List;
