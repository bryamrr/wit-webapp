angular.module("campus-app").controller("UserDataController", UserDataController);

UserDataController.$inject = ['$scope'];

function UserDataController($scope) {
  console.log("UserDataController");

  var $contenido = $('#contenido');
  $contenido.addClass("loaded");
}