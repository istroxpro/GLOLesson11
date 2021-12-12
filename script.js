'use strict'
// Достаю все нужные элементы
let firstBtn = document.getElementById('btn');
let inputRange = document.querySelector('input[type=range]');
let inputNumber = document.getElementById('range-span');
let inputText = document.querySelector('input[type=text]');
let Square = document.getElementById('square');
let SquareBtn = document.getElementById('e_btn');
let circle = document.getElementById('circle');
// Создаю функцию для обработчика, чтобы заменять цвет фона квадрата.
const colorChange = function () {
    Square.style.backgroundColor = inputText.value
};
// Вешаю обработчик на кнопку и заменяю цвет квадрата.
firstBtn.addEventListener('click', colorChange);
// Убираем кнопку с кружка.
SquareBtn.style.display = 'none';
// Изменяю ширину и высоту курсора инпута
inputRange.setAttribute('value', '50')
inputRange.setAttribute('max', '100')
inputRange.setAttribute('min', '0')
inputNumber.innerHTML = inputRange.value

const exp = function (event) {
    inputNumber.innerHTML = event.target.value;
    circle.style.width = inputRange.value + '%';
    circle.style.height = inputRange.value + '%';
}
inputRange.addEventListener('input', exp);