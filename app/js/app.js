// Import jQuery module (npm i jquery)

import $ from 'jquery'
window.jQuery = $
window.$ = $
import 'slick-carousel'
import Swiper from 'swiper';

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


	// $('.slider-for').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	fade: false,
	// 	draggable: true,
	// 	vertical: true,
	// 	infinite: false,
	// 	verticalSwiping: true,
	// 	adaptiveHeight: true,
		
	// });

	let mobileButton = document.querySelector('.bt-menu')
	let mobileMenu = document.querySelector('.mobile_menu')

	mobileButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
    mobileButton.classList.toggle('active')
 })

	let checkSlide = document.querySelector('.slide_check')
	let slideTop
	let slideBottom
	function slideSroll() {
		slideTop = checkSlide.getBoundingClientRect().y
		slideBottom = checkSlide.getBoundingClientRect().y + checkSlide.getBoundingClientRect().height - window.innerHeight
		// console.log(slideTop,slideBottom)
	}
	window.addEventListener('scroll', () => {
		slideSroll()
	})
	console.log(checkSlide)
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