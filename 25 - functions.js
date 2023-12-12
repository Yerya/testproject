"use strict";

/*
Функции позволяют значительно упрощают действия, структура делает все за нас.

В круглых аргументы, в фигурных действия. Необходимо вызвать, чтобы она работала.

Негласное правило - глагол с препиской того, какое выполняется действие.

Function declaration существует еще до того, как наш код запустится. 
Например, var тоже существует еще до того, как мы можем ее объявить

То есть первым делом загружается html страница, доходим до script, 
потом браузер пробегает весь код в поисках var и function declaration, 
они объявляются и только потом код опять по порядку проходится.

После function declaration точку с запятой ставить не надо, тк не создается переменной
*/

function showFirstMessage() {
  console.log("Hello World");
}

showFirstMessage();

//

function showFirstMessage(text) {
  console.log(text);
}

showFirstMessage("Hello Word");

/*
Область видимости, переменную num не видно вне
области видимости функции где объявили. Переменные, созданные с помощью let и const 
существуют только внутри блока кода функции, где объявили. То есть взаимодействуем с ней локально.
*/
function showFirstMessage(text) {
  console.log(text);
  let num = 20;
}

showFirstMessage("Hello Word");
// console.log(num); будет ошибка

/*
Но! если мы объявляем переменную в глобальной области видимости, а потом
просто переиспользуем внутри тех же функций, то она будет доступна.
*/
let num = 20;
function showFirstMessage(text) {
  console.log(text);
  num = 30;
}

showFirstMessage("Hello Word");
console.log(num);

/*
Замыкание Функций.

Для начала рассмотрим код, где глобально создается переменная num и внутри функции, 
они объявлены и там и там, поэтому разные переменные. Соответственно, в функции сначала 
создается переменная text, после чего идем сверху вниз, доходим до console.log(num),
функция идет наверх в поисках этой переменной, находит ее, она равна 30.

*/

let num = 20;
function showFirstMessage(text) {
  console.log(text);
  let num = 30;
  console.log(num);
}

showFirstMessage("Hello Word");
console.log(num);

/*
НО! если мы уберем из функции создание своей переменной num, то функция пойдет на уровень
выше в поисках переменной num и найдет ее в глобальной области видимости. То есть
всегда если в себе перменная не находит какие то переменные, то она идет на уровень выше.

*/
let num = 20;
function showFirstMessage(text) {
  console.log(text);
  console.log(num);
}

showFirstMessage("Hello Word");
console.log(num);

/*
Теперь к примеру замыкания.
Замыканик функции - это сама функция, вместе со всеми внешними переменными, которые
ей доступны.

замыкание позволяет функции "запомнить" свое окружение, включая все переменные, 
которые были доступны ей в момент создания. Это позволяет функциям иметь "приватные" 
переменные, которые сохраняются между вызовами функции.

В этом примере innerFunction является замыканием, потому что она имеет доступ к переменной 
outerVariable из своего внешнего (родительского) лексического окружения, даже после того, как outerFunction 
завершила выполнение.
*/
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("outerVariable:", outerVariable);
    console.log("innerVariable:", innerVariable);
  };
}

const newFunction = outerFunction("outside"); // как бы запомнили переменную outside, при этом возвращается функция innerFunction
newFunction("inside"); // logs: outerVariable: outside, innerVariable: inside

/*
Функция может вернуть какое то значение с помощью return, как только функция видит
return она прекращает свое действие. return позволяет вернуть значение во внешний scope,
когда из функции возвращам значение, оно поподает потом в console.log и отображается в консоли.
Когда интерпретатор JavaScript встречает return, он немедленно прекращает выполнение функции и
 возвращает указанное значение. Это значение затем может быть использовано в другом месте кода.

*/

function calc(a, b) {
  return a + b;
}

console.log(calc(4, 3));
console.log(calc(5, 1));

const pam = calc(3, 5);
console.log(pam); // можем сохранить в переменную
//
function calc(a, b) {
  console.log(a + b);
}

calc(5, 1);

// и ниже еще пример замыкания наглядный. То есть первая функция вернула при вызове вторую функцию, при этом сохранилась переменная из за замыкания.
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    return outerVariable + innerVariable;
  };
}

const newFunction = outerFunction(5); // outerFunction возвращает innerFunction
console.log(newFunction(3)); // вызываем innerFunction, которая возвращает сумму 5 и 3

/*
код после return называется Unreachable, тк функция завершает действие после return. 
Обычно return - окончание функции, но может также быть и возвращение значений наружу
*/

function ret() {
  let num = 50;
  // какой то код, например по работа с зп и тд и в конце возвращается результат работы этой функции
  return num;
}
const anotherNum = ret();
console.log(anotherNum); //50 вышло наружу

/*
function expression.
В отличие от function declaration, создается только тогда, когда доходит поток до кода,
можно вызвать только после объявления, тк работает как переменная.
*/

const logger = function () {
  console.log("Hello");
};

logger();

/*
Стрелочная функция.
Такая функция не имеет конткста вызова (this), поэтому не везде ее можнно использовать.
*/
const calc = (a, b) => a + b;
// или const calc = (a, b) => {return a + b}; если фунция не в одну строку.
// или, если один аргумент, то const calc = a => a + b;
