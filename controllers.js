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


blogControllers.factory("myChatRoom", ["firebase"])
  .factory("FirebaseService", ["$firebase", function($firebase) {
    var ref = new Firebase("https://kolesblog.firebaseio.com/messages");
    return $firebase(ref);
  }]);

blogControllers.controller("ChatController", function($scope, $location, FirebaseService, $routeParams) {
      $scope.user = "Guest " + Math.round(Math.random()*101);
    
    $scope.editing = $routeParams.firebaseID;
    console.log($routeParams.firebaseID);
    
    $scope.post = {};
    if($routeParams.firebaseID){
        $scope.post = FirebaseService.$child($routeParams.firebaseID);
        console.log(FirebaseService.$child($routeParams.firebaseID));
    }
    
      $scope.messages = FirebaseService;
      $scope.addMessage = function() {
          if($routeParams.firebaseID){
              var id = $routeParams.firebaseID;
              var post = {};
              post[id] = $scope.post;
              
            $scope.messages.$update(post);
          }else{
            $scope.messages.$add($scope.post);
          }
        $scope.post = {};
          $location.path('/posts');
      };
});

blogControllers.controller('PostsPage', function($scope, FirebaseService) {
    $scope.posts = FirebaseService;
    $scope.edit = function() {
        console.log(FirebaseService.$getIndex());
    };
    /*
   postsRef.on('value', function(snapshot) {
       $scope.posts = [];
       var tmp = snapshot.val();
       $scope.posts = tmp;
   });*/
});