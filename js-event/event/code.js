
let cnt = 0;
function clickMe(){
    if(cnt % 2 == 0){
        cnt++;
        document.getElementById(`show-msg`).innerText = `you clicked button!`;
    } else {
        cnt++;
        document.getElementById(`show-msg`).innerText = ``;
    }
}

function mouseOver(){
    document.getElementById(`show-msg`).innerText = `you called onmouseover function`;
}

function onFocus(){
    document.getElementById(`text`).style.background = `green`;
}

function keyDown(){
    alert(`you pressed a key`);
}