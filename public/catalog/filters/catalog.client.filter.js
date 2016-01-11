angular.module('catalog', []).filter('posterImage', function() {
  return function(imageList) {
    // Poster images have a Type ID of 1
    var posterImages = imageList.filter(function (element, index, array) {
      return element.Type == 1;
    });
    if (posterImages.length == 0) {
      alert("Error - no poster information");
    }
    return posterImages[0].ImageId;
  };
});