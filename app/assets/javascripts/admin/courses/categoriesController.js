angular.module("admin-app").controller("CategoriesController", CategoriesController);

CategoriesController.$inject = ['$scope'];

function CategoriesController($scope) {
  var $contenido = $('#contenido');
  $contenido.addClass("loaded");
}