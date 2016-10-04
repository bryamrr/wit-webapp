$(document).ready(function () {
  $("#typed").typed({
    stringsElement: $('#typed-strings'),
    startDelay: 300,
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
  });
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 74) {
    $(".public-home header").addClass("scrolled");
  } else {
    $(".public-home header").removeClass("scrolled");
  }
});