/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

// toggle - переключать

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// Код возьмите из предыдущего домашнего задания
"use strict";

// start();

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: true,
  start: function () {
    //перенесли функцию start и остальные в метод.
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");

    while (!personalMovieDB.count) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
    }
  },

  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let lastSeenFIlm = prompt("Один из последних просмотренных фильмов?");
      let whatRaiting = +prompt("На сколько оцените его?");

      if (lastSeenFIlm != null) {
        lastSeenFIlm = lastSeenFIlm.trim();
      }

      lastSeenFIlm && whatRaiting && lastSeenFIlm.length < 50
        ? (personalMovieDB.movies[lastSeenFIlm] = whatRaiting)
        : i--;
    }
  }, // но как удалять, если пользователь будет вводить пробелы? Воспользуемся методом trim - удаляет пробелы с начала до конца строки

  detectPersonalLevel: function () {
    personalMovieDB["count"] < 10
      ? console.log("Просмотрено довольно мало фильмов")
      : personalMovieDB["count"] >= 10 && personalMovieDB["count"] <= 30
      ? console.log("Вы классический зритель")
      : console.log("Вы киноман");
  },

  showMyDB: function () {
    if (personalMovieDB.private === false) {
      //если бы было ==, то в случае 0, пустой строки и тд приводил бы к типу false тоже
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function () {
    personalMovieDB["private"] = !personalMovieDB["private"];
    /*Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
    переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.*/
  },

  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}?`); //trim не выполнится для null в случае отмены если его сюда вписать, поэтому препишем код и добавим ниже проверку на null.
      if (genre != null) {
        genre = genre.trim(); //// перезаписываем переменную genre результатом работы trim(), тк trim не изменяет исходную
      }
      if (!genre) {
        //пробел все еще true, поэтому напишем trim чтобы превращал в пустую строку
        console.log("Вы ввели некорректные данные или не ввели их вообще");
        i--;
      }
      personalMovieDB.genres.push(genre);
    }
    personalMovieDB.genres.forEach(
      (item, i) => {
        console.log(`Любимый жанр №${i + 1} - это ${item}`);
      } //i + 1 тк индекс с 0//i - элемент массива, item - свойство(значение).
    );
  },
};

//в Notion под названием practice 37 будет доп инфа как сделать writeYourGenres через сплит а ля сразу введите жанры.
//по юникод классификации верхний регистр сначала идет потом ниже, поэтому при sort() Надо это учитывать, тк например может быть Бабушка, ангел (на первом месте бабушка из за регистра)
//поэтому можно использовать toLowercase() чтобы этого избежать
