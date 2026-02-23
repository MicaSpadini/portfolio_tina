// CARROSSEL

document.querySelectorAll(".carousel").forEach(carousel => {
  let index = 0;
  const images = carousel.querySelectorAll("img");
  const next = carousel.querySelector(".next");
  const prev = carousel.querySelector(".prev");

  next.addEventListener("click", () => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  });

  prev.addEventListener("click", () => {
    images[index].classList.remove("active");
    index = (index - 1 + images.length) % images.length;
    images[index].classList.add("active");
  });

  // MODAL
  // MODAL COM CARROSSEL

let currentImages = [];
let currentIndex = 0;

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".modal-close");
const nextBtn = document.querySelector(".modal-next");
const prevBtn = document.querySelector(".modal-prev");

document.querySelectorAll(".carousel").forEach(carousel => {

  const images = carousel.querySelectorAll("img");

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentImages = Array.from(images);
      currentIndex = index;

      modalImg.src = currentImages[currentIndex].src;
      modal.classList.add("active");
    });
  });

});

// Próxima imagem
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  modalImg.src = currentImages[currentIndex].src;
});

// Imagem anterior
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  modalImg.src = currentImages[currentIndex].src;
});

// Fechar
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Fechar clicando fora
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// Fechar com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("active");
  }
});
