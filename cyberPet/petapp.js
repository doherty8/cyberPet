//Pet Class//
class CyberPet {
    constructor(name){
        this._name = name;
        this._sleepy = 40;
        this._hungry = 40;
        this._bored = 40;
    }
    get name(){
        return this.name.charAt(0).toUpperCase() + this._name.slice(1);
    }
    get hungry() {
        return this._hungry;
    }
    get energy(){
        return this._sleepy;
    }

    feed() {
        this._hungry -= 6;
        this._sleepy += 3;
    
    if (this._hungry >= 80){
        message.textContent = `Your cyber pet ${petName} is hungry`
    }else if (this._hungry <=0){
        message.textContent = `Your cyber pet ${petName} is full`
    }else{
        message.textContent = `Your cyber pet ${petName} is eating. Hunger levels at ${this._hungry}`
    }   
}
    sleep() {
        this._sleepy -= 6;
        this._bored += 3;

    if (this._sleepy >= 80) {
        message.textContent = `Your cyber pet ${petName} is tired.`
    }else if (this._sleepy <=0) {
        message.textContent = `Your cyber pet ${petName} is fully rested.`
    }else{
        message.textContent = `Your cyber pet ${petName} is sleeping. Sleepy levels at ${this._sleepy}`
    }
}
    battle() {
        this._sleepy += 3;
        this._hungry += 3;
        this._bored -= 6;

    if (this._bored >= 80) {
        message.textContent = `Your cyber pet ${petName}, is bored.`
    }else if (this._bored <= 0) {
        message.textContent = `Your cyber pet ${petName}, is happy.`
    }else { 
        message.textContent = `Your cyber pet ${petName}, is playing. Boredom levels at ${this._bored}`

    }

    }
} 


//Charmander Class//
class Char extends CyberPet {
    constructor(name, train){
    super(name)
    }
    train() {
        this._bored += 6; 
        message.textContent = `Poking your pet ${petName}, makes them playful!`
        trainBtn.addEventListener("click",() =>{
            audioChar.src ="sounds/char.mp3"
        })
    } 
}

//Squirtle Class//
class Squirtle extends CyberPet {
    constructor (name, train){
        super(name)
    }
    train(){
        this._sleepy += 6;
        message.textContent = `Poking your pet ${petName}, was exhausting. They need to roll over and have a nap.`
        trainBtn.addEventListener("click",() =>{
            audioSquirtle.src ="sounds/Squirtle.mp3"
        })
    }
}

//Bulbasaur Class//
class Bulb extends CyberPet {
    constructor (name, train){
        super(name)
    }
    train(){
        message.textContent = `Your pet ${petName} does not like being poked! Be careful or he will abduct you.`
        trainBtn.addEventListener("click",() =>{
            audioBulb.src ="./sounds/bulbasaur-1.mp3"
        })
    }
}