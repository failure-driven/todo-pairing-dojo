import React from "react";
import { shape, string } from "prop-types";

const Item = ({ item: { text } }) => <li>{text}</li>;

Item.propTypes = {
  item: shape({
    text: string.isRequired,
  }),
};

export default Item;
