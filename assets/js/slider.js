/**
 * slider.js
 * Легка горизонтальна карусель без залежностей — використовується
 * для блоку відгуків. Стрілки прокручують контейнер на ширину картки.
 */

function initSlider(rootSelector) {
  const root = document.querySelector(rootSelector);
  if (!root) return;

  const track = root.querySelector("[data-slider-track]");
  const prevBtn = root.querySelector("[data-slider-prev]");
  const nextBtn = root.querySelector("[data-slider-next]");
  if (!track) return;

  const scrollByCard = (direction) => {
    const card = track.querySelector(":scope > *");
    const cardWidth = card ? card.getBoundingClientRect().width + 24 : 320;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  prevBtn && prevBtn.addEventListener("click", () => scrollByCard(-1));
  nextBtn && nextBtn.addEventListener("click", () => scrollByCard(1));
}

export { initSlider };
