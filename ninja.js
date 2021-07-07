class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(`Name: ${this.name}\nStrength: ${this.strength}\nSpeed: ${this.speed}\nHealth: ${this.health}\n`)
    }
    drinkSake() {
        this.health += 10;
    }
}




const ninja1 = new Ninja("Hyabusa", 5);
ninja1.sayName();
ninja1.showStats();
