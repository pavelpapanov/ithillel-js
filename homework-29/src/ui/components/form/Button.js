import React from "react";
import cx from "classnames";

export default class Button extends React.Component {
  render() {
    const { text, customClass, onClick } = this.props;
    const className = cx(
        'form__btn',
        {
          [customClass]: customClass
        }
    )
    return (
        <button className={customClass} onClick={onClick}>{text}</button>
    )
  }
}