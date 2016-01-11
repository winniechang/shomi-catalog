angular.module('catalog').directive('ngPaginate', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      ngModel: '='
    },
    template: '<div>' +
      '<nav>' +
        '<ul id="pagination-controls" class="pagination">' +
          '<li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>' +
          '<li><a href="#">1</a></li>' +
          '<li><a href="#">2</a></li>' +
          '<li><a href="#">3</a></li>' +
          '<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>' +
          '<li></li>' +
        + '</ul>' +
      '</nav>' +
    '</div>',
    controller: ['$scope', function($scope) {
      $scope.updatePagination = function(paginationObject) {
        console.log('ngModel');
        console.log($scope.ngModel);
        console.log(paginationObject);
      }
    }],
    link: function(scope, iElement, iAttrs, controller) {
      scope.updatePagination(iAttrs.ngModel);
    }
  }
});