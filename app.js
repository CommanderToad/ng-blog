var blog = angular.module("blog", [
    'ngRoute', 
    'blogControllers',
    'firebase'
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
        controller: 'PostsPage'
      })
      .when('/newpost/:firebaseID?', {
        templateUrl: 'partials/newpost.html',
        controller: 'ChatController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

