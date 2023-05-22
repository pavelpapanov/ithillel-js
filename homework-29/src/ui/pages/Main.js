import React from "react";
import Wrapper from "../containers/Wrapper";
import Header from "../components/Header";
import TodoForm from "../containers/TodoForm";
import TodoItem from "../components/TodoItem";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  componentDidMount() {
    this.setState({
      items: JSON.parse(localStorage.getItem('items')) || []
    })
  }

  addItem(event) {
    event.preventDefault();
    const input = event.target.getElementsByClassName('form__input')[0];
    const inputValue = input.value;
    const newItems = [
      ...this.state.items,
      { id: Math.random(), inputValue }
    ];
    this.setState({
      items: newItems
    })
    localStorage.setItem('items', JSON.stringify(newItems));
    input.value = '';
  }

  removeItem(id) {
    this.setState((state) => {
      const { items } = state;
      const newItems = items.filter(item => item.id !== id);
      localStorage.setItem('items', JSON.stringify(newItems));
      return {
        items: newItems,
      }
    })
  }

  editItem(id) {
    this.setState((state) => {
      const { items } = state;
      const newItems = items.map(item => {
        if (item.id === id) {
          item.inputValue = prompt('Змінити текст', item.inputValue);
          return item;
        }
        return item;
      });
      localStorage.setItem('items', JSON.stringify(newItems));
      return {
        items: newItems,
      }
    })
  }

  render() {
    const { items } = this.state;
    return (
        <Wrapper>
          <Header/>
          <TodoForm addItem={this.addItem}/>
          <div>
            {items.map(item => (
                <TodoItem
                    key={item.id}
                    inputValue={item.inputValue}
                    id={item.id}
                    removeItem={this.removeItem}
                    editItem={this.editItem}
                />
            ))}
          </div>
        </Wrapper>
    )
  }
}