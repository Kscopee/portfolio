document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".bg-video");

  video.preload = "auto";

  video.load();

  // handle video loading
  video.addEventListener("loadeddata", function () {
    video.style.opacity = "0.5";
  });

  // handle loop transition
  video.addEventListener("timeupdate", function () {
    // start buffering next loop when near the end
    if (video.currentTime > video.duration - 0.1) {
      video.currentTime = 0; // Reset before actual end to avoid gap
    }
  });

  // handle any errors
  video.addEventListener("error", function (e) {
    console.error("Error with video:", e);
    video.style.display = "none"; // Hide video on error
  });
});
