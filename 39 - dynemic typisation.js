//картинка полезная в notion под названием 39 - динамическая типизация
"use strict";

//to String

//1)Самый старый способ

console.log(typeof String(null)); //string
console.log(typeof String(4)); //string
//2) конкатинация(сложение строк или сложение строки с чем то), что то складываем со строкой.
//со сложением со строкой будет строка всегда

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

//ПРЕОБРАЗОВАНИЕ К СТРОКЕ

// Если один из операндов является строкой, другой операнд также преобразуется в строку.
const value = "The answer is: " + 42;
console.log(value); // "The answer is: 42"

//ПРЕОБРАЗОВАНИЕ К ЧИСЛУ

// JavaScript приводит значения к числу в арифметических операциях (кроме сложения, если один из операндов — строка),
// при использовании унарного плюса и в операторах сравнения.
const stringToNumber = "5" - "2";
console.log(stringToNumber); // 3 (number)

const unaryPlus = +"5";
console.log(unaryPlus); // 5

const comparison = "5" > 2;
console.log(comparison); // true

//ПРЕОБРАЗОВАНИЕ К БУЛЕАН

// В логических операциях, таких как && и ||, значения приводятся к логическому типу.
const truthyOrFalsy = "hello" || "";
console.log(truthyOrFalsy); // "hello"

const truthyAndFalsy = "hello" && "";
console.log(truthyAndFalsy); // ""

//ПРЕОБРАЗОВАНИЕ ОБЪЕКТОВ В ПРИМИТИВЫ

// Когда объект (включая массивы и функции) участвует в операции, приводящей к примитивному типу,
// вызываются методы valueOf() и toString() объекта для получения примитивного значения.
const arrayToString = [1, 2, 3].toString();
console.log(arrayToString); // "1,2,3"

const objectToString = { a: 1 }.toString();
console.log(objectToString); // "[object Object]"

//ОСОБЫЙ СЛУЧАЙ: МАСИИВЫ И ЧИСЛА

// При сложении массива и числа, массив сначала преобразуется в строку,
// а затем происходит конкатенация со строковым представлением числа.
const arrayPlusNumber = [1, 2, 3] + 4;
console.log(arrayPlusNumber); // "1,2,34"

/* Преобразование к числу */

// undefined преобразуется в NaN
console.log(Number(undefined)); // NaN

// Если строка не может быть преобразована в допустимое число, результатом будет NaN
console.log(Number("hello")); // NaN
console.log(Number("false")); // NaN

//пустая строка преобразуется в 0
console.log(Number("")); // 0

// null преобразуется в 0
console.log(Number(null)); // 0

// true и false преобразуются в 1 и 0 соответственно
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Строка преобразуется в число, которое она представляет
console.log(Number("123")); // 123
