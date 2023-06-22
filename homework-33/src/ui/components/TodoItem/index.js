import React from "react";
import Button from "../Form/Button";
import Checkbox from "../Form/Checkbox";
import classNames from "classnames";
import style from "./index.module.scss";

function Index(props) {
  const { inputValue, removeItem, editItem, id, isChecked, itemDone } = props;
  const onClick = () => {
    removeItem(id);
  }

  const updateItem = () => {
    editItem(id);
  }

  const inputClassName = classNames(style['todo-item__description'], { [style['todo-item__description--done']]: isChecked });
  return (
    <div className={style['todo-item']}>
      <Checkbox
        onChange={() => {
          itemDone(id)
        }}
        checked={isChecked}
      />
      <div className={inputClassName}>{inputValue}</div>
      <Button
        text="Редагувати"
        customClass={style['todo-item__edit']}
        onClick={updateItem}
      />
      <Button
        text="Видалити"
        customClass={style['todo-item__delete']}
        onClick={onClick}
      />
    </div>
  )
}

export default Index;