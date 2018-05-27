$(document).ready(function(){

  $(".js-specialists-block").owlCarousel({
  	loop: true,
  	margin: 60
  });

  $(".js-reviews-block").owlCarousel({
  	loop: true,
  	items: 1
  });

  $(".js-team-block").owlCarousel({
  	loop: true,
  	margin: 60
  });



  $(".js-pricing-block").each(function() {
    var tab = $(this).find(".tabs__item");
    var content = $(this).find(".tabs-content");

    tab.on("click", function() {
      var index = $(this).index();

      tab.removeClass("tabs__item--active");
      $(this).addClass("tabs__item--active");

      content.hide();
      content.eq(index).css({"display":"flex"});
    });

    // Эмуляция клика на первый элементы
    tab.first().click();
  })

});