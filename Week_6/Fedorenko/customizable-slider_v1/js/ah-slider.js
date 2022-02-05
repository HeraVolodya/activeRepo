function ahSlider(options = {}) {

  /* Дефолтні опції */
  let defaultOptions = {
    autoScroll: true,
    scrollTimeout: 3000,
    showNavBtn: true,
    showIndicators: true,
    prevLabel: "&#10094;",
    nextLabel: "&#10095;",
    indicatorsColor: "#4d4dff",
    roundedIndicators: false,
    polygon: false,
  }

  /* Результуючі опції */
  let settings = Object.assign(defaultOptions, options);

  /* Створює колекцію всих слайдерів на сторінці */
  let sliders = document.querySelectorAll(".ah-slider");

  /* Прописує та запускає логіку функціоналу для кожного слайдеру на основі його ID */
  for (let x = 0; x < sliders.length; x++) {

    /* Отримуєм ID слайдера */
    let sliderId = sliders[x].getAttribute("id");

    /*==================АВТОСТВОРЕННЯ СТРІЛОК НАВІГАЦІЇ===========================*/
    const prev = document.createElement("span");
    prev.setAttribute("data-bs-slide", "prev");
    prev.classList.add("ah-prev");
    prev.innerHTML = settings.prevLabel;
    sliders[x].append(prev);

    const next = document.createElement("span");
    next.setAttribute("data-bs-slide", "next");
    next.classList.add("ah-next");
    next.innerHTML = settings.nextLabel;
    sliders[x].append(next);
    /*=============================================================================*/

    /*======================АВТОСТВОРЕННЯ ІНДИКАТОРІВ=============================*/
    /* Створює колекцію всих слайдів в слайдері */
    let innerSliders = document.querySelectorAll(`#${sliderId} .ah-slider_item`);

    /* Створює елемент div контейнер для індикаторів */
    const sliderDots = document.createElement("div");
    sliderDots.classList.add("ah-slider_dots");

    /* Для кожного слайда створює індикатор та додає його в кінець блоку */
    for (let y = 0; y < innerSliders.length; y++) {
      const dot = document.createElement("span");
      dot.setAttribute("data-bs-slide-to", (y + 1).toString());
      dot.classList.add("ah-slider_dots__item");

      /* Відображати круглі індикатори, якщо це встановлено в опціях */
      if (settings.roundedIndicators) {
        dot.style.width = "0.8rem";
        dot.style.height = "0.8rem";
        dot.style.borderRadius = "50%";
        dot.style.margin = "0 0.4rem";
      }
      sliderDots.append(dot);
    }

    /* Блок індикаторів додає в кінець блоку слайдера */
    sliders[x].append(sliderDots);
    /*=============================================================================*/

    /* Індекс слайда по замовчанню */
    let slideIndex = 1;

    /* Відображати фон слайдера, якщо це встановлено в опціях */
    if (settings.polygon) {
      let currentSlider = document.querySelector(`#${sliderId}`);
      currentSlider.style.backgroundColor = settings.indicatorsColor;
    }

    /* Запуск основної функції слайдера */
    showSlides(slideIndex, sliderId);

    /* Функція збільшує індекс на 1, показує наступний слайд */
    function nextSlide(sliderId) {
      showSlides(slideIndex += 1, sliderId);
    }

    /* Функция зменшує индекс на 1, показує попередній слайд */
    function prevSlide(sliderId) {
      showSlides(slideIndex -= 1, sliderId);
    }

    /* Встановлює поточний слайд */
    function currentSlide(n, sliderId) {
      showSlides(slideIndex = n, sliderId);
    }

    /* Додаємо таймер зміни слайдів */
    let timerId;

    /* Відключати автопрокрутку слайдів, якщо це встановлено в опціях */
    if (settings.autoScroll) {
      timerId = setInterval(() => nextSlide(sliderId), settings.scrollTimeout);
    }

    /* Додає функціонал по кліку на "next", зупиняє автогортання */
    const nextArrow = document.querySelector(`#${sliderId} [data-bs-slide="next"]`)
    nextArrow.addEventListener('click', function () {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
      nextSlide(sliderId);
    });

    /* Додає функціонал по кліку на "prev", зупиняє автогортання*/
    const prevArrow = document.querySelector(`#${sliderId} [data-bs-slide="prev"]`)
    prevArrow.addEventListener('click', function () {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
      prevSlide(sliderId);
    });

    /*Додає функціонал по кліку для індикаторів, зупиняє автогортання*/
    const dots = document.querySelectorAll(`#${sliderId} .ah-slider_dots__item`);
    dots.forEach(el => {
      let attrTo = el.getAttribute("data-bs-slide-to");
      el.addEventListener('click', function () {
        if (timerId) {
          clearInterval(timerId);
          timerId = null;
        }
        currentSlide(attrTo, sliderId);
      })
    });

    /* Не відображати індикатори, якщо це встановлено в опціях */
    if (!settings.showIndicators) {
      for (let a = 0; a < dots.length; a++) {
        dots[a].style.display = "none";
      }
    }

    /* Не відображати кнопки навігації, якщо це встановлено в опціях */
    if (!settings.showNavBtn) {
      prevArrow.style.display = "none";
      nextArrow.style.display = "none";
    }

    /* Основна функція слайдера */
    function showSlides(n, sliderId) {

      //* Отримуєм колекцію слайдів слайдера з sliderId */
      let slides = document.querySelectorAll(`#${sliderId} .ah-slider_item`);

      //* Отримуєм колекцію картинок слайдера з sliderId */
      let images = document.querySelectorAll(`#${sliderId} .ah-slider_item img`);

      //* Отримуєм колекцію індикаторів слайдера з sliderId */
      let dots = document.querySelectorAll(`#${sliderId} [data-bs-slide-to]`);

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

      /* Відображати полігон, якщо це встановлено в опціях */
      if (settings.polygon) {
        images[slideIndex - 1].style.clipPath = "polygon(0% 10%, 30% 0%, 95% 0%, 100% 33%, 100% 90%, 70% 100%, 5%" +
          " 100%, 0% 66%)";
      }

      /* Не відображати активними всі індикатори */
      for (i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "white";
      }

      /* Відображає активним індикатор поточного слайду */
      dots[slideIndex - 1].style.backgroundColor = settings.indicatorsColor;
    }
  }

}






