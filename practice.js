"use strict";

const obj = {
  name: "Alex",
  age: 23,
  isMarried: true,
};

obj[3] = 3;
// console.log(obj.age);
console.log(obj);
("new change");

const emptyArr = [];

console.log(emptyArr);

console.log(typeof null);

console.log(4 + "5");

let a = 5;
let b = 5;
a--, b++;
console.log(a, b);
console.log(2 + 2 * 2 !== "6");

// условия

const num = 101;

if (num <= 60) {
  console.log("too small");
} else if (num > 100) {
  console.log("too big");
} else {
  console.log("ok");
}

//тоже самое через тернарные операторы

num <= 60
  ? console.log("too small")
  : num > 100
  ? console.log("too big")
  : console.log("ok");

//тоже самое через switch case, используя хак через true
switch (true) {
  case num <= 60:
    console.log("too small");
    break;
  case num > 100:
    console.log("too big");
    break;
  default:
    console.log("ok");
}

// обычный switch case, строго сравнивает ===

switch (num) {
  case 49:
    console.log("Incorrect");
    break;
  case 101:
    console.log("Yeah baby, its 101");
    break;
}

// Если есть гамбургер и картошка, я не голожен
const hamburger = true,
  fries = true;

hamburger && fries ? console.log("I am not hungry") : console.log("I'm hungry");

// Пришел в мак с 2 друзьями, каждый хочет съесть только по гамбургеру, я только картошку, иначе идем в другое заведение, то есть картошка должна быть минимум одна, бургеров 2 (поменять знач. у бургера и картошки на числа), и должна быть минимум одна кола
const cola = 0;

hamburger >= 2 && cola && fries
  ? console.log("Great place to eat")
  : console.log("We need to change place to eat");
