'use strict';

const block = document.querySelector('.js--article');
const form = document.querySelector('.js--form');
let commentsButton = document.querySelector('.js--comments');
let commentsBlock = document.querySelector('.js--article-comments');

function getInputValue() {
	let postId = document.querySelector('.js--post-id');
	return +postId.value;
}

form.addEventListener('submit', function (e) {
	e.preventDefault();
	let postIdValue = getInputValue();

	if (postIdValue <= 0 || postIdValue > 100) {
		alert('ID має бути в діапазоні від 1 до 100');
	} else {
		block.innerHTML = "";
		getArticle(postIdValue);
		commentsButton.classList.add('show');
		commentsBlock.innerHTML = "";
		commentsButton.addEventListener('click', function () {
			getArticleComments(postIdValue);
		});
	}
});


function getArticle(id) {
	let articleAPI = `https://jsonplaceholder.typicode.com/posts/${id}`;

	const promise = fetch(articleAPI, {
		method: "GET"
	});

	promise.then(res => res.json().then(data => {
		block.innerHTML = `<p>${data.body}</p>`;
	}));
}

function getArticleComments(id) {
	let result = [];
	let commentsAPI = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;

	const promise = fetch(commentsAPI, {
		method: "GET"
	});

	promise.then(res => res.json().then(data => {
		result = data;
		commentsBlock.innerHTML = `<ul>` + result.map((item) => `<li>${item.body}</li>`).join('') + `</ul>`;
	}));
}