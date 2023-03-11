'use strict';

function Tasks(_input, _wrapper) {
	const wrapper = document.querySelector(_wrapper);

	this.addItem = (event) => {
		event.preventDefault();
		this.input = event.target.querySelector(_input);
		wrapper.insertAdjacentHTML('beforeend', this.createItem(this.input.value));
		this.input.value = '';
		this.checkStatus();
		this.deleteItem();
	}

	this.createItem = function (description) {
		return `
			<div class="todo-item">
				<input type="checkbox" class="js-todo-item__checkbox">
				<div class="todo-item__description">${description}</div>
				<button class="todo-item__delete js-todo-item__delete">Удалить</button>
			</div>
		`;
	}

	this.checkStatus = function () {
		const checkboxes = document.querySelectorAll('.js-todo-item__checkbox');

		checkboxes.forEach(function (checkbox) {
			checkbox.addEventListener('change', function () {
				if (this.checked) {
					checkbox.closest('.todo-item').classList.add('todo-item--checked');
				} else {
					checkbox.closest('.todo-item').classList.remove('todo-item--checked');
				}
			});
		});
	}

	this.deleteItem = function () {
		const deleteBtn = document.querySelectorAll('.js-todo-item__delete');

		deleteBtn.forEach(function (button) {
			button.addEventListener('click', function () {
				button.closest('.todo-item').remove();
			});
		})
	}
}

const task = new Tasks('.js-form__input', '.js-todos-wrapper');

document.querySelector('.js-form').addEventListener('submit', task.addItem);

