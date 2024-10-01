document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-button");
  const items = document.querySelectorAll(".gallery-item");
  items.forEach((item) => {
    item.style.display = "block";
    item.style.opacity = "1";
  });
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      items.forEach((item) => {
        item.classList.remove("animate");
        item.style.opacity = "0";
        item.style.display = "none";

        if (filter === "all" || item.getAttribute("data-gallery-tag") === filter) {
          item.style.display = "block";

          setTimeout(() => {
            item.classList.add("animate");
          }, 100);
        }
      });

      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentIndex = 0;
  galleryItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      modal.style.display = "block";
      modalImage.src = this.src;
      modalImage.alt = this.alt;
      currentIndex = index;
    });
  });
  prevBtn.addEventListener("click", function () {
    currentIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
    modalImage.src = galleryItems[currentIndex].src;
    modalImage.alt = galleryItems[currentIndex].alt;
  });
  nextBtn.addEventListener("click", function () {
    currentIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1;
    modalImage.src = galleryItems[currentIndex].src;
    modalImage.alt = galleryItems[currentIndex].alt;
  });
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
