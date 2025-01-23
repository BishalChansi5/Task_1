const cardsContainer = document.querySelector(".cards");
let isActive = false;
let startY;
let scrollTop;

cardsContainer.addEventListener("mousedown", (e) => {
  isActive = true;
  startY = e.pageY;
  scrollTop = cardsContainer.scrollTop;
  console.log(scrollTop);
  cardsContainer.style.cursor = "grabbing";
});

cardsContainer.addEventListener("mouseleave", () => {
  isActive = false;
  cardsContainer.style.cursor = "grab";
});

cardsContainer.addEventListener("mouseup", () => {
  isActive = false;
  cardsContainer.style.cursor = "grab";
});

cardsContainer.addEventListener("mousemove", (e) => {
  if (!isActive) return;
  e.preventDefault();
  const diff = e.pageY - startY;
  cardsContainer.scrollTop = scrollTop - diff;
});
