var config = {
  apiKey: "AIzaSyDzdFx7BZT92SwY-VokLLFOH2hv7iXb9Ds",
  authDomain: "links-ffdf6.firebaseapp.com",
  databaseURL: "https://links-ffdf6.firebaseio.com",
  storageBucket: "links-ffdf6.appspot.com",
  messagingSenderId: "551180424076"
};
firebase.initializeApp(config);


var app = angular.module('app', ['firebase'])

app.controller('LinksController', ['$scope', '$firebaseArray', '$firebaseAuth', function($scope, $firebaseArray, $firebaseAuth) {
  var ref = firebase.database().ref("links")
  var auth = $firebaseAuth();
  $scope.authenticated = false
  $scope.links = $firebaseArray(ref);

  $scope.addLink = function() {
    $scope.links.$add({
      title: 'Prueba',
      url: 'Mas prueba'
    })
  }

  $scope.login = function() {
    auth.$signInWithPopup("github")
    .then(function(firebaseUser) {
      $scope.user = firebaseUser
      $scope.authenticated = true
      console.log("Signed in as:", firebaseUser);
    }).catch(function(error) {
      console.log("Authentication failed:", error);
    });
  }


  $scope.deleteLink = function(link) {
    console.log('Intentado Borrar', link)
    $scope.links.$remove(link)
      .then(function() {
        console.log('Exito')
      })
      .catch(function(err) {
        console.log(err)
      })
  }

}])
