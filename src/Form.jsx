import React, { useState } from "react";
import { func } from "prop-types";

const Form = ({ addItem }) => {
  const [value, setValue] = useState("");

  const handleOnChange = event => {
    setValue(event.target.value);
  };

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      addItem(value);
    }
  };

  return (
    <input
      autoFocus
      value={value}
      onChange={handleOnChange}
      onKeyDown={handleKeyDown}
    />
  );
};

Form.propTypes = {
  addItem: func.isRequired,
};

export default Form;
