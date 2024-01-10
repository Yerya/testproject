/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "БПС",
    "Гига справедливости",
    "Ва-ла лэнд",
    "Ддержимость",
    "Aкотт Пилигрим против...",
  ],
};

const advert = document.querySelectorAll(".promo__adv img"),
  genre = document.querySelector(".promo__genre"),
  bg = document.querySelector(".promo__bg"),
  promoList = document.querySelector(".promo__interactive-list"),
  promoItems = document.querySelectorAll(".promo__interactive-item");
// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
advert.forEach((element) => {
  element.remove();
});

//2)
genre.textContent = "Драма";
// genre.innerHTML = "ОМАГАД";

//3)
bg.style.background = "url('img/bg.jpg')";
bg.style.backgroundPosition = "top";

//4)
// promoList[0].textContent = "fse";
//можно очистить сначала, это не обязательно
promoList.innerHTML = "";
movieDB.movies.sort(); // отсортировали по алф порядку
// const promoListArray = [...promoList];

//ниже в случа если б не очищали
// promoItems.forEach((element, i) => {
//   element.textContent = `${i + 1}) ${movieDB.movies[i]}`;
// });

//ниже 2 варианта как это сделать

// for (let i = 0; i < movieDB.movies.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = `${i + 1}) ${movieDB.movies[i]}`;
//   promoList.append(li);
// }

//столько же будет итераций, сколько элменетов.
movieDB.movies.forEach((film, i) => {
  const li = document.createElement("li");
  li.textContent = `${i + 1}) ${film}`;
  li.classList = "promo__interactive-item";
  promoList.append(li);
});

