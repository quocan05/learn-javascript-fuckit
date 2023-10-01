//create object literal
//object = {property1:value1,property2:value2.....propertyN:valueN}  
food = {
    id: 1,
    name: `bread`,
    price: 20000
};

console.log(food);
console.log(food.name);


//create instance of Object;

let car = new Object();

car.name = `GTR`;
car.brand = `Nissan`;
car.price = 5000;

console.log(car);
console.log(car.price);

//using constructor(using function)

function gun(name, price){
    this.name = name;
    this.price = price;

    this.changePrice = changePrice;
    function changePrice(otherPrice){
        this.price = otherPrice;
    }
}

gun = new gun(`AK47`, 3333);
console.log(gun);
gun.changePrice(34444);
console.log(gun);
