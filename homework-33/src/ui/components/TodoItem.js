import React from "react";
import Button from "./form/Button";
import Checkbox from "./form/Checkbox";
import classNames from "classnames";

function TodoItem(props) {
  const { inputValue, removeItem, editItem, id, isChecked, itemDone } = props;
  const onClick = () => {
    removeItem(id);
  }

  const updateItem = () => {
    editItem(id);
  }

  const inputClassName = classNames('todo-item__description', {'todo-item__description--done': isChecked});
  return (
      <div className="todo-item">
        <Checkbox
            onChange={() => {
              itemDone(id)
            }}
            checked={isChecked}
        />
        <div className={inputClassName}>{inputValue}</div>
        <Button
            text="Редагувати"
            customClass="todo-item__edit"
            onClick={updateItem}
        />
        <Button
            text="Видалити"
            customClass="todo-item__delete"
            onClick={onClick}
        />
      </div>
  )
}

export default TodoItem;