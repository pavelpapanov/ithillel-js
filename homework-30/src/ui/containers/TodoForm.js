import React from "react";
import Input from "../components/form/Input";
import Button from "../components/form/Button";

function TodoForm(props) {
  const { addItem } = props;
  return (
      <form className="form" onSubmit={addItem}>
        <Input />
        <Button text="Відправити" customClass="form__btn" />
      </form>
  )
}

export default TodoForm;