"use strict"

// Checking out if it is mobile devise user open web page from.

const UserAgent = {
	mobileRegex: /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i,
	isMobile: function () {
		return this.mobileRegex.test(navigator.userAgent);
	}
};

if (UserAgent.isMobile()) {
	document.body.classList.add('touch');
} else {
	document.body.classList.add('pc');
}

// ================================

const menuIcon = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
menuIcon.addEventListener("click", (e) => {
	menu.classList.toggle("active");
	menuIcon.classList.toggle("active");
})

// ============================= EXAMPLES SLIDER  ===========================

const exSlides = document.querySelectorAll('.examples__image-container');
const exSliderCont = document.querySelector('.examples__cards');
const exPrevBtn = document.querySelector('.examples__button-prev');
const exNextBtn = document.querySelector('.examples__button-next');

let counter = 0;
let buttonClicked = false;

exPrevBtn.addEventListener('click', () => {
	onBtnClick(-1);
});

exNextBtn.addEventListener('click', () => {
	onBtnClick(1);
});

function onBtnClick(increment) {
	if (!buttonClicked) {
		buttonClicked = true;
		counter += increment;
		exSlPosit();
		setTimeout(() => {
			buttonClicked = false;
		}, 500);
	}
}

function exSlPosit() {
	if (counter <= -exSlides.length) {
		counter = 0;
	}
	if (counter >= exSlides.length) {
		counter = 0;
	}
	exSliderCont.style.left = `${counter * 260}px`;
}

exSlides.forEach((exSlide, index) => {
	exSlide.style.transform = `translateX(${index * 260}px)`;
})

// ============================= EDUCATION SLIDER  ===========================

const educationSliderContainer = document.querySelector(".education__cards-container");
const dots = document.querySelectorAll(".education__pagination-dot");

function slide(id) {
	educationSliderContainer.style.left = -292 * id + "px";
	dots.forEach(dot => {
		dot.classList.remove("active");
	})
	dots[id].classList.add("active");
}

let interval = setInterval(autoSlide, 4000);

let imgId = 1;

function autoSlide() {
	if (imgId > dots.length - 1) {
		imgId = 0;
	}
	slide(imgId);
	imgId++;
}

for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener("click", () => {
		clearInterval(interval);
		slide(i);
		imgId = i + 1;
		interval = setInterval(autoSlide, 4000);
	})
}

// ACCORDEON ON ATTESTATION PAGE =============================================

const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
	const currentButton = accordion.querySelector('.accordion__button');
	currentButton.addEventListener('click', () => {
		const text = accordion.querySelector('.accordion__text');
		const height = text.scrollHeight;
		text.style.setProperty('--certification__accordion', `${height}px`);
		accordions.forEach((item) => {
			if (item !== accordion) {
				item.classList.remove('active');
			}
		})
		accordion.classList.toggle('active');
	})
})

// Making smooth scroll

const navLinks = document.querySelectorAll('.nav-link');
const header = document.querySelector('.header');

navLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const attribute = e.currentTarget.getAttribute('href');
		const regex = /#(.*)/;
		const match = attribute.match(regex);
		let result = null; // declare result outside of the if block
		if (match) {
			result = match[1];
		}
		console.log('result:', result);
		const element = document.getElementById(result);
		const headerHeight = header.getBoundingClientRect().height;
		let distance
		if (attribute === 'lots') {
			distance = element.offsetTop;
		} else {
			distance = element.offsetTop - headerHeight;
		}
		window.scrollTo({
			top: distance,
			left: 0,
		});
	})
})
