angular.module("campus-app").config(routes);

routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function routes($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('welcome',{
      url: '/campus',
      abstract: true,
      data: {
        'needAuth': true,
      },
      views: {
        dashboard: {
          templateUrl: 'campus/index.html'
        }
      }
    })
    .state('welcome.home',{
      url: '/inicio',
      data: {
        title: 'Inicio'
      },
      views: {
        'content@welcome': {
          templateUrl: 'campus/welcome/home.html',
          controller: 'WelcomeHomeController'
        }
      }
    })

    // User
    .state('user',{
      url: '/dashboard/user',
      abstract: true,
      data: {
        'needAuth': true,
        'title': 'Mis datos'
      },
      views: {
        dashboard: {
          templateUrl: 'dashboard/index.html'
        }
      }
    })
    .state('user.datos',{
      url: '/datos',
      data: {
        title: 'Datos personales'
      },
      views: {
        'content@user': {
          templateUrl: 'dashboard/user/data.html',
          controller: 'UserDataController'
        }
      }
    })

  // default fall back route
  $urlRouterProvider.otherwise('/campus/inicio');

  // enable HTML5 Mode for SEO
  $locationProvider.html5Mode(true);
}