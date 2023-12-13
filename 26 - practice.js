"use strict";

/*
конвертор курса, curr определяем вне функции, а не в функции для более удобонго
отслеживания переменной curr, функция становится более универсальной.
Также, у нас может быть много валют, не только юсдт, поэтому, чтобы не создавать каждый
раз отдельную функцию, вынесли переменные usd и eur отдельно.
*/
const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
  console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);

/*
Важность return. Функция выше занимается тем, что возвращает результат, 
но дальше она его никуда не передает, в 4 строке мы выполнили основное действие и все,
то есть тут достаточно console.log.

Допустим, полученное число будет вычтено из скидки.
*/

const discount = 0.9;

function promotion(result) {
  console.log(result * discount);
}
//тут нам надо понять, как результат одной функции, передать в доругую, поможет return
const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
  console.log("КУКУ епт"); // Но желательно чтоб функция выполняло одно конкретное действие
  return curr * amount;
}

function promotion(result) {
  console.log(result * discount);
}

promotion(convert(500, usdCurr));

// либо через промежуточный результат

res = convert(500, usdCurr);

promotion(res);

// return можно использовать, чтобы закончить не только цикл, но и всю функцию.

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return; //если вместо return будет continue, то не пропустит шаг, тк после вывод continiu
  }
  console.log("Done");
}

test();
