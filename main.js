const button = document.querySelector('.change');
const colorName = document.querySelector('.color__name');
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

button.addEventListener('click', function(){
   let hexColor = '#';
   for(let i = 0; i < 6; i++){
     hexColor += colors[changeColor()];
   }
   colorName.textContent = hexColor;
   document.body.style.backgroundColor = hexColor;
});

function changeColor(){
   let color = Math.floor(Math.random() * colors.length);
   return color;
}



