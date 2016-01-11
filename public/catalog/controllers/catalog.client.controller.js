angular.module('catalog').controller('CatalogController', ['$scope', '$http',
  function ($scope, $http) {
    $scope.name = 'Shomi Catalog';
    $scope.data = null;
    $scope.sortBy = 'title';
    $scope.paginationObject = {
      currentIndex: 0,
      totalObjects: 0,
      totalPages: 2
    };

    // Simple GET request example:
    $http({
      method: 'GET',
      url: 'http://davidchchang.com/shomi/fetch_feed.php'
    }).then(function successCallback(response) {
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

    $scope.sortByYear = function () {
      $scope.sortBy = 'year';
    };
    $scope.sortByTitle = function () {
      $scope.sortBy = 'title';
    };
    $scope.sortByDuration = function () {
      $scope.sortBy = 'duration';
    };

    $scope.sortingFunction = function (card) {
      if ($scope.sortBy == 'year') {
        return card.Item.ReleaseYear == null ? "" : card.Item.ReleaseYear;
      } else if ($scope.sortBy == 'duration') {
        return card.Item.RunTimeSec == null ? 0 : card.Item.RunTimeSec;
      } else {
        // assume sort by title
        return card.Item.Title;
      }
    };
  }
]);