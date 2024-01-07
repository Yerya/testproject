//можно сразу обратиться к body, head.

// console.log(document.body);

//в head например можно зааппендить какие то стили и тд.
//для html это document.element

// console.log(document.documentElement);

//детей можно показать с помощью свойства childNodes (дословно узлы которые являются детьми), возвращается псевдомассив.
//текстовая нода сначала идет, это перенос строки между узлом

console.log(document.body.childNodes);

//не каждый узел это DOM элемент, есть перенос строк, текстовые дом узлы и тд.

//можно получить как первого ребенка, так и последнего firstchild и lastchild

console.log(document.body.firstChild);
console.log(document.body.lastChild);

//хотим при нажатии на кнопку получить родителя
//parentNode - узел родителя
console.log(document.querySelector("#current").parentNode);
//если хотим взять на 2 уровня выше, то есть добраться родителя родителя, дублируем 2 раза.

console.log(document.querySelector("#current").parentNode.parentNode);

//дата атрибуты. Иногда хотим назначить что то свойственное, на что можно будет ориентироваться.
// например <li data-current="3"> </li> начинается с data- а слово дальше произвольное, например model если модальное окно или close и тд. Можно указывать булиновое значение, что удобно

//чтобы их получить,
console.log(document.querySelector('[data-current="3"]')); //используем квадратные скобки, не забываем про комбинацию ковычек, смешивать нельзя.
//чтобы получить след элемент, используется свойство nextSibling
console.log(document.querySelector('[data-current="3"]').nextSibling); //получили перенос строки.
//ниже для предыдущего
console.log(document.querySelector('[data-current="3"]').previousSibling);

//чтобы не попадаться на текстовые узлы и тд, существуют аналоги, чтобы получить именно след элемент
console.log(document.querySelector('[data-current="3"]').nextElementSibling); //получили перенос строки.
//тоже самое для parentNode, будет parentElement и тд.
console.log(document.querySelector('[data-current="3"]').parentElement);
console.log(document.body.firstElementChild); //получаем именно первого элемента ребенка
//ниже последний элемент ребенок
console.log(document.body.lastElementChild);
//с childNodes нет такого аналога, можно самому сделать.
//тут не можем использовать forEach, используем for of
//найти все элементы детей и избавиться от текстовых.

//понадобится break и continue
const pseudoArr = document.body.childNodes;
const newpseudoArr = [];
let i = 0;
for (let node of pseudoArr) {
  if (node.nodeName == "#text" || node.nodeName == "#comment") {
    //раскрыли объект text и comment, посмотрели что есть свойство nodename и к нему обратились
    continue; //пропускаем шаг, если встречаем тип текст и записываем только остальное
  }
  newpseudoArr[i] = node;
  i++; //индекс увеличивается на каждой итерации, поэтому если просто написать в условии value.nodeType !== Node.TEXT_NODE и там   newpseudoArr[i] = value; то будут пустые элементы.
  //либо через пуш.
  console.log(node);
}
console.log(newpseudoArr);
