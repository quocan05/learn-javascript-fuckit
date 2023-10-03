class Exam{
    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }
}

class Brand{
    constructor(){
        this.brandName = `apple`;
    }
}

class Phone extends Brand{
    constructor(name, price){
        super();
        this.name = name;
        this.price = price;
    }
}

let ex = new Exam();
ex.name = `Math`;
ex.grade = `9`;

console.log(ex);
console.log(ex.name);

let iphone = new Phone(`11 pro`, 10);
console.log(iphone.brandName);
console.log(iphone);

