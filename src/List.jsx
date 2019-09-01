import React from "react";
import { array, func } from "prop-types";
import Item from "./Item";

const List = ({ items, toggleComplete }) => (
  <ul>
    {items.map(item => (
      <Item key={item.id} item={item} toggleComplete={toggleComplete} />
    ))}
  </ul>
);

List.propTypes = {
  items: array.isRequired,
  toggleComplete: func.isRequired,
};

export default List;
