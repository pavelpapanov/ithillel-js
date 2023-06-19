import React from "react";
import Button from "./form/Button";

export default class TodoItem extends React.Component {
  render() {
    const { inputValue, removeItem, editItem, id } = this.props;
    const onClick = () => {
      removeItem(id);
    }

    const updateItem = () => {
      editItem(id);
    }

    return (
        <div className="todo-item">
          <div className="todo-item__description">{inputValue}</div>
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