const btn = document.querySelector('#btn')
// btn.addEventListener('click', function(){
//     alert('hello');
// })

// const hello = function(){
//     this.style.color = 'red';
// }

// btn.addEventListener('click', hello);

const h1 = document.querySelector('h1');

function changeColor(){
    h1.style.color = 'red'
}

function changeBgColor(){
    h1.style.backgroundColor = 'green';
}

btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);
// btn.removeEventListener('click', changeBgColor);