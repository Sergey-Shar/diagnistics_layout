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

const swiperServicesMobile = new Swiper(".services__swiper_mobile", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 500,
  slideToClikedSlide: true,
  grabCursor: true,
  touchRatio: 5,
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
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: {
    invert: true,
  },
});

const swiperSecondStepMobile = new Swiper(".step-second__swiper_mobile ", {
  grabCursor: true,
  touchRatio: 5,
  slidesPerView:1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: {
    invert: true,
  },
});


const swiperTeam = new Swiper('.team__swiper',{
  slidesPerView: 5,
  loop: true,
  loopFillGroupWithBlank: true,
  slideToClikedSlide: true,
  grabCursor: true,
  touchRatio: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})
