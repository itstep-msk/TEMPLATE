if(window.innerWidth < 1000) {
	$(".js-pricing-sections").owlCarousel({
		items: 1,
		margin: 30
	});
}

$(".js-nav-button").on("click", function() {
	$(".nav__content").slideToggle();
})