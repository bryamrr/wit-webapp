angular.module("admin-app").controller("WelcomeHomeController", WelcomeHomeController);

WelcomeHomeController.$inject = ['$scope'];

function WelcomeHomeController($scope) {
  console.log("WelcomeHomeController");
}