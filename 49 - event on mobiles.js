//На мобилках нет кликов, наведения мыши на элементы
//также пальцов несколько, существует мультатач. Клик будет работать и на мобилках.

//touchstart событие срабатывает при касании к элементу
//touchmove если палец при касании к элементу начинает двигаться по нему, при каждом смещении срабатывает touchmove
//touchend когда палец оторвался от элемента

//touchenter когда проводимл пальцем и натыкаемся на элемент на котором весит это событие
//touchleave когда палец продолжил скользить и ушел за пределы элемента
//touchcancel когда точка соприкосновения больше не регистрируется на поверхности, например когда палец выйдет за пределы бразуера

//повесим большой обработчик, чтобы мы знали что все дом узлы уже готовы, можно на виндоу, можно на докьюмент вешать.

//The window.addEventListener("DOMContentLoaded", () => {...}); is used to ensure that the entire HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. This event is a different event than window.onload. While window.onload waits for all assets to be fully loaded, DOMContentLoaded is fired as soon as the HTML document is fully loaded, which does not include stylesheets, images, or subframes.
//то есть можем взаимодействовать до стилей всяких сразу с элементами,
//used when you need to manipulate the DOM or initialize your JavaScript application as soon as the HTML document has been fully parsed, but before other resources like images and stylesheets have finished loading.
window.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");

  //вешаем хотя бы один обработчик событий, который будет связан с мобилками
  box.addEventListener("touchstart", (e) => {
    e.preventDefault(); //когда назначаем мобильные события рекомендуется отменять стандартное поведение браузера
    console.log("Start");

    console.log(e.touches);
  });

  box.addEventListener("touchmove", (e) => {
    e.preventDefault();
    console.log(e.targetTouches[0].pageX); //обратились к первому пальцу и выводим координаты
  });

  box.addEventListener("touchend", (e) => {
    e.preventDefault();
    console.log("End");
  });
});
//это нужно, тк часто есть свайп например, и это срабатывает, это генерится с помощью таких событий.
//также для например щепотки, то есть масштабирвоания и тд.

//есть три главных свойства при работе с сенсорными устройствами: (e)

//touches список всех пальцев которые на экране (неважно где), которые взаимодействуют с экраном
//tatgetTouches все пальцы, которые взаимодействуют с этим конкретным элементом.
//changedTouches список пальцев, которые участвуют в событии. Например, если это событие touchend, то список будет содержать убранные пальцы.
