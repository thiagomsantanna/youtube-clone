// Função chamada no momento em que o usuário digita algo no campo de busca
function searchVideo(event) {
  const videos = document.querySelectorAll(".video-card");
  const search = event.target.value.toLowerCase(); // Valor inserido na barra de busca

  for (const video of videos) {
    // Traduz o card de video no HTML em um objeto
    const videoInfo = {
      title: video.getElementsByTagName("h3")[0].innerHTML.toLowerCase(),
      channelName: video.getElementsByTagName("p")[0].innerHTML.toLowerCase(),
      category: video.getElementsByTagName("p")[1].innerHTML.toLowerCase(),
    };

    // Utilizando do valor "display: revert" nos videos é o que torna possível desfazer a busca
    video.style.display = "revert";

    // Se caso o video não possuir o termino em nenhum dos campos, ele é ocultado
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
