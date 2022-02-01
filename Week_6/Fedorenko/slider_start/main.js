const imgs = [
  "https://shupliak.art/pictures/hidden-images_stonehenge.jpg",
  "https://shupliak.art/pictures/hidden-images_winter-dream.jpg",
  "https://shupliak.art/pictures/hidden-images_seagull.jpg",
  "https://shupliak.art/pictures/hidden-images_to-native-nests.jpg",
  "https://shupliak.art/pictures/hidden-images_kiss-of-the-muse.jpg"
];

/* Додаємо в DOM картинки з масиву imgs */
for (let a = 0; a < imgs.length; a++) {
  const image = document.createElement("img");
  image.setAttribute("src", imgs[a]);
  image.setAttribute("alt", `${a + 1} slide`);
  image.classList.add("slide");
  document.querySelector('.nav-right').before(image);
}

/* Створює колекцію всих картинок */
let slides = document.querySelectorAll(".slide");

/* Визначаємо блок лічильника */
const counter = document.querySelector('.actual-slide');

/* Індекс слайда по замовчанню */
let slideIndex = 1;

/* Запуск основної функції слайдера */
showSlides(slideIndex);

/* Додаємо таймер зміни слайдів */
let timerId = setInterval(() => nextSlide(), 2000);

/* Функція збільшує індекс на 1, показує наступний слайд */
function nextSlide() {
  showSlides(slideIndex += 1);
}

/* Функция зменшує індекс на 1, показує попередній слайд */
function prevSlide() {
  showSlides(slideIndex -= 1);
}

/* Додає функціонал по кліку на "next", зупиняє автогортання */
document.querySelector('.nav-right').addEventListener('click', function () {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  nextSlide();
});

/* Додає функціонал по кліку на "prev", зупиняє автогортання*/
document.querySelector('.nav-left').addEventListener('click', function () {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  prevSlide();
});


/* Основна функція слайдера */
function showSlides(n) {

  /* При кліку next на останньому слайді переход на перший */
  if (n > slides.length) {
    slideIndex = 1
  }

  /* При кліку prev першому слайді переход на останній */
  if (n < 1) {
    slideIndex = slides.length
  }

  /* Не відображати всі слайди */
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  /* Відображає поточний слайд */
  slides[slideIndex - 1].style.display = "block";

  /* Відображає номер поточного слайду */
  counter.innerHTML = `${slideIndex}/${slides.length}`;

}
