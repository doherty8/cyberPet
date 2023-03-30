
// get the h2 element
const gameTitle = document.getElementById('gameTitle');

// add an event listener to each Pokemon button
const pokemonButtons = document.querySelectorAll('#petButtonContainer button');
pokemonButtons.forEach(button => {
  button.addEventListener('click', () => {
    // get the name of the selected Pokemon from the data-name attribute
    const pokemonName = button.dataset.name;
    
    // update the h2 title with the selected Pokemon name
    gameTitle.innerHTML = `${pokemonName} `;

  });
});
