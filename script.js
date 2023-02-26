let btn = document.getElementById('btn')
let input = document.getElementById('text')
let square = document.getElementById('square')

let btn2 = document.getElementById('e_btn')
let inputRange = document.getElementById('range')
let span = document.getElementById('range-span')
let circle = document.getElementById('circle')


// let logger = function onClick() {
//   square.style.backgroundColor = input.value;
// };


// btn.addEventListener('click', logger);
// input.addEventListener('focus', logger);



btn.addEventListener('click', function () {
  square.style.backgroundColor = input.value;
});
// Задание 2

btn2.style.display = 'none';

// Задание 3

const logger3 = function (event) {
  // console.log(event.target.value);
  
  span.textContent = event.target.value;
  circle.style.height = event.target.value + '%'
  circle.style.width = event.target.value + '%'
}

inputRange.addEventListener('input', logger3);
span.addEventListener('change', logger3);

// console.log(btn);
// console.log(input);
// console.log(square);
// console.log(logger1);