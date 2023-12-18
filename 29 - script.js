/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

//оборачиваем в функции, чтобы потом использовать по назначению, например пользователь нажал на кнопку уровня своего и тд.

"use strict";

// Код возьмите из предыдущего домашнего задания
// проверка на отмену промпта, пустую строку или не число
let numberOfFilms;
//завернули в функцию тк попросту удобно, хочешь используй, хочешь нет
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?"); //иначе вернет NaN, если ввести не число, оставили несмотря на проверку, чтобы возвращалось число а не строка

  while (!numberOfFilms) {
    //сразу проверка, если введенное значение false, то продолжаем выводить промпт. Выполняется, пока условие валидно. ! чтобы false вхождения проходили
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  } //условие до которого будет выполняться, иначе будет закончен, isNaN(numberOfFilms) - если внутри не число, то он возвращает правду, также можно numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
console.log(personalMovieDB["count"]);

personalMovieDB.hey = "abobus";
// personalMovieDB.movies[lastSeenFilm1] = whatRaiting1;
// personalMovieDB.movies[lastSeenFilm2] = whatRaiting2;

// Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
// возвращаем пользователя к вопросам опять (в моем случае также нельзя ноль ставить)
//начинается с глагола
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const lastSeenFIlm = prompt(
      "Один из последних просмотренных фильмов?"
    ).trim();
    const whatRaiting = +prompt("На сколько оцените его?").trim();

    lastSeenFIlm && whatRaiting && lastSeenFIlm.length < 50
      ? (personalMovieDB.movies[lastSeenFIlm] = whatRaiting)
      : i--;
  }
} // но как удалять, если пользователь будет вводить пробелы? Воспользуемся методом trim - удаляет пробелы с начала до конца строки

rememberMyFilms();

function detectPersonalLevel() {
  personalMovieDB["count"] < 10
    ? console.log("Просмотрено довольно мало фильмов")
    : personalMovieDB["count"] >= 10 && personalMovieDB["count"] <= 30
    ? console.log("Вы классический зритель")
    : console.log("Вы киноман");
}

// detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.private === false) {
    //если бы было ==, то в случае 0, пустой строки и тд приводил бы к типу false тоже
    console.log(personalMovieDB);
  }
}
/* отобразится в браузере с уже добавленными жанрами ниже, тк когда вы выводите объект в консоли с помощью console.log(), 
браузер сохраняет ссылку на этот объект, а не его текущее состояние. Это означает, что когда вы раскрываете объект в консоли, 
вы видите его текущее (на момент раскрытия) состояние, а не состояние на момент вызова console.log().
 */
showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}?`);
    // personalMovieDB.genres[i - 1] = genre; // в формате ключ значение
    personalMovieDB.genres.push(genre);
  }
}
writeYourGenres();
