import React from "react";

function Input(props) {
  const { value, onChange, type } = props;
  return <input value={value} type={type} onChange={onChange} required className="form__input"/>
}

export default Input;