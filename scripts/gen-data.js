const randomNumber = () => Math.round(Math.random() * 1000);
const VIDEO_CATEGORIES = ["music", "sports", "gaming"];

const VIDEOS = [...Array(50)].map(() => ({
  title: faker.company.bs(),
  thumbnail: `${faker.image.lorempicsum.imageUrl(1280, 720)}?${randomNumber()}`,
  channelName: faker.company.companyName(),
  category: faker.helpers.randomize(VIDEO_CATEGORIES),
}));

const videoGrid = document.querySelector(".video-grid");

for (const video of VIDEOS) {
  const videoCard = createVideoCard(video);

  videoGrid.appendChild(videoCard);
}

function createVideoCard(video) {
  const videoCard = document.createElement("div");
  videoCard.classList.add("video-card");
  videoCard.classList.add(video.category);

  // videoThumbnail.src = "https://i.ytimg.com/vi/SrUgg03-uQY/maxresdefault.jpg";
  const videoThumbnail = document.createElement("img");
  videoThumbnail.src = video.thumbnail;
  videoThumbnail.alt = "Video Thumbnail";

  const videoTitle = document.createElement("h3");
  videoTitle.textContent = video.title;

  const videoChannelName = document.createElement("p");
  videoChannelName.textContent = video.channelName;

  const videoCategory = document.createElement("p");
  videoCategory.textContent = video.category;

  videoCard.appendChild(videoThumbnail);
  videoCard.appendChild(videoTitle);
  videoCard.appendChild(videoChannelName);
  videoCard.appendChild(videoCategory);

  return videoCard;
}

/* <div class="video-card music">
  <img src="https://i.ytimg.com/vi/SrUgg03-uQY/maxresdefault.jpg" alt="Video Thumbnail">
  <h3>Video Title</h3>
  <p>Channel Name</p>
  <p>Banana</p>
</div> */
