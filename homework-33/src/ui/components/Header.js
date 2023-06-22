import React from "react";

function Header(props) {
  const { text } = props;
  return (
      <h1 className="page__title">{text}</h1>
  )
}

export default Header;