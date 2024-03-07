var video = document.getElementById("vidPlayer");
var resolution = document.getElementById("resolution");
var width = video.offsetWidth;
var height = video.offsetHeight;

console.log("current resolution:", width, height)

if ((width == 1280 && height == 720) || (width == 1920 && height == 1080)) {
  resolution.src =
    "https://cdn.glitch.global/7f3de150-1a8e-4301-b3c8-5f943aa69686/hd.png?v=1672866875486";
} else {
  resolution.src =
    "https://cdn.glitch.global/7f3de150-1a8e-4301-b3c8-5f943aa69686/sd.png?v=1672866873130";
}

var video = document.getElementById("vidPlayer");
  var timeline = document.getElementById("timeline");

  // Update the value of the timeline as the video plays
  video.addEventListener("timeupdate", function() {
    timeline.value = video.currentTime;
  });

  // Seek the video when the timeline value is changed
  timeline.addEventListener("input", function() {
    video.currentTime = timeline.value;
  });

var video = document.getElementById("vidPlayer");
  var skipAmount = 5;  // The number of seconds to skip when the arrow keys are pressed

  document.addEventListener("keydown", function(event) {
    if (event.code === "ArrowLeft") {
      // Skip backward when the left arrow key is pressed
      video.currentTime -= skipAmount;
    } else if (event.code === "ArrowRight") {
      // Skip forward when the right arrow key is pressed
      video.currentTime += skipAmount;
    }
  });

 document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  });

var video = document.getElementById("vidPlayer");

  document.addEventListener("keydown", function(event) {
    if (event.code === "KeyF") {
      video.requestFullscreen();
    }
  });
