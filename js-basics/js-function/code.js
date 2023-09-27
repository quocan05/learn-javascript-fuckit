function helloMsg(){
    alert("Hello msg fucntion");
}

function callNumber(number){
    alert("number is called : " + (number+number));
}

function getInfo(){
    return "hello, yo mother fucker";
}

function add(a, b) {
    return a+b;
}

console.log(add.toString());
console.log(typeof add(1, 2).toString());

//alert(sum("An","Cute"));

//apply() method
var arr = [1, 2,3 ,4 ];
var arr1 = ["hai", 6, 7, 8];
var max = Math.max.apply(0, arr);

// arr.push.apply(arr, arr1); 
// console.log(arr);

//bind() function

var myName = {
    name: "Quoc An",
    getName: function(){
        return this.name;
    }
};

var getMyName = myName.getName;
//console.log(getMyName());
var getCopyMyName = getMyName.bind(myName);
var getCopyMyName2 = myName.getName.bind(myName); // var tro thanh mot function
//console.log(getCopyMyName2());

this.name = "Oracle";       
var website = {  
  name: "Javatpoint",  
  getName: function() { return this.name; }  
};  
  
document.writeln(website.getName()); // Javatpoint, call from website 
  
//It invokes at global scope  , 'this' ís key
var retrieveName = website.getName;  // is local, this of retrieveName now is this global ==> oracle
document.writeln(retrieveName());   //Oracle  
  
var boundGetName = retrieveName.bind(myName);  // copy of 'this' website 
document.writeln(boundGetName()); // Javatpoint  

//call() function, hieu don gian la dung de thay doi this trong function goi den

var p1 = {
    name: "An",
    age: 21
};
var p2 = {
    name: "Vegeta",
    age: 300
};

function callPerson(){
    console.log(`Hello ${this.name}, you are ${this.age} yrs old`);
}

// callPerson.call(p1);
// callPerson.call(p2);


//callNumber(17);

//helloMsg();