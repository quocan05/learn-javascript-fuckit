class Moment extends Date{
    
    constructor(val){
        super(val);
    }
}

function Vehicle(brandName){
    this.brandName = brandName;

}

Vehicle.prototype.getBrandName = function(){
    return this.brandName;
}


//another function 
function Bike(name, price){
    this.name = name;
    this.price = price;

}

let vehicle = new Vehicle( `Honda`);
Bike.prototype = vehicle; // now vehicle is parent of bike

let bike = new Bike(`Wave`, 21);

console.log(bike);
console.log(bike.getBrandName()+` `+bike.name+` `+bike.price);

let x = new Moment();

console.log(x.getDate() + `/` + (x.getMonth()+1)+`/`+x.getFullYear());
console.log(x);

let m = new Moment(` 1947 20:22:10`); // namemonth - day - year - hh:mm:ss
console.log(m.getHours());

