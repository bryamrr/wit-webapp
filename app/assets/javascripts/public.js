$(document).on('turbolinks:load', function () {

  var token = checkCookie("token");
  var role = checkCookie("role");
  var location = window.location;
  var baseUrl = location.protocol + "//" + location.host + "/"

  if (token !== "") {
    if (role === "Admin") {
      window.location.href = baseUrl + "admin/inicio";
    } else {
      window.location.href = baseUrl + "campus/inicio";
    }
  }

  function checkCookie(key, c){
    c = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
    return c ? c.pop() : '';
  }

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
  $(".next").click(function() {
    owl.trigger('owl.next');
  });
  $(".prev").click(function() {
    owl.trigger('owl.prev');
  });

  $(function() {
    $('select').selectize({
      placeholder: "Escoge una provincia..."
    });
  });

  $("#login-button").click(function() {
    var data = {
      nickname: $("#nickname").val(),
      password: $("#password").val()
    };
    data = JSON.stringify(data);

    var location = window.location;
    var baseUrl = location.protocol + "//" + location.host + "/"
    var url = baseUrl + "/api/v1/users/login";

    $.ajax({
      type: "POST",
      url: url,
      data: data,
      success: function (data) {
        putCookie("role", data.role);
        putCookie("nickname", data.nickname);
        putCookie("token", data.token)
        if (data.role === "Admin") {
          window.location.href = baseUrl + "admin/inicio";
        } else {
          window.location.href = baseUrl + "campus/inicio";
        }
      },
      contentType: 'application/json',
      dataType: 'JSON'
    });


    function putCookie(name, value, expires, path, domain) {
      var cookie = name + "=" + escape(value) + ";path=/;";

      if (expires) {
        // If it's a date
        if(expires instanceof Date) {
          // If it isn't a valid date
          if (isNaN(expires.getTime()))
            expires = new Date();
        }
        else
          expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24 * 30);

        cookie += "expires=" + expires.toGMTString() + ";";
      }

      if (path)
        cookie += "path=" + path + ";";
      if (domain)
        cookie += "domain=" + domain + ";";

      document.cookie = cookie;
    }
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