document.addEventListener("DOMContentLoaded", function (event) {
  ahSlider("slider-1",
    //масив об`єктів контенту слайдів
    [
      {
        image: 'https://images.unsplash.com/photo-1640562329119-efcaa3dcf18d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'Slide title 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at,dolorem\n' +
          'dolores doloribus, eligendi enim eos iure maiores minima minus nam, quod sequi voluptatum.',
      },
      {
        image: 'https://images.unsplash.com/photo-1486140525285-12e658d9ac0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Slide title 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at,dolorem\n' +
          'dolores doloribus, eligendi enim eos iure maiores minima minus nam, quod sequi voluptatum.',
      },
      {
        image: 'https://images.unsplash.com/photo-1523978591478-c753949ff840?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'Slide title 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at,dolorem\n' +
          'dolores doloribus, eligendi enim eos iure maiores minima minus nam, quod sequi voluptatum.',
      },
    ],
    {
      autoScroll: true,            //автогортання слайдів, default true
      scrollTimeout: 1000,         //час зміни слайдів, default 3000
      showIndicators: true,        //показ індикаторів, default true
      showNavBtn: true,            //показ кнопок навігації, default true
      prevLabel: "prev",           //ярлик для кнопки "попередній", default &#10094;  <
      nextLabel: "next",           //ярлик для кнопки "наступний",  default &#10095;  >
      indicatorsColor: "darkblue", //колір активних індикаторів, default #4d4dff
      roundedIndicators: true,     //круглі індикатори, default false
      polygon: true,               //рамка полігону з фоном кольору індикаторів
    });

  ahSlider("slider-2",
    //масив об`єктів контенту слайдів
    [
      {
        image: 'img/slide1.jpg',
        title: 'Slide title 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at,dolorem\n' +
          'dolores doloribus, eligendi enim eos iure maiores minima minus nam, quod sequi voluptatum.',
      },
      {
        image: 'img/slide2.jpg',
        title: 'Slide title 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at,dolorem\n' +
          'dolores doloribus, eligendi enim eos iure maiores minima minus nam, quod sequi voluptatum.',
      },
      {
        image: 'img/slide3.jpg',
        title: 'Slide title 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at,dolorem\n' +
          'dolores doloribus, eligendi enim eos iure maiores minima minus nam, quod sequi voluptatum.',
      },
      {
        image: 'img/slide4.jpg',
        title: 'Slide title 4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at,dolorem\n' +
          'dolores doloribus, eligendi enim eos iure maiores minima minus nam, quod sequi voluptatum.',
      },
    ],
    {
      indicatorsColor: "orange",   //колір активних індикаторів, default #4d4dff
    });
});





