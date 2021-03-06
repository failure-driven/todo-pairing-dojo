import React from "react";
import { func, shape, string } from "prop-types";

const Item = ({
  item: { id, text, isComplete },
  toggleComplete,
  removeItem,
}) => (
  <li className={isComplete ? "completed" : ""}>
    <input type='checkbox' onClick={() => toggleComplete(id)} />
    <span className='checkmark' onClick={() => toggleComplete(id)}></span>
    <span>{text}</span>
    <button onClick={() => removeItem(id)} />
  </li>
);

Item.propTypes = {
  item: shape({
    text: string.isRequired,
  }),
  toggleComplete: func.isRequired,
  removeItem: func.isRequired,
};

export default Item;
