function searchVideo(event) {
  const videos = document.querySelectorAll(".video-card");
  const search = event.target.value.toLowerCase();

  for (const video of videos) {
    const videoInfo = {
      title: video.getElementsByTagName("h3")[0].innerHTML.toLowerCase(),
      channelName: video.getElementsByTagName("p")[0].innerHTML.toLowerCase(),
      category: video.getElementsByTagName("p")[1].innerHTML.toLowerCase(),
    };

    video.style.display = "revert";

    if (searchThrough(videoInfo, search)) video.style.display = "none";
  }
}

function searchThrough(videoInfo, searchTerm) {
  const { title, channelName, category } = videoInfo;

  return (
    !title.includes(searchTerm) &&
    !channelName.includes(searchTerm) &&
    !category.includes(searchTerm)
  );
}
