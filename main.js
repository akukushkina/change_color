const button = document.querySelector('.change');
const colors = ['red', 'blue', 'black', 'orange', 'green', 'yellow', 'purple', 'pink'];

button.addEventListener('click', changeColor);

function changeColor(){
   let color = Math.floor(Math.random() * colors.length-1);
   document.body.style.backgroundColor = colors[color];
}

