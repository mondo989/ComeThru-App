angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };


$scope.go = function ( path ) {
    $location.path( 'templates/login.html' );
  };



// Trying to add to 



  //  $scope.create = function() {
  //   $state.go('/app/login');
  // };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})




.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Armando', id: 1, image: 'img/mondo.png'},
    { title: 'Mujtaba', id: 1, image: 'img/mujtaba.png' },
    { title: 'Josh', id: 2, image: 'img/josh.png' },
    { title: 'Jorge', id: 4, image: 'img/jorge.png'  },
    { title: 'Peter', id: 2, image: 'img/peter.png'  },
    { title: 'Andre', id: 4, image: 'img/andre.png'},
    { title: 'Roberto', id: 4, image: 'img/robert.png'},
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});




// Map Controller  Still not ready to be used yet.
// Pulled from http://codepen.io/matiastucci/pen/tnFkg


angular.module('ionic.example', ['ionic'])

    .controller('MapCtrl', function($scope, $ionicLoading) {
      function initialize() {
        var myLatlng = new google.maps.LatLng(43.074,-89.381388);
        var myLatlng2 = new google.maps.LatLng(43.07493,-89.381388);
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener(document.getElementById('map'), 'mousedown', function(e) {
          e.preventDefault();
          return false;
        });
        
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Hello World!'
        });
        
        marker.infowindow = new   google.maps.InfoWindow({
        content: "description"
          });
        
      google.maps.event.addListener(marker, 'mousedown', function() {
        marker.infowindow.open($scope.map, marker);
      });
        
         var marker2 = new google.maps.Marker({
            position: myLatlng2,
            map: map,
            title: 'Hello World!'
        });
        
        marker2.infowindow = new   google.maps.InfoWindow({
        content: "description 2"
          });
        
      google.maps.event.addListener(marker2, 'mousedown', function() {
        marker2.infowindow.open($scope.map, marker2);
      });

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
    });
