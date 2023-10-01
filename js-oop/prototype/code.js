function dog(name, height){
    this.height = height;
    this.name = name;

    function infoDog(){
        return `Name dog: `+ this.name + `, height: `+ this.height;
    }
}

dog.prototype.speak = function(){ // expand new function speak;
    return 'woof woof';
}

dog.prototype.color = `yellow white`;
let shiba = new dog(`shiba`, 30);
console.log(shiba);

console.log(shiba.name+ ` now speak:`+ shiba.speak());

console.log(shiba); // not add to obj but still show whenever call it
console.log(shiba.color);
