import React from "react";

function Index(props) {
  const { checked, onChange } = props;
  return (
      <input type="checkbox" checked={checked} onChange={onChange} />
  )
}

export default Index;