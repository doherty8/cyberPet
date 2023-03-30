const image = document.getElementById('bulbImage');
const button = document.getElementById('battleBtnBulb');

button.addEventListener('click', function() {
  image.src = './images/bulbBattle.gif';
  image.classList.add('show-gif');
  
  setTimeout(function() {
    image.src = './images/bulbasaur3.png';
    image.classList.remove('show-gif');
  }, 5000);
});
