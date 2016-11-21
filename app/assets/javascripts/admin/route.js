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


  // default fall back route
  $urlRouterProvider.otherwise('/admin/inicio');

  // enable HTML5 Mode for SEO
  $locationProvider.html5Mode(true);
}