import "normalize.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./styles/_root.scss";

import "./index.html";

import Swiper, { Navigation, Pagination } from 'swiper';

// // core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
//   ...
// });

var offerSwiper = new Swiper(".offerSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation, Pagination],
  breakpoints: {
    10:{
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
  }

});

var trendsSwiper = new Swiper(".trendsSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  // { nameclass: { wrapperClass: 'view-content', }, },
  // classNames: 'swiper-slide_trends',
  // slideClass: 'swiper-slide_trends',
  // wrapperClass: 'swiper-wrapper_trends',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation, Pagination],
  breakpoints: {
    10:{
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
  }
});

function doTest(){
  console.log("offerSwiper:", offerSwiper)
}