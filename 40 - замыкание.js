//более подробный разбор замыкания в Notion, название 40 - замыкание
//счетчик
"use strict";
function createCounter() {
  let counter = 0;

  const myFunction = function () {
    counter = counter + 1; //counter += 1
    return counter; //создаем замыкание, которое является частью этой внутренней функции, эта функция хранит ссылку на counter, То есть в лексическом окружении будет сохранена ссылка на эту переменную.
  };

  return myFunction; //возвращаем содержимое переменной myFunction. Локальная область выполнения, то есть внутреннее лексическое окружение у этой функции уничтожается, тк больше не надо, но наружу возвращаем описание этой функции, то есть что происходит внутри, то, на что она будет ссылаться.
}

const increment = createCounter(); //в инкремент как бы кладем возвращаемую функцию
const c1 = increment(), //вызывем новую функцию инкремент, создавая новое лексическое окружение, перемещаемся в couner, смотрит, существует ли данная переменная внутри функции? Нет. Но когда возвращали функцию myFunction, она сохранила ссылку на внушнюю область видимости, инкремент ее до сих пор хранит, в итоге 0+1, после чего возвращаем значение 1.
  c2 = increment(), //перемещаемся в counter, внутри myFunction counter помнит всю ту же ссылку на counter из внешней области которая хранится в его замыкании, и она равна единице. 1+1=2, возвращается двойка.
  c3 = increment(); //Тоже самое, будет 3.

console.log(c1, c2, c3);

//когда функция myFunction создается, она сохораняет ссылки, которые были ей доступны во время создания

//Ниже фактически тоже замыкание (Определение: Замыкание - функция, которая запоминает свои внешние переменные и может получить к ним доступ).
let counter = 0;

const myFunction = function () {
  counter = counter + 1; //counter += 1
  return counter; //создаем замыкание, которое является частью этой внутренней функции, эта функция хранит ссылку на counter, То есть в лексическом окружении будет сохранена ссылка на эту переменную.
};

const c1 = myFunction();
const c2 = myFunction();
const c3 = myFunction();
console.log(c3);
