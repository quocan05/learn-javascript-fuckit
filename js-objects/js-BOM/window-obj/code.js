//window object is object of browser not JS, automatically created

//alert with ok button
//alert(`now what?`);

//confirm with yes, no button -> return true or false value

function check() {
  let cf = confirm(`chon yes hoac no di dit me may`);
  if (cf == true) {
    alert("ok");
  } else {
    alert(`no`);
  }
  
}

function msg() {
  var v = confirm("Are u sure?");
  if (v == true) {
    alert("ok");
  } else {
    alert("cancel");
  }
}

//prompt display input dialog and ...

function checkGay(){
    let ck = prompt("write something");
    alert("yes you are gay suck");
}

//open() open other page

function goToOtherPage(){
    let x = open(`https://music.youtube.com/`);
}

//timeout

function timeOut(){
    setTimeout(function delayMSg(){
        alert(`delay msg 3 secs`);
    }, 3000);
}

