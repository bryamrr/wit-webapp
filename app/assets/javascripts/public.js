$(document).on('turbolinks:load', function () {
  $("#typed").typed({
    stringsElement: $('#typed-strings'),
    startDelay: 300,
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
  });

  var owl = $("#owl-demo");

    owl.owlCarousel({
      items : 4,
      itemsDesktop : [1000,3],
      itemsDesktopSmall : [900,2],
      itemsTablet: [600,1],
      itemsMobile : false
    });

    // Custom Navigation Events
    $(".next").click(function(){
      owl.trigger('owl.next');
    });
    $(".prev").click(function(){
      owl.trigger('owl.prev');
    });
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 74) {
    $("header").addClass("scrolled");
  } else {
    $("header").removeClass("scrolled");
  }
});