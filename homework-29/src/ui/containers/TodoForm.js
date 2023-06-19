import React from "react";
import Input from "../components/form/Input";
import Button from "../components/form/Button";

export default class TodoForm extends React.Component {
  render() {
    const { addItem } = this.props;
    return (
        <form className="form" onSubmit={addItem}>
          <Input
              type="text"
              name="value"
              required="true"
              customClass="form__input"
          />
          <Button text="Відправити" customClass="form__btn"/>
        </form>
    )
  }
}