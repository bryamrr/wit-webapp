angular.module("campus-app").controller("WelcomeHomeController", WelcomeHomeController);

WelcomeHomeController.$inject = ['$scope', 'urls', 'CookieService', 'HttpRequest'];

function WelcomeHomeController($scope, urls, CookieService, HttpRequest) {
  var url = urls.BASE_API + '/users/' + CookieService.read("nickname");
  var promise = HttpRequest.send("GET", url);

  promise.then(function (response) {
    $scope.user = response;
    var $contenido = $('#contenido');
    $contenido.addClass("loaded");
  }, function(error){
    toastr.error("Hubo un error");
  });
}