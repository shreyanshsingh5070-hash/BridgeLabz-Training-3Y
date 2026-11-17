const gallery = document.getElementById("gallery");
const imageModal = document.getElementById("imageModal");
const modalContent = document.getElementById("modalContent");
const largeImage = document.getElementById("largeImage");

gallery.addEventListener("click", (event) => {
  if (event.target.tagName !== "IMG") return;
  largeImage.src = event.target.src;
  largeImage.alt = event.target.alt;
  imageModal.classList.add("open");
});

modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
});

imageModal.addEventListener("click", () => {
  imageModal.classList.remove("open");
  largeImage.src = "";
});