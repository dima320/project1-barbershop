/**
 * main.js
 * Точка входу. Підключається в index.html як type="module".
 * Тут лише виклики ініціалізаторів з інших файлів — жодної логіки
 * розмітки чи стилів тут бути не повинно.
 */

import { initHeaderScrollState, initMobileNav, initScrollProgress, initScrollReveal } from "./navigation.js";
import { initCounters } from "./counters.js";
import { initSlider } from "./slider.js";

document.addEventListener("DOMContentLoaded", () => {
  // Підставляємо динамічні посилання/контакти з config.js у розмітку
  document.querySelectorAll("[data-booking-link]").forEach((el) => {
    el.setAttribute("href", SITE_CONFIG.bookingUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });
  document.querySelectorAll("[data-phone-link]").forEach((el) => {
    el.setAttribute("href", `tel:${SITE_CONFIG.phone}`);
    if (el.dataset.phoneLink === "text") el.textContent = SITE_CONFIG.phoneDisplay;
  });

  initHeaderScrollState();
  initMobileNav();
  initScrollProgress();
  initScrollReveal();
  initCounters();
  initSlider("[data-slider='reviews']");

  document.querySelector(".footer__year").textContent = new Date().getFullYear();
});
