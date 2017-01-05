angular.module("admin-app").controller("CategoriesController", CategoriesController);

CategoriesController.$inject = ['$scope', 'urls', 'HttpRequest', 'toastr'];

function CategoriesController($scope, urls, HttpRequest, toastr) {
  var url = urls.BASE_API + '/categories'
  var promise = HttpRequest.send("GET", url)

  promise.then(function (response) {
    $scope.categories = response;
    var $contenido = $('#contenido');
    $contenido.addClass("loaded");
  }, function (error) {
    toastr.error("Hubo un error");
  });

}