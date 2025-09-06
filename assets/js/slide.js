const swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1114: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
