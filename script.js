// =========================
// CARROSSEL NORMAL (fora do modal)
// =========================

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
});


// =========================
// MODAL COM NAVEGAÇÃO + BARRINHAS + SWIPE
// =========================

let currentImages = [];
let currentIndex = 0;

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".modal-close");
const nextBtn = document.querySelector(".modal-next");
const prevBtn = document.querySelector(".modal-prev");
const progressContainer = document.getElementById("modal-progress");


// Abrir modal ao clicar imagem
document.querySelectorAll(".carousel").forEach(carousel => {
  const images = carousel.querySelectorAll("img");

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentImages = Array.from(images);
      currentIndex = index;

      modalImg.src = currentImages[currentIndex].src;
      modal.classList.add("active");

      updateProgress();
    });
  });
});


// Atualizar barrinhas
function updateProgress() {
  progressContainer.innerHTML = "";

  currentImages.forEach((_, index) => {
    const bar = document.createElement("span");
    if (index <= currentIndex) {
      bar.classList.add("active");
    }
    progressContainer.appendChild(bar);
  });
}


// Próxima imagem
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  modalImg.src = currentImages[currentIndex].src;
  updateProgress();
});


// Imagem anterior
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  modalImg.src = currentImages[currentIndex].src;
  updateProgress();
});


// Swipe mobile
let startX = 0;

modal.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

modal.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) {
    nextBtn.click();
  }

  if (endX - startX > 50) {
    prevBtn.click();
  }
});


// Fechar modal
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
