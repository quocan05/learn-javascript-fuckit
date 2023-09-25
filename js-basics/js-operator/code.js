var x = 2;
var y = 2;
//x++;

var sum = x+y;
var sub = x-y;
var multi = x*y;
var divi = x/y;
console.log(sum);
console.log(sub);
console.log(multi);
console.log(divi);

if(x == y){
    console.log("equal =="); 
} else {
    console.log("not equal");
}

if(x === y){
    console.log("equal =="); 
} else {
    console.log("not equal");
}

var a = 13;
console.log(a == 10 & a == 20);
console.log(a == 10 || a < 10);
console.log(a != 10 ^ a > 5); // XOR 2 same = false, 2 dif = true
console.log(~a); // NOT

console.log(a<<2); //10 leftshift = 40
console.log(a>>2); //10 rightshift = 2
console.log(a>>>2);




