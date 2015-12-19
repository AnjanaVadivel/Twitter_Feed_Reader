
(function () {
    'use strict';
    angular
           .module('app')
           .controller('devicebackCtrl', devicebackCtrl);
    function devicebackCtrl($rootScope, UserService, streamdetails) {
        $rootScope.user = null;
        $rootScope.allUsers = [];
        $rootScope.reqstream1 = null;

        initController();

        $rootScope.sortType = 'name';
        $rootScope.searchDevice = '';
        $rootScope.events = [
      {
          name: 'JasmineWSD', visibility: 'public', apikey: 'euhdjkadkla571313931', streams: 10, triggers: 2, locations: 1,
          s1: 'MonoPageCount', s2: 'TotalPageCount', s3: 'Toner(Black)', s4: 'Toner(Yellow)', s5: 'Toner(Cyan)', s6: 'Toner(Magenta)',
          s7: 'ColorPageCount', s8: 'DeviceStatus', s9: 'TonerValues(Black,Yellow,Cyan,Magenta)', s10: 'PrintJobCount'
      },
      {
          name: 'Vanilla', visibility: 'private', apikey: 'euhdjkadkla571313931', streams: 10, triggers: 0, locations: 0,
          s1: 'MonoPageCount', s2: 'TotalPageCount', s3: 'Toner(Black)', s4: 'Toner(Yellow)', s5: 'Toner(Cyan)', s6: 'Toner(Magenta)',
          s7: 'ColorPageCount', s8: 'DeviceStatus', s9: 'TonerValues(Black,Yellow,Cyan,Magenta)', s10: 'PrintJobCount'
      },
      {
          name: 'Lettuce', visibility: 'private', apikey: 'kdmakledfmekemdfk737787', streams: 10, triggers: 5, locations: 2,
          s1: 'MonoPageCount', s2: 'TotalPageCount', s3: 'Toner(Black)', s4: 'Toner(Yellow)', s5: 'Toner(Cyan)', s6: 'Toner(Magenta)',
          s7: 'ColorPageCount', s8: 'DeviceStatus', s9: 'TonerValues(Black,Yellow,Cyan,Magenta)', s10: 'PrintJobCount'
      },
      {
          name: 'Godzilla', visibility: 'private', apikey: 'dkdjjjjkakldfkjfk6428', streams: 10, triggers: 7, locations: 4,
          s1: 'MonoPageCount', s2: 'TotalPageCount', s3: 'Toner(Black)', s4: 'Toner(Yellow)', s5: 'Toner(Cyan)', s6: 'Toner(Magenta)',
          s7: 'ColorPageCount', s8: 'DeviceStatus', s9: 'TonerValues(Black,Yellow,Cyan,Magenta)', s10: 'PrintJobCount'
      },
      {
          name: 'Butterscotch', visibility: 'public', apikey: 'flakjlafml8391892209', streams: 10, triggers: 0, locations: 1,
          s1: 'MonoPageCount', s2: 'TotalPageCount', s3: 'Toner(Black)', s4: 'Toner(Yellow)', s5: 'Toner(Cyan)', s6: 'Toner(Magenta)',
          s7: 'ColorPageCount', s8: 'DeviceStatus', s9: 'TonerValues(Black,Yellow,Cyan,Magenta)', s10: 'PrintJobCount'
      },
      {
          name: 'Cherry', visibility: 'private', apikey: 'afafkdkfadfkalfk909', streams: 10, triggers: 2, locations: 4,
          s1: 'MonoPageCount', s2: 'TotalPageCount', s3: 'Toner(Black)', s4: 'Toner(Yellow)', s5: 'Toner(Cyan)', s6: 'Toner(Magenta)',
          s7: 'ColorPageCount', s8: 'DeviceStatus', s9: 'TonerValues(Black,Yellow,Cyan,Magenta)', s10: 'PrintJobCount'
      }];

          
        function initController() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                 .then(function (user) {
                     $rootScope.user = user;
                 });
        };

        $rootScope.reqstream1 = $rootScope.selected;


        //$rootScope.reqstream1 = streamdetails.getProperty();

        //$rootScope.deviceinfo = function () {
        //    //$rootScope.reqstream1 = streamdetails.getProperty();
        //    $rootScope.reqstream1 = reqstream;
        //};


    };

    devicebackCtrl.$inject = ['$rootScope', 'UserService', 'streamdetails'];

})();




