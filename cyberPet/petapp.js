class Pet {
    constructor(name, initialValue, bar, addButton, refillFunction, interval) {
      this.name = name;
      this.value = initialValue;
      this.bar = bar;
      this.addButton = addButton;
      this.refillFunction = refillFunction;
      this.interval = interval;
      this.isDead = false;
  
      this.intervalId = setInterval(() => {
        if (this.isDead) return;
  
        this.value -= 1;
        this.bar.style.width = `${this.value}%`;
  
        if (this.value <= 0) {
          this.isDead = true;
          const deathMsg = "Your pet has blacked out! Please restart the game!";
          const msgTag = document.querySelector('#message');
          let messageIdx = 0;
          const messageIntervalId = setInterval(() => {
            messageIdx++;
            msgTag.textContent = deathMsg.slice(0, messageIdx);
            if (messageIdx >= deathMsg.length) {
              clearInterval(messageIntervalId);
            }
          }, 200);
        }
      }, this.interval);
  
      this.addButton.addEventListener('click', () => {
        if (this.value > 0 ) {
          const randomAmount = this.refillFunction();
          this.value += randomAmount;
          if (this.value > 100) {
            this.value = 100;
          }
          this.bar.style.width = `${this.value}%`;
        } else {
          this.addButton.disabled = true;
        }
      });
    }
  }
  
  class Char extends Pet {
    constructor() {
      super(Pet.name, 100, document.querySelector('#hungerBarChar'), document.querySelector('#feedBtnChar'), () => {
        return Math.floor(Math.random() * (4 - 2 + 1) + 2);
      }, 600);
      this.sleepBar = new Pet(Pet.name, 100, document.querySelector('#sleepBarChar'), document.querySelector('#sleepBtnChar'), () => {
        return Math.floor(Math.random() * (5 - 2 + 1) + 1);
      }, 900);
      this.battleBar = new Pet(Pet.name, 100, document.querySelector('#battleBarChar'), document.querySelector('#battleBtnChar'), () => {
        return Math.floor(Math.random() * (7 - 3 + 1) + 3);
      }, 500);
      this.trainBar = new Pet(Pet.name, 100, document.querySelector('#trainBarChar'), document.querySelector('#trainBtnChar'), () => {
        return Math.floor(Math.random() * (7 - 3 + 1) + 3);
      }, 1050);
    }
  }

  class Squirtle extends Pet {
    constructor() {
      super(Pet.name, 100, document.querySelector('#hungerBarSquirtle'), document.querySelector('#feedBtnSquirtle'), () => {
        return Math.floor(Math.random() * (7 - 3 + 1) + 3);
      }, 650);
      this.sleepBar = new Pet(Pet.name, 100, document.querySelector('#sleepBarSquirtle'), document.querySelector('#sleepBtnSquirtle'), () => {
        return Math.floor(Math.random() * (7 - 3 + 1) + 3);
      }, 950);
      this.battleBar = new Pet(Pet.name, 100, document.querySelector('#battleBarSquirtle'), document.querySelector('#battleBtnSquirtle'), () => {
        return Math.floor(Math.random() * (7 - 3 + 1) + 3);
      }, 1250);
      this.trainBar = new Pet(Pet.name, 100, document.querySelector('#trainBarSquirtle'), document.querySelector('#trainBtnSquirtle'), () => {
        return Math.floor(Math.random() * (7 - 3 + 1) + 3);
      }, 850);
    }
  }

  class Bulb extends Pet {
    constructor() {
      super(Pet.name, 100, document.querySelector('#hungerBarBulbasaur'), document.querySelector('#feedBtnBulb'), () => {
        return Math.floor(Math.random() * (3 - 1 + 1) + 4);
      }, 550);
      this.sleepBar = new Pet(Pet.name, 100, document.querySelector('#sleepBarBulbasaur'), document.querySelector('#sleepBtnBulb'), () => {
        return Math.floor(Math.random() * (8 - 2 + 1) + 1);
      }, 350);
      this.battleBar = new Pet(Pet.name, 100, document.querySelector('#battleBarBulbasaur'), document.querySelector('#battleBtnBulb'), () => {
        return Math.floor(Math.random() * (7 - 3 + 1) + 3);
      }, 1550);
      this.trainBar = new Pet(Pet.name, 100, document.querySelector('#trainBarBulbasaur'), document.querySelector('#trainBtnBulb'), () => {
        return Math.floor(Math.random() * (9 - 2 + 1) + 6);
      }, 1250);
    }
}