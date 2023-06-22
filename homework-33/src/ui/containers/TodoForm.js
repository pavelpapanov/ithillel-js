import React from "react";
import { Form, Field } from "react-final-form";
import Input from "../components/form/Input";
import Button from "../components/form/Button";

function TodoForm(props) {
  const { addItem } = props;
  const onSubmit = (event) => {
    addItem(event);
  }

  const validateForm = (value) => {
    const errors = {}
    if (value.length < 5) {
      errors.todoitem = "Поле має бути довшим ніж 5 символів";
    }
    return errors
  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={validateForm}
      render={(props) => (
        <form className="form" onSubmit={onSubmit}>
          <Field
            name="todoitem"
          >
            {(props, meta) => (
              <Input
                {...props.input}
                type="text"
              />
            )}
          </Field>
          <Button text="Відправити" customClass="form__btn"/>
        </form>
      )}
    />
  )
}

export default TodoForm;