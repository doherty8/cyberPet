const mainContainerIndex = document.getElementById('mainContainerIndex');
const buttonContainer = document.getElementById('buttonContainer');

const game = document.getElementById ('game');
const message = document.getElementById('message');


const charPic = document.getElementById('charPic');
const charContainer = document.getElementById('charContainer');
const squirtleContainer = document.getElementById('squirtleContainer');
const bulbContainer = document.getElementById('bulbContainer');
let insertName = document.getElementById('insertName');
let petName = document.getElementsByClassName('window');

const restart = document.getElementById('restart');


//Show||Hide Content Functions//
const hide = (i)=>{
	i.style.display = "none";
}

const show = (i)=>{
	i.style.display = "block";
}

//Hide//
hide(buttonContainer);
hide(gameTitle);
hide(charContainer);
hide(squirtleContainer);
hide(bulbContainer);
hide(restart);
hide(charBtn);
hide(squirtleBtn);
hide(bulbBtn);


//Main Buttons//

charPic.addEventListener('click', () => {
    hide(mainContainerIndex);
    petName = charPic.dataset.name;
    pet = new Char(petName);

    show(charContainer);
    show(buttonContainer);
    show(gameTitle);
    show(restart);
    show(charBtn);


    audioChar.src = './sounds/charmander.mp3';
})


squirtlePic.addEventListener("click", () =>{
    hide(mainContainerIndex);
    petName = squirtlePic.dataset.name;
    pet = new Squirtle(petName);

    show(squirtleContainer);
    show(buttonContainer);
    show(gameTitle);
    show(restart);
    show(squirtleBtn);


    audioSquirtle.src ="./sounds/squirtle.mp3"

})



bulbPic.addEventListener("click", (event) => {
    hide(mainContainerIndex);
    petName = bulbPic.dataset.name;
    pet = new Bulb(petName);

    show(bulbContainer);
    show(buttonContainer);
    show(gameTitle);
    show(restart);
    show(bulbBtn);


    audioBulb.src ="./sounds/bulbasaur-1.mp3"
});

restart.addEventListener("click", () => {
    window.location.reload()
})

