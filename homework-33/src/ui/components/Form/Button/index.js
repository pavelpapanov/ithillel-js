import React from "react";
import cx from "classnames";

function Index(props) {
  const { text, customClass, onClick, type, disabled} = props;
  const className = cx(
      'form__btn',
      {
        [customClass]: customClass
      }
  )
  return (
      <button className={className} type={type ? type : 'button'} onClick={onClick} disabled={disabled}>{text}</button>
  )
}

export default Index;