const albums = [
  {
    id: 1,
    nome: "Iron Maiden",
    artista: "Iron Maiden",
    cover:
      "https://consequence.net/wp-content/uploads/2019/04/Iron-Maiden-debut-album.png?w=1024",
  },
  {
    id: 2,
    nome: "King of The Dead",
    artista: "Cirith Ungol",
    cover:
      "https://i.pinimg.com/originals/f5/7f/2a/f57f2a29562bb00e8334b68c1afc2607.jpg",
  },
  {
    id: 3,
    nome: "The Bestiary",
    artista: "Castle Rat",
    cover:
      "https://doomed-nation.com/wp-content/uploads/2025/05/Castle-Rat12-1024x1024.jpg",
  },
  {
    id: 4,
    nome: "Infestissuman",
    artista: "Ghost",
    cover:
      "https://img.discogs.com/_jstEVcJ0tMsf109-L2-hcs-uZk=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4613550-1369947940-3812.jpeg.jpg",
  },
  {
    id: 5,
    nome: "Welcomo to my Nightmare",
    artista: "Alice Cooper",
    cover:
      "https://th.bing.com/th/id/R.2f6d79799593fa72c7561febe718365d?rik=0n75u4bLDQE8LA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-rPHacMFG2_M%2fTXwd8BRwcUI%2fAAAAAAAAAtU%2fIWfOuesUg_w%2fs1600%2fAlice_Cooper-Welcome_to_my_Nightmare.jpg&ehk=kBYxtkrqKwcB%2f9C3%2fm4hmymZkctg7SDaFGSiwyQRcO8%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 6,
    nome: "Melissa",
    artista: "Mercyful Fate",
    cover:
      "https://i.pinimg.com/originals/a2/68/0f/a2680f4359dc2c4815ca4eb15d9f9782.jpg",
  },
  {
    id: 6,
    nome: "Melissa",
    artista: "Mercyful Fate",
    cover:
      "https://i.pinimg.com/originals/a2/68/0f/a2680f4359dc2c4815ca4eb15d9f9782.jpg",
  },
  {
    id: 6,
    nome: "Melissa",
    artista: "Mercyful Fate",
    cover:
      "https://i.pinimg.com/originals/a2/68/0f/a2680f4359dc2c4815ca4eb15d9f9782.jpg",
  },
  {
    id: 6,
    nome: "Melissa",
    artista: "Mercyful Fate",
    cover:
      "https://i.pinimg.com/originals/a2/68/0f/a2680f4359dc2c4815ca4eb15d9f9782.jpg",
  },
];

// Seleciona todas as seções de recomendados
const recomendadosSections = document.querySelectorAll(".recomendados");

recomendadosSections.forEach((section) => {
  const container = section.querySelector(".playlists-container");
  const prev = section.querySelector(".prev");
  const next = section.querySelector(".next");

  let scrollAmount = 0;

  // largura de um card (pega dinamicamente o primeiro)
  const cardWidth = container.querySelector(
    ".playlist-central-card"
  ).offsetWidth;
  const visibleWidth = section.offsetWidth;
  const totalCard = container.children.length;
  const maxScroll = cardWidth * totalCard - visibleWidth;

  next.addEventListener("click", () => {
    scrollAmount = Math.min(scrollAmount + cardWidth, maxScroll);
    container.style.transform = `translateX(-${scrollAmount}px)`;
  });

  prev.addEventListener("click", () => {
    scrollAmount = Math.max(scrollAmount - cardWidth, 0);
    container.style.transform = `translateX(-${scrollAmount}px)`;
  });
});

// const container = document.querySelector(".playlists-container");
// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");

// let scrollAmount = 0;
// const cardWidth = 200;
// const visibleWidth = document.querySelector(".recomendados").offsetWidth;
// const totalCard = container.children.length;
// const maxScroll = cardWidth * totalCard - visibleWidth;

// next.addEventListener("click", () => {
//   scrollAmount = Math.min(scrollAmount + cardWidth, maxScroll);
//   container.style.transform = `translateX(-${scrollAmount}px)`;
// });

// prev.addEventListener("click", () => {
//   scrollAmount = Math.max(scrollAmount - cardWidth, 0);
//   container.style.transform = `translateX(-${scrollAmount}px)`;
// });

// cria os cards
function createBandCard(album) {
  return `                <div class="playlist-central-card">
                  <!-- capa da playlist -->
                  <div class="playlist-central-img">
                    <img
                      src="${album.cover}"
                      alt="thumbnail"
                    />
                  </div>
                  <!-- título e textos da playlist -->
                  <p class="card-title">${album.nome}</p>
                  <p class="card-artist-name">${album.artista}</p>
                  

                  <!-- botão play -->
                  <div class="botao-play-central">
                    <i class="fa-solid fa-play"></i>
                  </div>
                </div>`;
}

//renderiza os cards
function renderAlbums(albums) {
  const grid = document.getElementById("playlistContainer");

  grid.innerHTML = albums.map(createBandCard).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderAlbums(albums);
});
