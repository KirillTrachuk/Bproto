// Import jQuery module (npm i jquery)

import $ from 'jquery'
window.jQuery = $
window.$ = $
import 'slick-carousel'
// import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	const progress = document.querySelector('.progress');

	window.addEventListener('scroll', progressBar);

	function progressBar(e) {
		let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
		let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		let per = windowScroll / windowHeight * 100;
		progress.style.width = per + '%'
		// console.log(windowHeight)
	}

	gsap.to(".preloader", 3.2, {
		delay: 6,
		top: "-3000px",
		ease: Expo.easeInOut
	})


	// slider
	let slider = $('.slider-for')
	let currentSlideNumber = document.querySelector('.current')
	let totalSlides = document.querySelector('.total')
	let sliderProgress = document.querySelector('.slider-progress')
	let curenNumber
	let progressHeight
	if (window.innerWidth > 480) {
		slider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			draggable: true,
			vertical: true,
			infinite: false,
			verticalSwiping: true,
			adaptiveHeight: true,
		});

		slider.on('wheel', (function (e) {
			e.preventDefault();
			if (e.originalEvent.deltaY < 0) {
				$(this).slick('slickNext');
			} else {
				$(this).slick('slickPrev');
			}
		}));
	
		slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			curenNumber = nextSlide + 1
			progressHeight = (100 / slick.slideCount) * curenNumber
			sliderProgress.style.height = `${progressHeight}%`
			currentSlideNumber.innerHTML = `0${curenNumber}`
			totalSlides.innerHTML = `0${slick.slideCount}`
		});
	}
	

	

	//mobile menu
	let mobileButton = document.querySelector('.bt-menu')
	let mobileMenu = document.querySelector('.mobile_menu')

	mobileButton.addEventListener('click', () => {
		mobileMenu.classList.toggle('active')
		mobileButton.classList.toggle('active')
	})
})
// const swiper = new Swiper('.swiper-container', {
// 	// Optional parameters
// 	direction: 'vertical',
// 	// // loop: true,
// 	// mousewheel: true,
// 	// slidesPerView: 1,
// 	// simulateTouch: false,

// 	// If we need pagination
// 	pagination: {
// 	  el: '.swiper-pagination',
// 	  type: 'progressbar',
// 	},
// 	// scrollbar: {
// 	// 	el: '.swiper-scrollbar',
// 	// 	draggable: true,
// 	//   },
// });

// swiper.on('transitionEnd', () =>{
// 	console.log('Индекс', + swiper.realIndex);
// 	index = swiper.realIndex + 1;
// 	document.getElementById('fraction').innerHTML = index;

//    });