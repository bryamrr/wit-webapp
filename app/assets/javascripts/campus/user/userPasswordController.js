angular.module("campus-app").controller("UserPasswordController", UserPasswordController);

UserPasswordController.$inject = ['$scope', 'urls', 'CookieService', 'HttpRequest'];

function UserPasswordController($scope, urls, CookieService, HttpRequest) {
  $scope.showPassword = showPassword;

  $scope.passwords = {
    'old': 'password',
    'new': 'password',
    'repeat': 'password'
  }

  var url = urls.BASE_API + '/users/' + CookieService.read("nickname");
  var promise = HttpRequest.send("GET", url);

  promise.then(function (response) {
    console.log(response);
    $scope.user = response;
    var $contenido = $('#contenido');
    $contenido.addClass("loaded");
  }, function(error){
    // MessagesService.display(error.errors, "error");
    console.log(error);
  });

  function showPassword(type) {
    console.log("HOLA");
    ($scope.passwords[type] === 'password') ? $scope.passwords[type] = 'text' : $scope.passwords[type] = 'password';
  }
}