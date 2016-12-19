angular.module("admin-app").controller("UsersListController", UsersListController);

UsersListController.$inject = ['$scope', '$state', 'urls', 'HttpRequest', 'toastr', 'validators', 'SweetAlert'];

function UsersListController($scope, $state, urls, HttpRequest, toastr, validators, SweetAlert) {
  $scope.userBlock = userBlock;

  var url = urls.BASE_API + '/users';
  var promise = HttpRequest.send("GET", url);

  promise.then(function (response) {
    $scope.users = response;
    var $contenido = $('#contenido');
    $contenido.addClass("loaded");
  }, function(error){
    toastr.error("Hubo un error");
  });

  function userBlock(id, $event){
    SweetAlert.swal({
      title: "Estás seguro?",
      text: "Esta acción es irreversible!",
      type: "warning",
      showCancelButton: true,
      cancelButtonClass: "button-ln",
      confirmButtonClass: "button-bg primary",
      confirmButtonText: "Si, eliminarlo!",
      cancelButtonText: "No, cancelar!",
      closeOnConfirm: false,
      closeOnCancel: false
    }, function(isConfirm){
      if (isConfirm) {
        var url = urls.BASE_API + '/users/' + id;
        var promise_delete = HttpRequest.send("DELETE", url);
        promise_delete.then(function(response) {
          SweetAlert.swal("Eliminado!", "Se eliminó correctamente", "success");
          $state.reload();
        }, function(error) {
          toastr.error("Hubo un error");
        });
      } else {
        SweetAlert.swal("Cancelado", "Se canceló la acción", "error");
      }
    });
  }
}