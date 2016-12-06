angular.module("campus-app").controller("UserDataController", UserDataController);

UserDataController.$inject = ['$scope', '$q', 'urls', 'CookieService', 'HttpRequest'];

function UserDataController($scope, $q, urls, CookieService, HttpRequest) {
  var url = urls.BASE_API + '/users/' + CookieService.read("nickname");
  var promise = HttpRequest.send("GET", url);

  var urlProvinces = urls.BASE_API + '/provinces';
  var promiseProvinces = HttpRequest.send("GET", urlProvinces);

  var allPromises = $q.all([promise, promiseProvinces]);

  allPromises.then(function (response) {
    $scope.user = response[0];
    $scope.provinces = response[1];

    var $contenido = $('#contenido');
    $contenido.addClass("loaded");
    $('#gender').selectize({ width: 100 });
    setTimeout(function () {
      $('#province').selectize();
    }, 0);
  }, function(error){
    toastr.error("Hubo un error");
  });
}