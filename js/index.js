(function() {

  var app = angular.module('graphApp', []);

  app.factory("restCall", ['$http',
    function($http) {
      return {
        get: function(url, succ_callback, failure_callBack, returnDataType) {
          $http({
            method: 'GET',
            url: url,
            timeout: 10000,
            params: {},
            transformResponse: function(data) {
              return JSON.parse(data);
            }
          }).success(function(data, status, headers, config) {
            succ_callback(data, status, headers, config);

          }).error(function(data, status, headers, config) {
            failure_callBack(data, status, headers, config);
          });
        }
      };
    }
  ]);

  app.controller('graphController', function($scope, restCall) {
// SUndeep: I made use of mocky.io for getting the dummy data and getting it from the angular service i wrote above, injected into this controller and made a get req
      restCall.get('http://www.mocky.io/v2/57ed7a330f0000751dbca445', function(data, status, headers, config) {
       $scope.data = data.mock;
    
    // Values set for our graph x and y axes.
    $scope.width = 800;
    $scope.height = 400;
    $scope.yAxis = 'Prices';
    $scope.xAxis = '2016';
    console.log($scope.data);
// Using the max variable in the DOM manipulation
    $scope.max = 0;

    var arrLength = $scope.data.length;
    for (var i = 0; i < arrLength; i++) {
      if ($scope.data[i].value > $scope.max)
        $scope.max = $scope.data[i].value;
    }
},
    function(data, status, headers, config) {
      console.log("Something went wrong while consuming the web API");
    }, "json");
    
  });

})();