;$(document).ready(function($){

	$('.js_doctors_slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: true,
		dots: false,

		responsive: [
			{
				breakpoint: 920,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 806,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			}
		]
	});
});
