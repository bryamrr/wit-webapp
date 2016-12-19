angular.module("admin-app").config(routes);

routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function routes($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('welcome', {
      url: '/admin',
      abstract: true,
      data: {
        'needAuth': true,
        'title': 'Bienvenido'
      },
      views: {
        dashboard: {
          templateUrl: 'admin/index.html'
        }
      }
    })
    .state('welcome.home', {
      url: '/inicio',
      data: {
        title: 'Inicio'
      },
      views: {
        'content@welcome': {
          templateUrl: 'admin/welcome/home.html',
          controller: 'WelcomeHomeController'
        }
      }
    })

    // Courses
    .state('courses', {
      url: '/admin/cursos',
      abstract: true,
      data: {
        'needAuth': true,
        'title': 'Cursos'
      },
      views: {
        dashboard: {
          templateUrl: 'admin/index.html'
        }
      }
    })
    .state('courses.create', {
      url: '/crear',
      data: {
        title: 'Crear Curso'
      },
      views: {
        'content@courses': {
          templateUrl: 'admin/courses/create.html',
          controller: 'CreateCourseController'
        }
      }
    })
    .state('courses.list', {
      url: '/lista',
      data: {
        title: 'Lista de Cursos'
      },
      views: {
        'content@courses': {
          templateUrl: 'admin/courses/list.html',
          controller: 'CoursesListController'
        }
      }
    })
    .state('courses.edit', {
      url: '/:id/editar',
      data: {
        title: 'Editar Curso'
      },
      views: {
        'content@courses': {
          templateUrl: 'admin/courses/edit.html',
          controller: 'EditCourseController'
        }
      }
    })

    // User
    .state('user', {
      url: '/admin/usuario',
      abstract: true,
      data: {
        'needAuth': true,
        'title': 'Usuario'
      },
      views: {
        dashboard: {
          templateUrl: 'admin/index.html'
        }
      }
    })
    .state('user.create', {
      url: '/crear',
      data: {
        title: 'Crear Usuario'
      },
      views: {
        'content@user': {
          templateUrl: 'admin/user/create.html',
          controller: 'CreateUserController'
        }
      }
    })
    .state('user.list', {
      url: '/lista',
      data: {
        title: 'Lista de Usuarios'
      },
      views: {
        'content@user': {
          templateUrl: 'admin/user/list.html',
          controller: 'UsersListController'
        }
      }
    })
    .state('user.data', {
      url: '/datos',
      data: {
        title: 'Mis datos'
      },
      views: {
        'content@user': {
          templateUrl: 'admin/user/data.html',
          controller: 'UserDataController'
        }
      }
    })


  // default fall back route
  $urlRouterProvider.otherwise('/admin/inicio');

  // enable HTML5 Mode for SEO
  $locationProvider.html5Mode(true);
}