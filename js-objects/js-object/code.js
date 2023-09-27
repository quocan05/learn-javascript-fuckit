/*
There are 3 ways to create objects.

By object literal
By creating instance of Object directly (using new keyword)
By using an object constructor (using new keyword)
*/

//create obj by literal , tao obj the nghia den

food = {name: `rice`, price: 200, calo: 100};
console.log(food); // obj food 
console.log(food.name); // name of obj food

//create obj by instance of obj, create directly, tao truc tiep tu Object();

var car = new Object();

car.name = `GTR`;
car.price = 2000;
car.type = `Super Car`;

console.log(car);

console.log(`my dream car is :`, car.name, `,and its price : `, car.price)

// create obj using 'this' keyword, need to create function() to create an obj

function pet(id, type, age){
    this.id = id;
    this.type = type;
    this.age = age;
}

pet = new pet(`dog`, `corgi`, 3);

console.log(pet);


//defining method in JS obj

function employee(name, id, phone){
    this.name = name;
    this.id = id;
    this.phone = phone;
    this.changePhone = editPhone;
    
    function editPhone(newPhone){
        this.phone = newPhone; //change phone number
    }
}

emp = new employee(`An`, 1, `0963781663`);
console.log(emp.name, ` `, emp.phone);
emp.changePhone(`12345`);
console.log(`phone now is `, emp.phone);



