import React, { useState, useEffect } from "react";
import Wrapper from "../containers/Wrapper";
import Header from "../components/Header";
import TodoForm from "../containers/TodoForm";
import TodoItem from "../components/TodoItem";

function Main() {
  const [items, setItems, setValue] = useState([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('items')) || []
    )
  }, []);

  const addItem = (event) => {
    event.preventDefault();
    const input = event.target.getElementsByClassName('form__input')[0];
    const inputValue = input.value;
    const checked = false;
    const newItems = [
      ...items,
      { id: Math.random(), inputValue, checked }
    ];
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
    input.value = '';
  }

  const removeItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    localStorage.setItem('items', JSON.stringify(newItems));
    setItems(newItems);
  }

  const editItem = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        item.inputValue = prompt('Змінити текст', item.inputValue);
        return item;
      }
      return item;
    });
    localStorage.setItem('items', JSON.stringify(newItems));
    setItems(newItems);
  }

  const itemDone = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        item.checked = !item.checked;
        return item;
      }
      return item;
    });

    localStorage.setItem('items', JSON.stringify(newItems));
    setItems(newItems);
  }

  return (
      <Wrapper>
        <Header text="Todo List with localStorage" />
        <TodoForm addItem={addItem}/>
        <div>
          {items.map(item => (
              <TodoItem
                  key={item.id}
                  inputValue={item.inputValue}
                  id={item.id}
                  isChecked={item.checked}
                  removeItem={removeItem}
                  editItem={editItem}
                  itemDone={itemDone}
              />
          ))}
        </div>
      </Wrapper>
  )
}

export default Main;