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


  // default fall back route
  $urlRouterProvider.otherwise('/admin/inicio');

  // enable HTML5 Mode for SEO
  $locationProvider.html5Mode(true);
}