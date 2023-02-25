let btn = document.getElementById('btn')
let input = document.getElementById('text')
let square = document.getElementById('square')

let btn2 = document.getElementById('e_btn')
let inputRange = document.getElementById('range')
let span = document.getElementById('range-span')
let circle = document.getElementById('circle')


// получаем значения инпута
// const logger1 = function eventForm(value) {
//   if (value == 'red', 'green', 'blue', 'orange') {
//     console.log('Вы ввели то что нужно')
//   }
// }


let logger = function onClick(event) {
  console.log('Клик');
  square.style.backgroundColor = event.target.value;
};

// const logger1 = function (event) {
//   // console.log(event.target.value);
//   for(let i = 0; i < input.length; i++){
//     if(input[i].checked){
//       square.style.backgroundColor = event.target.value.val();
//     } else{
  
//       // square.style.backgroundColor = event.target.value;
//       console.log('Hfyj');
      
//     }
//   }

// }


btn.addEventListener('click', logger);
input.addEventListener('focus', logger)


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