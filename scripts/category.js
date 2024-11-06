// Captura todos os botões de categoria
const filterButtons = document.querySelectorAll(".category-btn");
// Adiciona um evento de clique para chamar a função "showVideos()" em cada botão
filterButtons.forEach((b) => b.addEventListener("click", showVideos));

// Função responsável pela filtragem dos vídeos e customização dos botões.
function showVideos(event) {
  const button = event.target; // Recebe o botão clicado
  const category = button.getAttribute("data-category").toLowerCase(); // Pega a categoria do botão

  // Filtra os videos em relação a categoria
  // separando entre videos que devem ser mostrados e escondidos
  const { videosToShow, videosToHide } = filterVideos(category, getVideos());

  // Ativa o botão clicado e remove a ativação dos outros
  activeButton(button);
  // Mostra ou esconde os videos a partir da propriedade CSS "display: block | none"
  changeVideosDisplay(videosToShow, "block"); // Mostra os videos que devem ser mostrados
  changeVideosDisplay(videosToHide, "none"); // Esconde os videos que devem ser escondidos
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

// Percorre por uma lista de videos e muda a propriedade CSS "display" de cada um pela desejada
function changeVideosDisplay(videos, displayValue) {
  for (const video of videos) {
    video.style.display = displayValue;
  }
}

// Remove a classe "active" de todos os botões e adiciona a classe "active" no botão clicado
function activeButton(button) {
  filterButtons.forEach((b) => b.classList.remove("active"));

  button.classList.add("active");
}

// Retorna todos os videos da página
function getVideos() {
  return document.querySelectorAll(".video-card");
}
