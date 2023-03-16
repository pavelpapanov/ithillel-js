'use strict';

const prevButton = document.querySelector('.js-button-prev');
const nextButton = document.querySelector('.js-button-next');

let slideIndex = 1;

showSlides(slideIndex);

nextButton.addEventListener('click', function nextSlide() {
	showSlides(slideIndex += 1);
});

prevButton.addEventListener('click', function prevSlide() {
	showSlides(slideIndex -= 1);
});

function showSlides(n) {
	let slides = document.querySelectorAll(".js-slider__item");

	if (slideIndex === 1) {
		document.querySelector('.js-button-prev').classList.add('hidden');
	} else {
		document.querySelector('.js-button-prev').classList.remove('hidden');
	}

	if (slideIndex === slides.length) {
		document.querySelector('.js-button-next').classList.add('hidden');
	} else {
		document.querySelector('.js-button-next').classList.remove('hidden');
	}

	if (n > slides.length) {
		slideIndex = 1
	}

	if (n < 1) {
		slideIndex = slides.length
	}

	for (let slide of slides) {
		slide.style.display = "none";
	}

	slides[slideIndex - 1].style.display = "block";
}