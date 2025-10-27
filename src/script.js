const container = document.querySelector(".playlists-container");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let scrollAmount = 0;
const cardWidth = 200;
const visibleWidth = document.querySelector(".recomendados").offsetWidth;
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
