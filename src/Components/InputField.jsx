// input do CPF do formulario

import React from "react";

const InputField = ({ type = "text", placeholder, value, onChange, Icon }) => {
  return (
    <div className="input-field">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {Icon && <Icon className="icon" />}
    </div>
  );
};

export default InputField;
