import React from "react";

function Index(props) {
  const { text } = props;
  return (
      <h1 className="page__title">{text}</h1>
  )
}

export default Index;