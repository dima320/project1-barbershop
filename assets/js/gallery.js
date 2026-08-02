/**
 * gallery.js
 * Балансує masonry-галерею по реальних пропорціях фото (data-aspect),
 * щоб колонки виходили приблизно однакової висоти на будь-якій ширині
 * екрана — без CSS columns, які заповнюють колонки послідовно й
 * лишають нерівні "діри" знизу.
 */

function columnsForWidth(width) {
  if (width <= 460) return 1;
  if (width <= 700) return 2;
  if (width <= 900) return 3;
  return 4;
}

function layout(gallery, items, gapPx) {
  const width = gallery.getBoundingClientRect().width;
  if (!width) return;

  const cols = columnsForWidth(width);
  const colWidth = (width - gapPx * (cols - 1)) / cols;

  gallery.innerHTML = "";

  const columns = Array.from({ length: cols }, () => {
    const col = document.createElement("div");
    col.className = "gallery__col";
    gallery.appendChild(col);
    return col;
  });
  const heights = new Array(cols).fill(0);

  items.forEach((item) => {
    const aspect = parseFloat(item.dataset.aspect) || 0.75;
    const shortest = heights.indexOf(Math.min(...heights));
    columns[shortest].appendChild(item);
    heights[shortest] += colWidth / aspect + gapPx;
  });
}

function initGalleryMasonry(selector = ".gallery") {
  const galleries = document.querySelectorAll(selector);
  if (!galleries.length) return;

  const gapPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;

  galleries.forEach((gallery) => {
    const items = Array.from(gallery.querySelectorAll(".gallery__item"));
    if (!items.length) return;

    let frame;
    const relayout = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => layout(gallery, items, gapPx));
    };

    relayout();
    window.addEventListener("resize", relayout);
  });
}

export { initGalleryMasonry };
