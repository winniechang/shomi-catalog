// Manually bootstrap AngularJS for more control

var mainApplicationModuleName = 'shomi-catalog';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['catalog']);

angular.element(document).ready(function () {
  angular.bootstrap(document, [mainApplicationModuleName]);
});