const videoSelector = document.getElementsByTagName('video')[0];
videoSelector.addEventListener('loadedmetadata', function() {
  this.currentTime = 4.5;
}, false);
