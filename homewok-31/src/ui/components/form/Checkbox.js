import React from "react";

function Checkbox(props) {
  const { checked, onChange } = props;
  return (
      <input type="checkbox" checked={checked} onChange={onChange} />
  )
}

export default Checkbox;