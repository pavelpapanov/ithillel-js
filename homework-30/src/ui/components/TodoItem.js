import React from "react";
import Button from "./form/Button";
import Input from "./form/Input";
import classNames from "classnames";

export default class TodoItem extends React.Component {
  render() {
    const { inputValue, removeItem, editItem, id, isChecked, itemDone } = this.props;
    const onClick = () => {
      removeItem(id);
    }

    const updateItem = () => {
      editItem(id);
    }

    const inputClassName = classNames('todo-item__description', {'todo-item__description--done': isChecked});
    return (
        <div className="todo-item">
          <input
              type="checkbox"
              isChecked={isChecked}
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
}