import React from "react";
import style from "./index.module.scss"

function Index(props) {
  const { input, meta } = props;

  return (
    <>
      <input name={input.name} value={input.value} type={input.type} onChange={input.onChange} required className={style.input} />
      <span className={style.input__error}>{meta.error}</span>
    </>
  )
}

export default Index;