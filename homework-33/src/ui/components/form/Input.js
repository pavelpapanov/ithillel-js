import React from "react";

function Input(props) {
  const { name, value, onChange, type } = props;
  return <input name={name} value={value} type={type} onChange={onChange} required className="form__input"/>
}

export default Input;