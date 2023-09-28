//read doc and create a digital clock now :D

document.addEventListener("DOMContentLoaded", function() {
    let today = new Date();
    document.getElementById('today').innerHTML = today;
});

let date = new Date();
console.log(date);

let year = date.getFullYear();
let month = date.getUTCMonth();
let day = date.getDate();

let h = date.getHours();
let m = date.getMinutes();
let s = date.getUTCSeconds();


console.log(year+`/`+month+`/`+day+`  `+h+`:`+m+`:`+s);


//now see the way create digital clock: 
// window.onload=function(){getTime();}  
// function getTime(){  
// var today=new Date();  
// var h=today.getHours();  
// var m=today.getMinutes();  
// var s=today.getSeconds();  
// // add a zero in front of numbers<10  
// m=checkTime(m);  
// s=checkTime(s);  
// document.getElementById('clock-digital').innerHTML=h+":"+m+":"+s;  
// //setTimeout(function(){getTime()},1000);  
// }  
// setInterval("getTime()",1000);//another way  
// function checkTime(i){  
// if (i<10){  
//   i="0" + i;  
//  }  
// return i;  
// }  

window.onload = function(){getTime();}

function getTime(){
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s=  date.getSeconds();


    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('clock-digital').innerHTML=h+":"+m+":"+s; 
    setTimeout(function(){getTime()}, 1000);
}

function  checkTime(val){
    if(val < 10){
        val = `0`+val;

    }
    return val;
}



