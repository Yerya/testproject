/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

const movieDB = {
  movies: [
    "БПС",
    "Гига справедливости",
    "Ва-ла лэнд",
    "Ддержимость",
    "Акотт Пилигрим против...",
  ],
};

const moviesArray = movieDB.movies,
  advert = document.querySelectorAll(".promo__adv img"),
  genre = document.querySelector(".promo__genre"),
  bg = document.querySelector(".promo__bg"),
  promoList = document.querySelector(".promo__interactive-list"),
  promoItems = document.querySelectorAll(".promo__interactive-item"),
  form = document.querySelector("form.add"),
  input = document.querySelector(".adding__input"),
  checkbox = document.querySelector("[type='checkbox']"),
  deleteButtons = document.querySelectorAll(".delete"),
  filmButton = document.querySelector("button");

advert.forEach((element) => {
  element.remove();
});

const makeChanges = () => {
  genre.textContent = "Драма";
  bg.style.background = "url('img/bg.jpg')";
  bg.style.backgroundPosition = "top";
};

const sortArr = (arr) => {
  arr.sort(); // отсортировали по алф порядку
};

function createMovieList(films, parent) {
  //указываем какой родительский блок будет использовать фильмы
  parent.innerHTML = ""; //очищаем список, чтобы убрать старое отображение фильмов
  films.forEach((film, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}) ${film}`;
    li.classList = "promo__interactive-item";
    parent.append(li);

    const div = document.createElement("div");
    div.classList = "delete";
    li.append(div);
  });

  promoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      const parentItem = e.target.parentElement.textContent.slice(3); //сохраняем текст без скобок
      moviesArray.forEach((film, i) => {
        //проходимся по фильмам в поисках
        if (film.includes(parentItem)) {
          //если совпало название, тогда берем индекс и удаляем из массива
          moviesArray.splice(i, 1);
        }
      });
      createMovieList(moviesArray, promoList);
    }
  });
}

///

//тип у button в форме по умолчанию submit, значит отправка формы происходит как при нажатии ентер в инпути, так и при нажатии на кнопку в форме.
form.addEventListener("submit", (e) => {
  e.preventDefault(); //предотвращаем перезагрузку страницы.
  const favorite = checkbox.checked; //отмеченный чекбокс, либо да либо нет, как буллиновое значение
  if (favorite) {
    console.log("Добавляем любимый фильм");
  }
  let newFilm = input.value;
  if (newFilm.trim()) {
    if (newFilm.length >= 21) {
      newFilm = newFilm.slice(0, 22) + "...";
    }
    //проверка на нормальное значение и пробелы в начале и в конце убираются
    moviesArray.push(newFilm); //добавили элемент
    sortArr(moviesArray);
    createMovieList(moviesArray, promoList);
  } else {
    alert("Введите корректное значение");
  }
  //   form.reset(); //сбросить форму
  e.target.reset();
});

// deleteButtons.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     const parentItem = e.target.parentElement;
//     alert(parentItem);
//   });
// });

//делегирование событий. Это означает, что вместо того чтобы назначать обработчик событий каждому элементу .delete по отдельности, вы назначаете один обработчик событий родительскому элементу
//The includes() method returns true if a string contains a specified string.
//для именно дом элементов и их классами используют contains
//Обрабатываем события, которые произошли на дочерних.

makeChanges();
sortArr(moviesArray);
createMovieList(moviesArray, promoList);
