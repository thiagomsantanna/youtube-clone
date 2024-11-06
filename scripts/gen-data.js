// Esse script depende da importação do Faker.js no HTML utilizado

const randomNumber = () => Math.round(Math.random() * 1000); // Gera um número aleatório entre 0 e 1000
const VIDEO_CATEGORIES = ["music", "sports", "gaming"]; // Cosntante das categorias de vídeos

// Gera um array de 50 objetos com as propriedades title, thumbnail, channelName e category (video)
const VIDEOS = [...Array(50)].map(() => ({
  title: faker.company.bs(),
  thumbnail: `${faker.image.lorempicsum.imageUrl(1280, 720)}?${randomNumber()}`,
  channelName: faker.company.companyName(),
  category: faker.helpers.randomize(VIDEO_CATEGORIES),
}));

// Captura o grid de videos, elemento responsável pela exibição dos vídeos
const videoGrid = document.querySelector(".video-grid");

// Percorre toda a lista de videos gerada
for (const video of VIDEOS) {
  // Cria o card de video no HTML
  const videoCard = createVideoCard(video);

  // Atribui ele no grid de videos
  videoGrid.appendChild(videoCard);
}

// Função responsável por criar no HTML de forma dinâmica e automatizada
// o card de video com as informação geradas no array VIDEOS
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

  // Atribui as informações do video em elementos children do videoCard
  videoCard.appendChild(videoThumbnail);
  videoCard.appendChild(videoTitle);
  videoCard.appendChild(videoChannelName);
  videoCard.appendChild(videoCategory);

  return videoCard;
}

// Exemplo de card de video em HTML
/* <div class="video-card music">
  <img src="https://i.ytimg.com/vi/SrUgg03-uQY/maxresdefault.jpg" alt="Video Thumbnail">
  <h3>Video Title</h3>
  <p>Channel Name</p>
  <p>Banana</p>
</div> */
