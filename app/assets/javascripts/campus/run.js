angular
  .module('campus-app')
  .run(runBlock);

runBlock.$inject = ['$rootScope', '$state', 'AuthService'];
function runBlock($rootScope, $state, AuthService) {
  // $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
  //   if(!AuthService.isAuthenticated() && toState.data.needAuth) {
  //     event.preventDefault();
  //     $state.go('auth.login');
  //   }
  //   if(AuthService.isAuthenticated() && !toState.data.needAuth) {
  //     event.preventDefault();
  //     $state.go('user.datos');
  //   }
  // });

  // $rootScope.$on('$stateChangeSuccess', function (event, toState) {
  //   if(toState.data && toState.data.title){
  //     $rootScope.title = toState.data.title;
  //   }
  // });

  $rootScope.$state = $state;
}