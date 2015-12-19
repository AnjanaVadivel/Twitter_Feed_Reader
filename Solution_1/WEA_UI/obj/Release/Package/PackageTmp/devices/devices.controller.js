
//var app = angular.module('app', []);

//app.factory('eventsFactory', ['$http', function ($http) {
//    var eventsFactory = {
//        eventDetails: function () {
//            return $http(
//            {
//                url: "data/device.json",
//                method: "GET",
//            })
//            .then(function (response) {
//                return response.data;
//            });
//        }
//    };
//    return eventsFactory;
//}]);

//app.controller('mainController', ['$rootScope', 'eventsFactory', function ($rootScope, eventsFactory) {
//    var random = eventsFactory.eventDetails();
//    random.then(function (data) {
//        $rootScope.eventDetails = data;
//        console.log(data);
//    });

//    $rootScope.selected = {};
//    $rootScope.select = function (event) {
//    $rootScope.selected = event;            
//    };
//}]);

(function () {
    'use strict';
    angular
           .module('app')
           .controller('mainController', mainController)
           .service('streamdetails', streamdetails);

    mainController.$inject = ['$rootScope', 'UserService', 'streamdetails'];

    function mainController($rootScope, UserService, streamdetails) {
        $rootScope.user = null;
        $rootScope.allUsers = [];

        initController();

        $rootScope.sortType = 'name';
        $rootScope.searchDevice = '';
        $rootScope.events = [
      {
          name: 'JasmineWSD', visibility: 'public', apikey: 'FBA39750-18BE-4D20-9962-788ED21C618E', streams: 10, triggers: 2, locations: 1,
          s1: 'MonoPageCount', s2: 'TotalPageCount', s3: 'Toner(Black)', s4: 'Toner(Yellow)', s5: 'Toner(Cyan)', s6: 'Toner(Magenta)',
          s7: 'ColorPageCount', s8: 'DeviceStatus', s9: 'TonerValues(Black,Yellow,Cyan,Magenta)', s10: 'PrintJobCount'
      },
      {
          name: 'Vanilla', visibility: 'private', apikey: 'CE263D09-1764-4180-B629-8814B8424B19', streams: 10, triggers: 0, locations: 0,
          s1: 'MonoPageCount', s2: 'TotalPageCount', s3: 'Toner(Black)', s4: 'Toner(Yellow)', s5: 'Toner(Cyan)', s6: 'Toner(Magenta)',
          s7: 'ColorPageCount', s8: 'DeviceStatus', s9: 'TonerValues(Black,Yellow,Cyan,Magenta)', s10: 'PrintJobCount'
      },
      {
          name: 'Lettuce', visibility: 'private', apikey: 'E095CCA8-3F2A-491B-8A49-0216DC349D6C', streams: 10, triggers: 5, locations: 2,
          s1: 'MonoPageCount', s2: 'TotalPageCount', s3: 'Toner(Black)', s4: 'Toner(Yellow)', s5: 'Toner(Cyan)', s6: 'Toner(Magenta)',
          s7: 'ColorPageCount', s8: 'DeviceStatus', s9: 'TonerValues(Black,Yellow,Cyan,Magenta)', s10: 'PrintJobCount'
      },
      {
          name: 'Godzilla', visibility: 'private', apikey: '49F1FB98-B5AC-4EBE-B161-8042F1B17CD7', streams: 10, triggers: 7, locations: 4,
          s1: 'MonoPageCount', s2: 'TotalPageCount', s3: 'Toner(Black)', s4: 'Toner(Yellow)', s5: 'Toner(Cyan)', s6: 'Toner(Magenta)',
          s7: 'ColorPageCount', s8: 'DeviceStatus', s9: 'TonerValues(Black,Yellow,Cyan,Magenta)', s10: 'PrintJobCount'
      },
      {
          name: 'Butterscotch', visibility: 'public', apikey: 'A194936C-4126-4EA0-A77F-C2A21DE31E7B', streams: 10, triggers: 0, locations: 1,
          s1: 'MonoPageCount', s2: 'TotalPageCount', s3: 'Toner(Black)', s4: 'Toner(Yellow)', s5: 'Toner(Cyan)', s6: 'Toner(Magenta)',
          s7: 'ColorPageCount', s8: 'DeviceStatus', s9: 'TonerValues(Black,Yellow,Cyan,Magenta)', s10: 'PrintJobCount'
      },
      {
          name: 'Cherry', visibility: 'private', apikey: 'E89D87A2-AB2D-4BB2-9FD9-1449219FCF28', streams: 10, triggers: 2, locations: 4,
          s1: 'MonoPageCount', s2: 'TotalPageCount', s3: 'Toner(Black)', s4: 'Toner(Yellow)', s5: 'Toner(Cyan)', s6: 'Toner(Magenta)',
          s7: 'ColorPageCount', s8: 'DeviceStatus', s9: 'TonerValues(Black,Yellow,Cyan,Magenta)', s10: 'PrintJobCount'
      }
        ];

        $rootScope.selected = {};
        $rootScope.visibility = null;

        $rootScope.select = function (event) {
            $rootScope.selected = event;
            //cookieini();
        };

        function cookieini() {
            $cookieStore.put('selected event', $rootScope.selected); /*added this cookieStore functionality*/
        };

        $rootScope.var = true;       

        $rootScope.eh = false;
        $rootScope.togglescreen = function () {
            $rootScope.eh = true;
        };

        $rootScope.default = false;
        function initController() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                 .then(function (user) {
                     if (user == null)
                         $rootScope.default = true;
                     else
                         $rootScope.user = user;
                 });
        };       

        $rootScope.selectedstream = null;
        $rootScope.selectdevice = function (stream) {
            streamdetails.setProperty(stream);
            //$rootScope.selectedstream = streamdetails.getProperty();
        };
    };

     function streamdetails() {
        var selectedstream = {};
        return {
            getProperty: function () {
                return selectedstream;
            },
            setProperty: function (value) {
                selectedstream = value;
            }
        };
    };

    //function userdetails() {
    //    $rootScope.useronline = 'Anjana';
    //    return {
    //        getProperty: function () {
    //            UserService.GetByUsername($rootScope.globals.currentUser.username)
    //                .then(function (user) {
    //                    $rootScope.useronline = user;
    //                })
    //            return $rootScope.useronline;
    //        }
    //    };
    //};

    //angular.injector(['ng', 'app']).invoke(function (userdetails) {
    //    alert(userdetails.getProperty());
    //});      

    //mainController.$inject = ['$rootScope', 'UserService', 'streamdetails'];
})();













