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
  images.forEach(img => {
    img.addEventListener("click", () => {
      document.getElementById("modal").style.display = "block";
      document.getElementById("modal-img").src = img.src;
    });
  });
});

document.querySelector(".close").onclick = function() {
  document.getElementById("modal").style.display = "none";
};
