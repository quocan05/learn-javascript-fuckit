class A {
    constructor(){
        
    }

    display(){
        console.log(`A is invoked`);
    }
}

class B extends A{
    constructor(){
        super();
    }
    display(){
        console.log(`B is invoked`);
    }
}

function C() {

}

C.prototype.display = function(){
    console.log(`C is invoked`);
}

function D(){

}

D.prototype = Object.create(C.prototype);

let b = [new C(), new D()];
b.forEach(element => {
    element.display();
});

// let a = new A();
// a.display();

// let b = new B();
// b.display();

let a = [new A(), new B()];
a.forEach(element => {
    element.display();
});

