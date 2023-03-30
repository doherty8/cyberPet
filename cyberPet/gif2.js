const image = document.getElementById('squirtleImage');
const button = document.getElementById('battleBtnSquirtle');

button.addEventListener('click', function() {
  image.src = './images/squirtlebattle.gif';
  image.classList.add('show-gif');
  
  setTimeout(function() {
    image.src = './images/squirtle.jpg';
    image.classList.remove('show-gif');
  }, 5000);
});
