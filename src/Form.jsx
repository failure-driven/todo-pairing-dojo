import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");

  const handleOnChange = event => {
    setValue(event.target.value);
  };
  return <input autoFocus value={value} onChange={handleOnChange} />;
};

export default Form;
