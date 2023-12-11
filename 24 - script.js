"use strict";
// Код возьмите из предыдущего домашнего задания

// const lastSeenFilm1 = prompt("Один из последних просмотренных фильмов?"),
//   whatRaiting1 = +prompt("На сколько оцените его?");

// const lastSeenFilm2 = prompt("Один из последних просмотренных фильмов?"),
//   whatRaiting2 = +prompt("На сколько оцените его?");

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

/* 
2) используем do while  тк если использовать обычный while, условие в которых переменные еще не
проинецилизированны не будет выполнено, а do while выыполняет код хотя бы один раз, что нам и надо.
! будет возвращать true, если переменные будут возвращать false Значения такие как null, пустая строка и тд.
*/

const filmResult = {};
let lastSeenFIlm, whatRaiting;
for (let i = 0; i < 2; i++) {
  do {
    lastSeenFIlm = prompt("Один из последних просмотренных фильмов?");
    whatRaiting = +prompt("На сколько оцените его?");
  } while (
    !lastSeenFIlm ||
    !whatRaiting ||
    lastSeenFIlm.length >= 50 ||
    whatRaiting.length >= 50
  );
  filmResult[lastSeenFIlm] = whatRaiting;
}
console.log(filmResult);

/* 
более оптимальное решение, если у нас не выполняется условие то есть пользователь ввел пустую строку и тд то
мы возвращаемся на одну итерацию назад
*/

const filmResult = {};
for (let i = 0; i < 2; i++) {
  const lastSeenFIlm = prompt("Один из последних просмотренных фильмов?");
  const whatRaiting = +prompt("На сколько оцените его?");

  lastSeenFIlm && whatRaiting && lastSeenFIlm.length < 50
    ? (filmResult[lastSeenFIlm] = whatRaiting)
    : i--;
}
console.log(filmResult);

/* 
3)
*/
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
console.log(personalMovieDB["count"]);

personalMovieDB["count"] < 10
  ? console.log("Просмотрено довольно мало фильмов")
  : personalMovieDB["count"] >= 10 && personalMovieDB["count"] <= 30
  ? console.log("Вы классический зритель")
  : console.log("Вы киноман");

/* 
4) 
*/
let start = 0;
const filmResult2 = {};
let lastSeenFIlm2, whatRaiting2;
while (start < 2) {
  do {
    lastSeenFIlm2 = prompt("Один из последних просмотренных фильмов?");
    whatRaiting2 = +prompt("На сколько оцените его?");
  } while (
    !lastSeenFIlm2 ||
    !whatRaiting2 ||
    lastSeenFIlm2.length >= 50 ||
    whatRaiting2.length >= 50
  );
  filmResult2[lastSeenFIlm2] = whatRaiting2;
  start++;
}
console.log(filmResult2);
//
let start3 = 0;
const filmResult3 = {};
let lastSeenFIlm3, whatRaiting3;
do {
  do {
    lastSeenFIlm3 = prompt("Один из последних просмотренных фильмов?");
    whatRaiting3 = +prompt("На сколько оцените его?");
  } while (
    !lastSeenFIlm3 ||
    !whatRaiting3 ||
    lastSeenFIlm3.length >= 50 ||
    whatRaiting3.length >= 50
  );
  filmResult3[lastSeenFIlm3] = whatRaiting3;
  start3++;
} while (start3 < 2);
console.log(filmResult3);
