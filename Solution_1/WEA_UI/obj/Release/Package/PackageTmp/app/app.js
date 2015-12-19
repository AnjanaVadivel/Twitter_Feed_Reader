
(function () {
    angular
        .module('app', ['ngRoute', 'ngCookies', 'highcharts-ng'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm'
            })

            .when('/devices', {
                controller: 'mainController',
                templateUrl: 'devices/devices.view.html',
            })

            .when('/devicedetails', {

                controller: 'mainCtrl',
                templateUrl: 'devicedetails/devicedetails.view.html',
            })

            .when('/graph1', {
                controller: 'mainCtrl',
                templateUrl: 'graph/graph1.view.html',
            })

           .when('/graph2', {
             controller: 'mainCtrl',
             templateUrl: 'graph/graph2.view.html',
           })

            .when('/graph3', {
             controller: 'mainCtrl',
             templateUrl: 'graph/graph3.view.html',
            })

            .when('/graph4', {
             controller: 'mainCtrl',
             templateUrl: 'graph/graph4.view.html',
            })

            .when('/graph5', {
             controller: 'mainCtrl',
             templateUrl: 'graph/graph5.view.html',
            })

            .when('/graph6', {
             controller: 'mainCtrl',
             templateUrl: 'graph/graph6.view.html',
            })

            .when('/graph7', {
             controller: 'mainCtrl',
             templateUrl: 'graph/graph7.view.html',
            })

            .when('/table8', {
                 controller: 'mainCtrl',
                 templateUrl: 'graph/table8.view.html',
             })

             .when('/table9', {
                 controller: 'mainCtrl',
                 templateUrl: 'graph/table9.view.html',
             })

            .when('/graph10', {
             controller: 'mainCtrl',
             templateUrl: 'graph/graph10.view.html',
            })

            .when('/table11', {
                controller: 'mainCtrl',
                templateUrl: 'graph/table11.view.html',
            })

            .when('/deviceback', {
                controller: 'devicebackCtrl',
                templateUrl: 'deviceback/deviceback.view.html',
            })

            .otherwise({ redirectTo: '/login' });
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }
})();














