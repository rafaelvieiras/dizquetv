const angular = require('angular')
require('angular-router-browserify')(angular)
require('./ext/lazyload')(angular)
require('./ext/dragdrop')
require('./ext/angularjs-scroll-glue')

var app = angular.module('myApp', ['ngRoute', 'angularLazyImg', 'dndLists', 'luegg.directives'])

app.service('plex',             require('./services/plex'))
app.service('dizquetv',         require('./services/dizquetv'))

app.directive('plexSettings',   require('./directives/plex-settings'))
app.directive('ffmpegSettings', require('./directives/ffmpeg-settings'))
app.directive('xmltvSettings',  require('./directives/xmltv-settings'))
app.directive('hdhrSettings',   require('./directives/hdhr-settings'))
app.directive('plexLibrary',    require('./directives/plex-library'))
app.directive('programConfig',  require('./directives/program-config'))
app.directive('offlineConfig',  require('./directives/offline-config'))
app.directive('frequencyTweak',  require('./directives/frequency-tweak'))
app.directive('removeShows',  require('./directives/remove-shows'))
app.directive('channelRedirect',  require('./directives/channel-redirect'))
app.directive('plexServerEdit',  require('./directives/plex-server-edit'))
app.directive('channelConfig',  require('./directives/channel-config'))

app.controller('settingsCtrl',  require('./controllers/settings'))
app.controller('channelsCtrl',  require('./controllers/channels'))
app.controller('versionCtrl',  require('./controllers/version'))
app.controller('guideCtrl',  require('./controllers/guide'))

app.config(function ($routeProvider) {
    $routeProvider
    .when("/settings", {
        templateUrl: "views/settings.html",
        controller: 'settingsCtrl'
    })
    .when("/channels", {
        templateUrl: "views/channels.html",
        controller: 'channelsCtrl'
    })
    .when("/guide", {
        templateUrl: "views/guide.html",
        controller: 'guideCtrl'
    })
    .when("/version", {
        templateUrl: "views/version.html",
        controller: 'versionCtrl'
    })
    .otherwise({
        redirectTo: "channels"
    })
})