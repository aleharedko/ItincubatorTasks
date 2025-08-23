/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
]

let currentIndex = 0; //создаю переменную на текущий индекс
const sliderImg = document.getElementById('web-tech-image'); // ищу слайдер по яйди
sliderImg.src = WEB_TECH_IMAGES[currentIndex]; //устанавливаю первое изображение в слайдере

const buttonNextImg = document.getElementById('next-button');  //ищу по id кнопку вперед
const buttonPrevImg = document.getElementById('prev-button');  //ищу по id кнопку назад

buttonNextImg.addEventListener('click', () => { // создаю событие по клику
  currentIndex++;                               // перехожу на следующий индекс в массиве
  if (currentIndex >= WEB_TECH_IMAGES.length) { // проверяю, если индекс дошел до последней картинке, то возвращаюсь на первую
    currentIndex = 0;                           // устанавливаю инндекс текукщего элемента
  }
  sliderImg.src = WEB_TECH_IMAGES[currentIndex];  // вызываю текущий индекс
});

buttonPrevImg.addEventListener('click', () => { // создаю событие по клику
  currentIndex--;                               // перехожу наза по индексу в массиве
  if (currentIndex < 0) {                       // проверяю, если индекс дошел до первой картинке, то возвращаюсь на последнюю
    currentIndex = WEB_TECH_IMAGES.length - 1;  // устанавливаю инндекс текукщего элемента
  }
  sliderImg.src = WEB_TECH_IMAGES[currentIndex]; // вызываю текущий индекс
});


// let currentIndex = 0; //создаю переменную на текущий индекс
// const sliderImg = document.getElementById('web-tech-image'); // ищу слайдер по яйди
// sliderImg.src = WEB_TECH_IMAGES[currentIndex]; //устанавливаю первое изображение в слайдере

// const buttonNextImg = document.getElementById('next-button');  //ищу по id кнопку вперед
// const buttonPrevImg = document.getElementById('prev-button');  //ищу по id кнопку назад

buttonNextImg.addEventListener('click', () => { // создаю событие по клику
  currentIndex++;                               // перехожу на следующий индекс в массиве
  if (currentIndex >= WEB_TECH_IMAGES.length) { // проверяю, если индекс дошел до последней картинке, то возвращаюсь на первую
    currentIndex = 0;                           // устанавливаю инндекс текукщего элемента
  }
  sliderImg.src = WEB_TECH_IMAGES[currentIndex];  // вызываю текущий индекс
});

buttonPrevImg.addEventListener('click', () => { // создаю событие по клику
  currentIndex--;                               // перехожу наза по индексу в массиве
  if (currentIndex < 0) {                       // проверяю, если индекс дошел до первой картинке, то возвращаюсь на последнюю
    currentIndex = WEB_TECH_IMAGES.length - 1;  // устанавливаю инндекс текукщего элемента
  }
  sliderImg.src = WEB_TECH_IMAGES[currentIndex]; // вызываю текущий индекс
});