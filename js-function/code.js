let sum = (a, b) => {
    return a+b;
}

let sayHi = (value) => {
    return `Hellooo ` + value;
}

console.log("check sum of 1+1: ", sum(1,1));

console.log(sayHi('AN'));

let nothing = () =>{
    console.log(`nothing in your eyes`);
}

nothing();


// see how callback do

let showResult = (msg) => {
    console.log(`>> make a callback: `, msg);
}

let divi = (a, b, callback) =>{
    let res = a*b;
    callback(res);
}

divi(3,4,showResult)