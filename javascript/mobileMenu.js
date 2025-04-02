const imageContainer = document.querySelector(".image-container");
const hoverTitle = document.querySelector(".hover-title");

imageContainer.addEventListener("mousemove", (e) => {
  hoverTitle.style.display = "block";
  hoverTitle.style.left = `${e.clientX}px`;
  hoverTitle.style.top = `${e.clientY}px`;
});

imageContainer.addEventListener("mouseleave", () => {
  hoverTitle.style.display = "none";
});