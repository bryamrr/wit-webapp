angular.module("campus-app").controller("UserDataController", UserDataController);

UserDataController.$inject = ['$scope', '$q', 'urls', 'CookieService', 'HttpRequest'];

function UserDataController($scope, $q, urls, CookieService, HttpRequest) {
  $scope.updateData = updateData;

  $scope.provinceConfig = {
    create: true,
    valueField: 'id',
    labelField: 'name',
    delimiter: '|',
    maxItems: 1,
    onInitialize: function(selectize){
    },
  };

  $scope.genderConfig = {
    create: true,
    valueField: 'name',
    labelField: 'name',
    delimiter: '|',
    maxItems: 1,
    onInitialize: function(selectize){
    },
  };

  $scope.genders = [{name: 'Masculino'}, {name:'Femenino'}]

  var url = urls.BASE_API + '/users/' + CookieService.read("nickname");
  var promise = HttpRequest.send("GET", url);

  var urlProvinces = urls.BASE_API + '/provinces';
  var promiseProvinces = HttpRequest.send("GET", urlProvinces);

  var allPromises = $q.all([promise, promiseProvinces]);

  allPromises.then(function (response) {
    $scope.user = response[0];
    $scope.provinces = response[1];

    $scope.fullname = angular.copy($scope.user.fullname);

    var $contenido = $('#contenido');
    $contenido.addClass("loaded");
  }, function(error){
    toastr.error("Hubo un error");
  });

  function updateData(form, user) {
    // if (!form.validate()) return false;
    console.log(user);

    var url = urls.BASE_API + '/users/' + CookieService.read("nickname");
    var promise = HttpRequest.send("PUT", url, user);

    promise.then(function (response) {
      toastr.success(response.message);
      $scope.isLoading = false;
    }, function(error) {
      toastr.error(error.message);
      $scope.isLoading = false;
    });
  }
}