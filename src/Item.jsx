import React from "react";
import { func, shape, string } from "prop-types";

const Item = ({ item: { text } }) => <li>{text}</li>;

Item.propTypes = {
  item: shape({
    text: string.isRequired,
  }),
  toggleComplete: func.isRequired,
};

export default Item;
