angular.module('campus-app').controller('DashboardController', DashboardController)

DashboardController.$inject = ['$scope', '$state', 'CookieService'];
function DashboardController($scope, $state,  CookieService) {
  $scope.nickname = CookieService.read('nickname');
  $scope.role = CookieService.read('role');
  $scope.first_entry = CookieService.read('first_entry');

  if ($scope.first_entry === 'false') {
    $scope.modalOpened = true;
  }
}