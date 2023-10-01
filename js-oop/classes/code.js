class Human {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    detail(){
        console.log(`name: `, this.name, `,id : `, this.id);
    }
}

let h1 = new Human(`89`, `Quoc An`);
h1.detail();

//unamed class

let exp = class {
    constructor(a,b){
        this.a= a;
        this.b = b;
    }

    detail(){
        console.log(a,b);
    }
}
console.log(exp.name); //exp
exp.a = 1;
console.log(exp.a);

let exp2 = class Bitch{
    constructor(id, pussy){
        this.id = id;
        this.pussy = pussy;
    }


}

console.log(exp2.name); //Bitch