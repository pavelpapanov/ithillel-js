import React from "react";

function Link(props) {
  const { to, children } = props;
  return <a href={to}>{children}</a>;
}

export default Link;