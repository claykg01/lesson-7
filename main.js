class Dog {
    constructor(name, weight, heaight, color, voiceText) {
        this.name = name;
        this.weight = weight;
        this.height = heaight;
        this.color = color;
        this.voiceText = voiceText;
    }
    voice(){
        console.log(this.voiceText)
    }
}

const rex = new Dog('Rex',40,1.7,'white', 'gaf gaf, i am rex');
const sharik = new Dog('Sharik',20,0.5,'black', 'gaf ga');

// console.log(rex);
// console.log(sharik);
rex.voice();
