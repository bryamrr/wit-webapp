angular.module("campus-app").controller("CatalogController", CatalogController);

CatalogController.$inject = ['$scope'];

function CatalogController($scope) {
  console.log("CatalogController");
}