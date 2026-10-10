document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".bg-video");

  // function to handle smooth looping
  function handleLoop() {
    // check if we're near the end of the video
    if (video.currentTime >= video.duration - 0.5) {
      // smoothly reset to start
      requestAnimationFrame(() => {
        video.currentTime = 0;
        video.play();
      });
    }
  }

  // function to handle video resumption
  function handleVisibilityChange() {
    if (document.visibilityState === "visible") {
      video.play().catch((e) => console.log("Auto-play prevented:", e));
    }
  }

  // set up video
  if (video) {
    video.preload = "metadata";

    // remove any existing event listeners
    video.removeEventListener("timeupdate", handleLoop);

    // add our optimized loop handler
    video.addEventListener("timeupdate", handleLoop);

    // handle initial load
    video.addEventListener("loadeddata", function () {
      requestAnimationFrame(() => {
        video.play();
        video.style.opacity = "0.5";
      });
    });

    // add visibility change detection
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // add focus detection
    window.addEventListener("focus", () => {
      video.play().catch((e) => console.log("Auto-play prevented:", e));
    });

    // error handling
    video.addEventListener("error", function (e) {
      console.error("Video error:", e);
      video.style.display = "none";
    });

    // check if video is taking too long to load
    setTimeout(() => {
      if (video.readyState < 2) {
        console.warn("Video taking too long to load, checking connection...");
      }
    }, 5000);
  }
});
