// SWIPER

var swiper = new Swiper(".about-us-google-review-bar", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000, // koliko stoji jedan slajd prije tranzicije
  },
  speed: 1500, // sporija tranzicija između slajdova
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
