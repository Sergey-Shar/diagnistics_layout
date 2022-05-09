const swiper = new Swiper(".services__swiper", {
  slidesPerView: 4,
  spaceBetween: 50,
  speed: 500,
  slideToClikedSlide: true,
  grabCursor: true,
  touchRatio: 5,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  mousewheel: {
    invert: true,
  },
});

const swiperFirstStep = new Swiper(".step-first__swiper", {
  grabCursor: true,
  touchRatio: 5,
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
  mousewheel: {
    invert: true,
  },
});

const swiperSecondStep = new Swiper(".step-second__swiper", {
  grabCursor: true,
  touchRatio: 5,
  slidesPerView: 4,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: {
    invert: true,
  },
});

//swiperSecondStep.pagination.renderBullet('step-second__pagination')
