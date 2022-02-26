
class transport {
    constructor(title, model, color) {
        this.title = title;
        this.model = model;
        this.color = color;
    }

    startEngine(){
        if(this.title.toLowerCase() === 'Lexus'){
            return console.log(`${this.title} engine cracked`)
        }
        console.log(`${this.title} ${this.model} engine started`)
    }
}

class Car extends transport {
    constructor(title, model, color, maxSpeed) {
        super(title, model, color);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed(){
        console.log(`On ${this.title} ${this.model} max speed = ${this.maxSpeed}`);
    }
}

const bmw = new Car(
    'BMW',
    'E36',
    'grey',
    260
);
bmw.startEngine();
bmw.getMaxSpeed();

const lexus = new Car(
    'Lexus',
    '470',
    'black',
    350000
);
lexus.startEngine();
lexus.getMaxSpeed();

