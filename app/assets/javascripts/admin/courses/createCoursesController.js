angular.module('admin-app').controller('CreateCourseController', CreateCourseController)

CreateCourseController.$inject = ['$scope', '$state', 'urls', 'HttpRequest', 'toastr', 'validators'];
function CreateCourseController($scope, $state, urls, HttpRequest, toastr, validators) {
  var $contenido = $('#contenido');
  $contenido.addClass("loaded");

  $scope.createCourse = createCourse;

  function createCourse(form, course) {

    course.pricetag = parseFloat(course.pricetag);

    var url = urls.BASE_API + '/courses';
    var promise = HttpRequest.send("POST", url, course);

    promise.then(function (response) {
      console.log(response);
      toastr.success(response.message);;
      var $contenido = $('#contenido');
      $contenido.addClass("loaded");
    }, function(error){
      toastr.error("Hubo un error");
    });
  }

  /* ----------------------------------- */
  /* FORM VALIDATE */
  /* ----------------------------------- */
  $scope.validationOptions = {
    debug: false,
    rules: {
      title: {
        required: true
      },
      description: {
        required: true
      },
      goal: {
        required: true
      },
      pricetag: {
        required: true,
        regex: validators.decimal
      },
      discount: {
        regex: validators.decimal
      },
      duration: {
        required: true
      },
      background: {
        required: true
      },
      trailer: {
        required: true
      },
      priority: {
        regex: validators.integer
      }
    },
    messages: {
      title: {
        required: 'Dato requerido'
      },
      description: {
        required: 'Dato requerido'
      },
      goal: {
        required: 'Dato requerido'
      },
      pricetag: {
        required: 'Dato requerido',
        regex: 'Valor inválido'
      },
      discount: {
        regex: 'Valor inválido'
      },
      duration: {
        required: 'Dato requerido'
      },
      background: {
        required: 'Dato requerido'
      },
      trailer: {
        required: 'Dato requerido'
      },
      priority: {
        regex: 'Valor inválido'
      }
    },
    highlight: function (element) {
      $(element).parents('div').addClass('error');
      $(element).parents('form').addClass('error');
      $(element).parent('div').addClass('error');
      $(element).addClass('error');
    },
    unhighlight: function (element) {
      $(element).parents('div').removeClass('error');
      $(element).parents('form').removeClass('error');
      $(element).parent('div').removeClass('error');
      $(element).removeClass('error');
    },
    errorElement: "div",
    errorClass:'error error-input',
    validClass:'valid valid-input'
  };
}