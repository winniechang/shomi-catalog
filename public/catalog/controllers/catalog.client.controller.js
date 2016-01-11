angular.module('catalog').controller('CatalogController', ['$scope', '$http',
  function($scope, $http) {
    $scope.name = 'Shomi Catalog';
    $scope.data = null;

    // Simple GET request example:
    $http({
      method: 'GET',
      url: 'http://davidchchang.com/shomi/fetch_feed.php'
    }).then(function successCallback(response) {
      // TODO: remove logs
      console.log('success');
      console.log(response);

      // render list to page
      $scope.data = response.data;

      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      console.log('error');
      console.log(response);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }
]);