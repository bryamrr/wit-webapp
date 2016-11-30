angular.module("campus-app").controller("UserPasswordController", UserPasswordController);

UserPasswordController.$inject = ['$scope', 'urls', 'CookieService', 'HttpRequest', 'toastr'];

function UserPasswordController($scope, urls, CookieService, HttpRequest, toastr) {
  $scope.showPassword = showPassword;
  $scope.changePassword = changePassword;

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
    ($scope.passwords[type] === 'password') ? $scope.passwords[type] = 'text' : $scope.passwords[type] = 'password';
  }

  function changePassword(oldPassword, newPassword) {
    var data = {
      old_password: oldPassword,
      new_password: newPassword
    };
    var url = urls.BASE_API + '/users/' + CookieService.read("nickname") + '/change_password';
    var promise = HttpRequest.send("PUT", url, data);

    promise.then(function (response) {
      toastr.success(response.message);
    }, function(error){
      toastr.error(error.message);
    });
  }
}