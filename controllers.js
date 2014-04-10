var blogControllers = angular.module('blogControllers', []);
                     
blogControllers.service('DataService', function(){
    this.posts = [];
});


blogControllers.controller('ActiveCtrl', function($scope, $location) {
    $scope.$location = $location;
});
    
    
    
blogControllers.controller('NewPostCtrl', function($scope, DataService) {
    $scope.submitNewPost = function () {
        var newPost = {title: $scope.newPostTitle,
                       content: $scope.newPostContent
                      };
        DataService.posts.push(newPost);
        console.log(DataService.posts)
        $scope.newPostTitle = "";
        $scope.newPostContent = "";
    };

});

blogControllers.controller('PostsCtrl', function($scope, DataService) {
  $scope.posts = [];
    $scope.posts= DataService.posts;
    
    console.log($scope.posts);

});