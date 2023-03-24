
const mainContainerIndex = document.getElementById('mainContainerIndex');
const buttonContainer = document.getElementById('buttonContainer');

const gameTitle = document.getElementById ('gameTitle');
const game = document.getElementById ('game');
const message = document.getElementById('message');


const charPic = document.getElementById('charPic');
const charContainer = document.getElementById('charContainer');
const squirtleContainer = document.getElementById('squirtleContainer');
const bulbContainer = document.getElementById('bulbContainer');
let insertName = document.getElementById('insertName');
let petName = document.getElementsByClassName('window');

const restart = document.getElementById('restart');

document.getElementById("feedBtnChar").addEventListener("click", () =>{pet.feed()})
document.getElementById("sleepBtnChar").addEventListener("click", () =>{pet.sleep()})
document.getElementById("battleBtnChar").addEventListener("click", () =>{pet.battle()})
document.getElementById("trainBtnChar").addEventListener("click",() =>{pet.train()})
document.getElementById("feedBtnSquirtle").addEventListener("click", () =>{pet.feed()})
document.getElementById("sleepBtnSquirtle").addEventListener("click", () =>{pet.sleep()})
document.getElementById("battleBtnSquirtle").addEventListener("click", () =>{pet.battle()})
document.getElementById("trainBtnSquirtle").addEventListener("click",() =>{pet.train()})
document.getElementById("feedBtnBulb").addEventListener("click", () =>{pet.feed()})
document.getElementById("sleepBtnBulb").addEventListener("click", () =>{pet.sleep()})
document.getElementById("battleBtnBulb").addEventListener("click", () =>{pet.battle()})
document.getElementById("trainBtnBulb").addEventListener("click",() =>{pet.train()})

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

// function that asks user for name of pet//
const getName = () => {
    petName = prompt("Aw, great choice! Now enter a name for your pet.");
    while (petName.length === 0) {
       alert("Please enter a name for your pet.");
       petName = prompt("Your pet name:");
    }
 };





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


    audioChar.src = '';
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









feedBtn.addEventListener("click", () =>{
    pet.feed()
})

sleepBtn.addEventListener("click", () =>{
    pet.sleep()
})

battleBtn.addEventListener("click", () =>{
    pet.battle()
})
trainBtn.addEventListener("click",() =>{
    pet.train()
})


//Event Listener Sound//





//re-start button//

restart.addEventListener("click", () => {
    window.location.reload()
})
