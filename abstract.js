// 1 - Абстрактный класс

class Animal {
    constructor(type, title, extinct, geo) {
        this.type = type;
        this.title = title;
        this.extinct = extinct;
        this.geo = geo;
    }

    info(){
        console.log(`${this.title}
        Title: ${this.title}
        Type: ${this.type}
        Extinct: ${this.extinct}
        Geo: ${this.geo}
        `)
    }
}


//2: Наследование
class Tiger extends Animal {
    constructor(type, title, extinct, geo, havchik) {
        super(type, title, extinct, geo);
        this.havchik = havchik;
    }
}

const tiger = new Tiger(
    'predator',
    'Tiger',
    false,
    'Africa',
    'meat'
); //instance class Tiger

console.log(tiger);
tiger.info();


class Shark extends Animal {
    constructor(type , title, ectinct, geo, havchik) {
        super(type , title, ectinct, geo, havchik);
    }
}
const shark = new Shark(
    'predator',
    'Shark',
    false,
    'Oceane',
    'Fish'
)
console.log(shark);
shark.info();  