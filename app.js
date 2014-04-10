var blog = angular.module("blog", [
    'ngRoute', 
    'blogControllers'
]);
    
blog.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: ''
      })
      .when('/posts', {
        templateUrl: 'partials/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/newpost', {
        templateUrl: 'partials/newpost.html',
        controller: 'NewPostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

