var x = 10;
var name = "an";
var a = 1, b = 2;
var c = a+b;

var global_var = "AN";

console.log("Value of c = ", c);

function writeName(){
    window.value = 1;
    console.log(window.value);
    var local_var = "hihihiiiii";
    console.log("this is local var: ", local_var);
    console.log("this is global var: ", global_var);
}

function getValueFromOtherFunc(){
    console.log(window.value);
}