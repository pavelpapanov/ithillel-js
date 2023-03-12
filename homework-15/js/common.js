'use strict';

function Tasks(_input, _wrapper) {
	const wrapper = document.querySelector(_wrapper);

	this.addItem = (event) => {
		event.preventDefault();
		this.input = event.target.querySelector(_input);
		wrapper.appendChild(this.createItem(this.input.value));
		this.input.value = '';
	}

	this.createItem = function (description) {
		const newItem = document.createElement('div');
		newItem.classList.add('todo-item');
		newItem.innerHTML = (
			`<input type="checkbox" class="js-todo-item__checkbox">
				<div class="todo-item__description">${description}</div>
				<button class="todo-item__delete js-todo-item__delete">Удалить</button>`
		);
		newItem.querySelector('.js-todo-item__checkbox').addEventListener('click', this.checkStatus);
		newItem.querySelector('.js-todo-item__delete').addEventListener('click', this.deleteItem);
		return newItem;
	}

	this.checkStatus = function (event) {
		if (event.target.checked) {
			event.target.closest('.todo-item').querySelector('.todo-item__description').classList.add('todo-item--checked');
		} else {
			event.target.closest('.todo-item').querySelector('.todo-item__description').classList.remove('todo-item--checked');
		}
	}

	this.deleteItem = function (event) {
		event.target.closest('.todo-item').remove();
	}
}

const task = new Tasks('.js-form__input', '.js-todos-wrapper');

document.querySelector('.js-form').addEventListener('submit', task.addItem);