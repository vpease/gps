// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('tracker', ['ionic',
                           'controllers',
                           'app'])

.run(function(App,$ionicPlatform) {
  $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      };
      if(window.StatusBar) {
          StatusBar.styleDefault();
      };
      App.initApp();
  });
})

.run(function($rootScope,$location,App){
    $rootScope.$on('Location:Ok',function(event,args){
        App.getPosition(args.pos);
        if (args.retries===0){
			console.log('Posición Ok sin problemas');
			$location.url("/login/Bienvenido");
		}        
    });
    $rootScope.$on('Location:Ko',function(event,args){
        App.retryLocation();
        if (args.retries===0){
			console.log('Posición Ko con problemas');
			$location.url("/login/Bienvenido");
		}
        
    });
    $rootScope.$on('auth:ok',function(event,args){
        App.replicate(args.user);
        $location.url("/menu/");
    });
    $rootScope.$on('auth:ko',function(event,args){
        $location.url("/login/"+args.message);
    });
    $rootScope.$on('db:init',function(event,args){
    });
    $rootScope.$on('db:uptodate',function(event,args){

    });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('splash', {
      url: "/",
      views: {
          "home":{
              templateUrl: "templates/splash.html",
              controller: "SplashController as splash"
          }
      }
  })
  .state('login',{
      url:"/login/:msg",
      views: {
          "home":{
              templateUrl: "templates/login.html",
              controller: "LoginController as login"
          }
      },
      resolve: {
          msg: function($stateParams){
              return $stateParams.msg;
          }
      }
  })
  .state('main',{
      url:"/menu/",
      views: {
          "home":{
              templateUrl: "templates/main.html",
              controller: "MainController as main"
          }
      },
      resolve:{
          papers: function(data){
              res = data.getPapers();
              return res;
          }
      }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
