let people = {
  printInfo: function () {
    console.log(`My name is : ${this.name}, and am i gay: ${this.isGay}`);
  },
};

let me = Object.create(people);
me.name = `Quoc An`;
me.isGay = false;
me.printInfo();

//call from function

function fruit() {
  this.name = `apple`;
  this.price = 2222;
}

function callName() {
    fruit.call(this);
  }

callName.prototype = Object.create(fruit.prototype);

let myFruit = new callName();
console.log(myFruit.price);


//
