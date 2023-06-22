import React from "react";
import { Form, Field } from "react-final-form";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import style from "./index.module.scss";

function Index(props) {
  const { addItem } = props;

  const validateForm = (values) => {
    const errors = {};

    if (values.todoitem && values.todoitem.length < 5) {
      errors.todoitem = 'Поле має бути довшим ніж 5 символів';
    }

    return errors
  }

  return (
    <Form
      onSubmit={addItem}
      initialValues={{ employed: true }}
      validate={validateForm}
      render={({ handleSubmit, form, valid, pristine, reset }) => (
        <form
          className={style.form}
          onSubmit={event => {
            handleSubmit(event)
            form.reset()
          }}
        >
          <Field
            name="todoitem"
            component={Input}
            type="text"
          />
          <Button text="Відправити" type="submit" customClass={style.btn} disabled={!valid}/>
        </form>
      )}
    />
  )
}

export default Index;