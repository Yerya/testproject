//картинка полезная в notion под названием 39 - динамическая типизация
"use strict";

//to String

//1)Самый старый способ

console.log(typeof String(null)); //string
console.log(typeof String(4)); //string
//2) конкатинация(сложение строк или сложение строки с чем то), что то складываем со строкой.
//со сложением со строкой будет строка

console.log(typeof (null + ""));
const a = null;
const b = a.toString();
console.log(typeof b);

//На реальном примере:

const num = 5;

console.log("https://vk.com/catalog/" + num); //устаревший способ, тк есть интерпаляция, но для примера

//можно формировать стили при помощи js, надо будет передавать стили в виде строки

const fonSize = 26 + "px";

// To Number
//1) Этот способ не используют обычно
console.log(typeof Number("4"));

//2)унарный плюс, куда лучше
console.log(typeof +"4");

//3)с помощью методов чисел, тут например обрезается px и в 10 ричной системе
console.log(typeof parseInt("15px", 10));

//тк промпт принимает стринги как и все модальные числа.
//а если хочу не давать пользователю вводить не числа, то пригодятся регулярные выражения
//все, что получаем от пользователя - это строка.
let answ = +prompt("Hello", "");

// to boolean

//false ниже
// false, 0, "", null, undefined, NaN, все остальное будет true

let switcher = null; //переключатель ничего не содержит, потом поменяет свое значение и будет влиять на программу.

if (switcher) {
  console.log("workig");
}

switcher = 1; //На одном этапе сайта появляется новый элемент свитчера, чтобы

if (switcher) {
  console.log("workig");
} //во втором случае работает

//для проверки или перевод в булеан тип.
console.log(typeof Boolean("4"));

console.log(typeof !!"4");
