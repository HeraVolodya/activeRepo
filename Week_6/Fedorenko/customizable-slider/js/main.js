document.addEventListener("DOMContentLoaded", function (event) {
  ahSlider({
    autoScroll: true,       //автогортання слайдів, default true
    scrollTimeout: 1000,    //час зміни слайдів, default 3000
    showIndicators: true,   //показ індикаторів, default true
    showNavBtn: true,       //показ кнопок навігації, default true
    prevLabel: "prev",      //ярлик для кнопки "попередній", default &#10094;  <
    nextLabel: "next",      //ярлик для кнопки "наступний",  default &#10095;  >
    indicatorsColor: "red"  //колір активних індикаторів, default #4d4dff
  });
});





