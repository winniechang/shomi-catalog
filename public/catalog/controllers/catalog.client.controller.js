angular.module('catalog').controller('CatalogController', ['$scope', '$http',
  function ($scope, $http) {
    $scope.name = 'Shomi Catalog';
    $scope.data = {
      Data: []
    };
    $scope.sortBy = 'title';
    $scope.paginationObject = {
      currentIndex: 0,
      totalObjects: 0,
      totalPages: 1
    };

    // Simple GET request example:
    $http({
      method: 'GET',
      url: 'http://davidchchang.com/shomi/fetch_feed.php'
    }).then(function successCallback(response) {
      // render list to page
      $scope.data = response.data;
      $scope.paginationObject.totalPages = Math.ceil($scope.data.TotalHits / 20);

      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      console.log('error');
      console.log(response);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

    // SORTING

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

    // PAGINATION

    $scope.gotoPage = function (index) {
      $scope.paginationObject.currentIndex = index - 1;
      console.log($scope.paginationObject.currentIndex);
    };
    $scope.previousPage = function () {
      $scope.paginationObject.currentIndex--;
      if ($scope.paginationObject.currentIndex < 0) {
        $scope.paginationObject.currentIndex = 0;
      }
      console.log($scope.paginationObject.currentIndex);
    };
    $scope.nextPage = function () {
      $scope.paginationObject.currentIndex++;
      if ($scope.paginationObject.currentIndex >= $scope.paginationObject.totalPages) {
        $scope.paginationObject.currentIndex = $scope.paginationObject.totalPages - 1;
      }
      console.log($scope.paginationObject.currentIndex);
    };

    // HELPER FUNCTIONS

    // range function from http://stackoverflow.com/a/17124017/24731
    $scope.range = function (min, max, step) {
      step = step || 1;
      var input = [];
      for (var i = min; i <= max; i += step) {
        input.push(i);
      }
      return input;
    };


  }
]);