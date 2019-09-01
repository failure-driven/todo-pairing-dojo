import React from "react";
import { array } from "prop-types";
import Item from "./Item";

const List = props => {
  const { items } = props;

  return (
    <ul>
      {items.map(item => (
        <Item key={item.id} item={item} {...props} />
      ))}
    </ul>
  );
};

List.propTypes = {
  items: array.isRequired,
};

export default List;
