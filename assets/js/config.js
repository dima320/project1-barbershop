/**
 * config.js
 * -----------------------------------------------------------------
 * Єдине місце для даних, які часто змінюються: посилання на запис,
 * телефон, адреса, соцмережі, години роботи.
 * Коли замовник надасть реальні дані — міняти потрібно ТІЛЬКИ тут.
 * -----------------------------------------------------------------
 */

const SITE_CONFIG = {
  // Посилання на сторонній сервіс онлайн-запису (Alteg.io, Booksy тощо)
  bookingUrl: "https://closedspace.easyweek.com.ua/",

  // Контакти
  // Адреса
  address: "вул. Минайська 18Г, Ужгород",
  mapEmbedUrl: "https://www.google.com/maps?q=%D0%B2%D1%83%D0%BB.%20%D0%9C%D0%B8%D0%BD%D0%B0%D0%B9%D1%81%D1%8C%D0%BA%D0%B0%2018%D0%93,%20%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4&output=embed",
  mapLink: "https://maps.app.goo.gl/pgFpMge8N1pjW66ZA",

  // Години роботи
  workingHours: "Пн–Вт, Чт–Сб: 10:00 – 19:30; Ср, Нд: Вихідний",

  // Соцмережі
  instagram: "https://www.instagram.com/closedspace_barbershop",

};
