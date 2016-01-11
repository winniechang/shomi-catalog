angular.module('catalog').filter('posterImage', function() {
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

angular.module('catalog').filter('formatDuration', function() {
  return function(seconds) {
    if (seconds == null) {
      return "Unknown duration";
    }

    var hours = 0, minutes;
    hours = Math.floor(seconds / 60 / 60);
    minutes = Math.round((seconds - hours * 60 * 60) / 60);
    return hours > 0 ? (hours + "h " + minutes + "m") : (minutes + "m");
  };
});