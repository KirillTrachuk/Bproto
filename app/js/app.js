// Import jQuery module (npm i jquery)

import $ from 'jquery'
window.jQuery = $
window.$ = $
import 'slick-carousel'
// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	const progress = document.querySelector('.progress');

	window.addEventListener('scroll', progressBar);

	function progressBar(e) {
		let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
		let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		let per = windowScroll / windowHeight * 100;
		progress.style.width = per + '%'
	}

	gsap.to(".preloader", 2.2, {
		delay: 5,
		top: "-3000px",
		ease: Expo.easeInOut
	})


	$('.slider-for').slick({
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

})
