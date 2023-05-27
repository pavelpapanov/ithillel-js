import React from "react";
import Button from "./Button";

export default class ListItem extends React.Component {
  render() {
    const { id, icon, count, onClick, customClass } = this.props;
    return (
        <li className={customClass} key={id}>{icon} - {count} <Button text="Проголосувати" onClick={onClick}/></li>
    );
  }
}