$(document).on('turbolinks:load', function () {
  $("#shopping-cart").click(function () {
    console.log("shopping-cart");
  });
  $("#team-list").click(function () {
    console.log("team-list");
  });
  $("#settings").click(function () {
    $(".aside-menu").toggleClass("open");
  });
});