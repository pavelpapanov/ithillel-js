import React from "react";

export default class Button extends React.Component {
  render() {
    const { text, onClick } = this.props;
    return (
        <button className="button" onClick={onClick}>{text}</button>
    );
  }
}