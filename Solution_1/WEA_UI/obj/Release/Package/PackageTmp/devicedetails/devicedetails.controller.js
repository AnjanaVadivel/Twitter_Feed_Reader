
(function () {
    'use strict';
    angular
           .module('app')
           .controller('mainCtrl', mainCtrl);
    function mainCtrl($rootScope, UserService, streamdetails) {
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


        $rootScope.selectedstream = null;
        $rootScope.select = function (stream) {
            $rootScope.selectedstream = stream;
        };

        $rootScope.devicestatus = [
            { timestamp: ' 07/06/2015 22:24:50.0 UTC', value: 'online' },
            { timestamp: '07/06/2015 18:14:24.0 UTC', value: 'offline' },
            { timestamp: '06/18/2015 18:33:02.0 UTC', value: 'online' },
            { timestamp: '06/16/2015 00:05:56.0 UTC', value: 'offline' },
            { timestamp: '06/12/2015 07:09:21.0 UTC', value: 'PaperJam' },
            { timestamp: '06/12/2015 07:06:43.0 UTC', value: 'online' },
            { timestamp: '06/16/2015 00:05:56.0 UTC', value: 'offline' },
            { timestamp: '06/12/2015 05:48:05.0 UTC', value: 'online' },
            { timestamp: '06/11/2015 23:53:37.0 UTC', value: 'Online' },
            { timestamp: '06/12/2015 01:26:30.0 UTC', value: 'Online' },
            { timestamp: '06/11/2015 22:39:45.0 UTC', value: 'offline' }
        ];

        $rootScope.tonervalues = [
        { timestamp: '07/06/2015 22:26:05.0 UTC', value: 'Black:88,Yellow:78,Cyan:78,Magenta:78' },
        { timestamp: '07/06/2015 18:34:45.0 UTC', value: 'Black:90,Yellow:79,Cyan:79,Magenta:79' },
        { timestamp: '07/02/2015 21:29:09.0 UTC', value: 'Black:92,Yellow:80,Cyan:80,Magenta:80' },
        { timestamp: '06/23/2015 23:28:53.0 UTC', value: 'Black:78,Yellow:73,Cyan:73,Magenta:73' },
        { timestamp: '06/18/2015 18:43:11.0 UTC', value: 'Black:80,Yellow:74,Cyan:74,Magenta:74' },
        { timestamp: '06/18/2015 18:41:25.0 UTC', value: 'Black:82,Yellow:75,Cyan:75,Magenta:75' },
        { timestamp: '06/18/2015 18:39:00.0 UTC', value: 'Black:84,Yellow:76,Cyan:76,Magenta:76' },
        { timestamp: '06/18/2015 18:33:56.0 UTC', value: 'Black:86,Yellow:77,Cyan:77,Magenta:77' }
        ];

        //$rootScope.var1 = true;
        $rootScope.var1 = false;
        $rootScope.var2 = false;
        $rootScope.var3 = false;
        $rootScope.var4 = false;
        $rootScope.var5 = false;
        $rootScope.var6 = false;
        $rootScope.var7 = false;
        $rootScope.var8 = false;
        $rootScope.var9 = false;
        $rootScope.var10 = false;

        $rootScope.switchscreen = function (stream) {

            if (stream == 'MonoPageCount') {
                $rootScope.var1 = true;
                $rootScope.var2 = false;
                $rootScope.var3 = false;
                $rootScope.var4 = false;
                $rootScope.var5 = false;
                $rootScope.var6 = false;
                $rootScope.var7 = false;
                $rootScope.var8 = false;
                $rootScope.var9 = false;
                $rootScope.var10 = false;
            }

            else if (stream == 'TotalPageCount') {
                $rootScope.var1 = false;
                $rootScope.var2 = true;
                $rootScope.var3 = false;
                $rootScope.var4 = false;
                $rootScope.var5 = false;
                $rootScope.var6 = false;
                $rootScope.var7 = false;
                $rootScope.var8 = false;
                $rootScope.var9 = false;
                $rootScope.var10 = false;
            }

            else if (stream == 'Toner(Black)') {
                $rootScope.var1 = false;
                $rootScope.var2 = false;
                $rootScope.var3 = true;
                $rootScope.var4 = false;
                $rootScope.var5 = false;
                $rootScope.var6 = false;
                $rootScope.var7 = false;
                $rootScope.var8 = false;
                $rootScope.var9 = false;
                $rootScope.var10 = false;
            }

            else if (stream == 'Toner(Yellow)') {
                $rootScope.var1 = false;
                $rootScope.var2 = false;
                $rootScope.var3 = false;
                $rootScope.var4 = true;
                $rootScope.var5 = false;
                $rootScope.var6 = false;
                $rootScope.var7 = false;
                $rootScope.var8 = false;
                $rootScope.var9 = false;
                $rootScope.var10 = false;
            }

            else if (stream == 'Toner(Cyan)') {
                $rootScope.var1 = false;
                $rootScope.var2 = false;
                $rootScope.var3 = false;
                $rootScope.var4 = false;
                $rootScope.var5 = true;
                $rootScope.var6 = false;
                $rootScope.var7 = false;
                $rootScope.var8 = false;
                $rootScope.var9 = false;
                $rootScope.var10 = false;
            }

            else if (stream == 'Toner(Magenta)') {
                $rootScope.var1 = false;
                $rootScope.var2 = false;
                $rootScope.var3 = false;
                $rootScope.var4 = false;
                $rootScope.var5 = false;
                $rootScope.var6 = true;
                $rootScope.var7 = false;
                $rootScope.var8 = false;
                $rootScope.var9 = false;
                $rootScope.var10 = false;
            }

            else if (stream == 'ColorPageCount') {
                $rootScope.var1 = false;
                $rootScope.var2 = false;
                $rootScope.var3 = false;
                $rootScope.var4 = false;
                $rootScope.var5 = false;
                $rootScope.var6 = false;
                $rootScope.var7 = true;
                $rootScope.var8 = false;
                $rootScope.var9 = false;
                $rootScope.var10 = false;
            }

            else if (stream == 'DeviceStatus') {
                $rootScope.var1 = false;
                $rootScope.var2 = false;
                $rootScope.var3 = false;
                $rootScope.var4 = false;
                $rootScope.var5 = false;
                $rootScope.var6 = false;
                $rootScope.var7 = false;
                $rootScope.var8 = true;
                $rootScope.var9 = false;
                $rootScope.var10 = false;
            }

            else if (stream == 'TonerValues(Black,Yellow,Cyan,Magenta)') {
                $rootScope.var1 = false;
                $rootScope.var2 = false;
                $rootScope.var3 = false;
                $rootScope.var4 = false;
                $rootScope.var5 = false;
                $rootScope.var6 = false;
                $rootScope.var7 = false;
                $rootScope.var8 = false;
                $rootScope.var9 = true;
                $rootScope.var10 = false;
            }

            else if (stream == 'PrintJobCount') {
                $rootScope.var1 = false;
                $rootScope.var2 = false;
                $rootScope.var3 = false;
                $rootScope.var4 = false;
                $rootScope.var5 = false;
                $rootScope.var6 = false;
                $rootScope.var7 = false;
                $rootScope.var8 = false;
                $rootScope.var9 = false;
                $rootScope.var10 = true;
            }

        };

        $rootScope.monopagecount = {
            options: {
                chart: {
                    type: 'line'
                }
            },
            title: {
                text: 'Mono Page Count'
            },
            subtitle: {
                text: 'mono_count'
            },
            series: [{
                data: [1800, 2000, 3200, 4100, 5000, 6800, 7400, 8700, 9000, 15600, 18300, 21600]
            }],

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }
        };

        $rootScope.totalpagecount = {
            options: {
                chart: {
                    type: 'line'
                }
            },
            title: {
                text: 'Total Page Count'
            },
            subtitle: {
                text: 'total_count'
            },
            series: [{
                data: [4300, 7200, 17519, 17220, 6000, 5500, 4200, 1200, 3000, 2500, 2220, 1100]
            }],

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }
        };

        $rootScope.tonerblack = {
            options: {
                chart: {
                    type: 'line'
                }
            },
            title: {
                text: 'Toner Black'
            },
            subtitle: {
                text: 'toner_black'
            },
            series: [{
                data: [1200, 21000, 20624, 19863, 3784, 7827, 3288, 2999, 1379, 4596, 4744, 9690]
            }],

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }
        };

        $rootScope.toneryellow = {
            options: {
                chart: {
                    type: 'line'
                }
            },
            title: {
                text: 'Toner Yellow'
            },
            subtitle: {
                text: 'toner_yellow'
            },
            series: [{
                data: [1200, 21000, 20624, 19863, 3784, 7827, 3288, 2999, 1379, 4596, 4744, 9690]
            }],

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }
        };

        $rootScope.tonercyan = {
            options: {
                chart: {
                    type: 'line'
                }
            },
            title: {
                text: 'Toner Cyan'
            },
            subtitle: {
                text: 'toner_cyan'
            },
            series: [{
                data: [1200, 21000, 20624, 19863, 3784, 7827, 3288, 2999, 1379, 4596, 4744, 9690]
            }],

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }
        };

        $rootScope.tonermagenta = {
            options: {
                chart: {
                    type: 'line'
                }
            },
            title: {
                text: 'Toner Magenta'
            },
            subtitle: {
                text: 'toner_magenta'
            },
            series: [{
                data: [1200, 21000, 20624, 19863, 3784, 7827, 3288, 2999, 1379, 4596, 4744, 9690]
            }],

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }
        };

        $rootScope.colorpagecount = {
            options: {
                chart: {
                    type: 'line'
                }
            },
            title: {
                text: 'Color Page Count'
            },
            subtitle: {
                text: 'color_count'
            },
            series: [{
                data: [5500, 5120, 4900, 5298, 5500, 6700, 7800, 9457, 3889, 3923, 1388, 3439]
            }],

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }
        };

        $rootScope.printjobcount = {
            options: {
                chart: {
                    type: 'line'
                }
            },
            title: {
                text: 'Print Job Count'
            },
            subtitle: {
                text: 'print_count'
            },
            series: [{
                data: [5500, 5120, 4900, 5298, 5500, 6700, 7800, 9457, 3889, 3923, 1388, 3439]
            }],

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }
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

        $rootScope.reqstream = streamdetails.getProperty();

        //$rootScope.deviceinfo = function () {
        //    //$rootScope.reqstream1 = streamdetails.getProperty();
        //    $rootScope.reqstream1 = reqstream;
        //};       
    };

    mainCtrl.$inject = ['$rootScope', 'UserService', 'streamdetails'];

})();




