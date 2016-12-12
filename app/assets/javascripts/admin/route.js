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

    // Catalog
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


  // default fall back route
  $urlRouterProvider.otherwise('/admin/inicio');

  // enable HTML5 Mode for SEO
  $locationProvider.html5Mode(true);
}