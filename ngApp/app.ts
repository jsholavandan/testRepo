namespace testloginapp {

    angular.module('testloginapp', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: testloginapp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: testloginapp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('register', {
              url:'/register',
              templateUrl:'/ngApp/views/register.html',
              controller: testloginapp.Controllers.HomeController,
              controllerAs:'controller'
            })
            .state('main', {
                url: '/main',
                templateUrl: '/ngApp/views/main.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
