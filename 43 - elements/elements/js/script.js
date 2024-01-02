"use strict";

//DOM - document object model, объектная модель документа.

//создадим вместилище информации, туда поместим элемент, который хотим получить со страницы
//их можно разделить на те, которые появились давно и недавно. Начнем с старых.
const box = document.getElementById("box"); //допустим через уникальный идентификатор box, должен быть один

console.log(box); //внутри консоли vs code нельзя

//также можно по тегу, тк будет несколько тегов, они соберутсо коллекцией в псевдо массив (тоже самое что массив, но без всех методов)
//если тег только один коде, то все ранво будет коллеция из одного элемента

//Это важный момент, тк нельзя обратиться к массиву и например поменять цвет кнопки внутри, надо понимать, что это коллекция
const btns = document.getElementsByTagName("button"); //в btns положили псевдо массив, а не один какой то элемент
console.log(btns);
//чтобы взять конкретную кнопку, надо указать индекс элемента, который нас интересует.
const btn = document.getElementsByTagName("button")[1];
console.log(btn);
//второй способ, когда хочу уже использовать кнопку, можно сделать
console.log(btns[3]);

//можно использовать классы, точно также возвращается коллекция
const circles = document.getElementsByClassName("circle");

console.log(circles);

//лайфхак чтобы запомнить где возвращается элемент а где коллекция -
//getElementsByClassName и document.getElementsByTagName - во мн. числе,
//а document.getElementById - в единственном числе.

//ниже более современные методы.

//внутрь скобок указываем css селектор, абсолютно любой, это может быть
//id через решетку, класс, вложенность классов и тд, атрибуты
const hearts = document.querySelectorAll(".heart");
console.log(hearts);
//можно также использовать метод foreach
hearts.forEach((item, i) => {
  console.log(item);
});
//получаем коллекцию

//с помощью queryselector получаем первый элемент, выгодно использовать с уникальными селекторами.

const oneHeart = document.querySelector(".heart");
console.log(oneHeart);

const wrapper = document.querySelector(".wrapper");
//////////////////////////////////////////////
// console.dir(box);

box.style.backgroundColor = "blue";
box.style.width = "500px";

btns[1].style.borderRadius = "100%";

circles[0].style.backgroundColor = "green";

//ниже чтобы несколько присваивать сразу свойсты

box.style.cssText = "background-color: green; width: 500px"; //записываем текст, который хотим в инлайн стили поместить
//полезно если например какие то параметры рассчитывать динамически
//box.style.cssText = `background-color: ${green}; width: ${num}px`;

//чтобы сразу над несколькими элементами произвести действия, можно использовать
//цикл, for, for of какой нибудь, foreach

hearts.forEach((item) => {
  item.style.display = "flex";
});

for (let i = 0; i < btns.length; i++) {
  btns[i].style.backgroundColor = "pink";
}

//ниже создали элемент и он существует только
//внутри js
const div = document.createElement("div");
//этот метод ниже используется редко
const text = document.createTextNode("Тут был я");

//Элементы существуют в js, чтобы стилизовать обычно
//лучше модифицировать css классы (добавить/удалить/проверять на содержание/переключать/определение количества примененных классов)
div.classList.add("black"); //добавляес класс
//Ниже добавляем див в конец body.
document.body.append(div); //в самый конец добавляем див

// wrapper.append(div); в конец добавляет
wrapper.prepend(div);

hearts[0].before(div); //добавляет перед первым элементов сердечек див
hearts[0].after(div); //добавляет после первого элемента сердечек див

circles[1].remove(); //удаляет второй кружок

//замена элементов

hearts[1].replaceWith(circles[0]); //второе сердце заменили первым кружком

//редактирование HTML кода

div.innerHTML = "<h1>Hello Man</h1>"; //используется с html структурой

//Благодаря этому можно динамически изменять структуру сайта

// div.textContent = "Hello"; //работает уже только с текстом, без тега.
//сделано для безопасности, чтобы если что то пользователь вводил,
//не сломал бы верстку.

//как вставить кусочек html кода

div.insertAdjacentHTML("beforeend", "<h2>Hi</h2>"); //2 аргумента, первый спец. слово, второй -
//тот html, который хотим вставить.
//beforebegin - перед элементом
//afterbegin - после элемента
//beforeend - перед внутри элемента
//afterend - после внутри элемента
