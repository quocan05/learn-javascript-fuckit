class Test {
    constructor(){
        console.log(`call static method in constructor: `+ Test.displayMsg());
    }

    static displayMsg(){
        return `[staic method...]`;
    }

    static displayMsg(){
        return `[staic method again...]`;
    }


    show(){
        console.log(`static method is called in non static: `+Test.displayMsg());
    }
}

let test = new Test();
test.show();

console.log(`Call static method without create object: ` + Test.displayMsg());