const filterButtons = document.querySelectorAll(".category-btn");

filterButtons.forEach((b) => b.addEventListener("click", showVideos));

function showVideos(event) {
  const button = event.target;
  const category = button.getAttribute("data-category").toLowerCase();

  const { videosToShow, videosToHide } = filterVideos(category, getVideos());

  activeButton(button);
  changeVideosDisplay(videosToShow, "block");
  changeVideosDisplay(videosToHide, "none");
}

function filterVideos(category, videos) {
  let videosToShow = [];
  let videosToHide = [];

  for (const video of videos) {
    const videoInfo = video.getElementsByTagName("p");
    const videoCategory = videoInfo[1].innerHTML.toLowerCase();

    if (category === "all" || videoCategory === category) {
      videosToShow.push(video);
      continue;
    }

    videosToHide.push(video);
  }

  return { videosToShow, videosToHide };
}

function changeVideosDisplay(videos, displayValue) {
  for (const video of videos) {
    video.style.display = displayValue;
  }
}

function activeButton(button) {
  filterButtons.forEach((b) => b.classList.remove("active"));

  button.classList.add("active");
}

function getVideos() {
  return document.querySelectorAll(".video-card");
}
