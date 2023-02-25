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

const swiperExamples = new Swiper('.examples__cards-container', {
	loop: true,
	speed: 600,
	grabCursor: true,
	slidesPerView: 'auto',
	loopPreventsSlide: false,
	loopedSlidesLimit: false,
	loopedSlides: 5,
	observer: true,
	spaceBetween: 38,
	preventInteractionOnTransition: true,
	navigation: {
		nextEl: '.examples__button-next',
		prevEl: '.examples__button-prev',
	},
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	mousewheel: true,
});

// ================================

const menuIcon = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
menuIcon.addEventListener("click", (e) => {
	menu.classList.toggle("active");
	menuIcon.classList.toggle("active");
})

// ============================= EDUCATION SLIDER  ===========================

// const educationSliderContainer = document.querySelector(".education__cards-container");
// const dots = document.querySelectorAll(".education__pagination-dot");

// function slide(id) {
// 	educationSliderContainer.style.left = -292 * id + "px";
// 	dots.forEach(dot => {
// 		dot.classList.remove("active");
// 	})
// 	dots[id].classList.add("active");
// }

// let interval = setInterval(autoSlide, 4000);

// let imgId = 1;

// function autoSlide() {
// 	if (imgId > dots.length - 1) {
// 		imgId = 0;
// 	}
// 	slide(imgId);
// 	imgId++;
// }

// for (let i = 0; i < dots.length; i++) {
// 	dots[i].addEventListener("click", () => {
// 		clearInterval(interval);
// 		slide(i);
// 		imgId = i + 1;
// 		interval = setInterval(autoSlide, 4000);
// 	})
// }

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

// Scroll to exact place





// Adding background color for index header after start scrolling

const indexContainer = document.querySelector('.header_index .container');

if (window.location.pathname === '/index.html') {
	window.addEventListener('scroll', () => {
		const offset = window.scrollY;
		if (offset > 0) {
			indexContainer.classList.add('container_index');
		} else {
			indexContainer.classList.remove('container_index');
		}
	})
}

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
