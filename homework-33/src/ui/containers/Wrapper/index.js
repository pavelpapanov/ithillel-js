import React from "react";
import style from "./index.module.scss"

function Index(props) {
  return (
      <div className={style.container}>
        {props.children}
      </div>
  )
}

export default Index;