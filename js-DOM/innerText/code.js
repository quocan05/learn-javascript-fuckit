
function checkAge(){
    let ageData = document.getElementById("age-input").value;
    let check;
    console.log(ageData + ``+ typeof(ageData));
    if(ageData == ""){
        check = `enter your age`;
    }
    else if(ageData < 18){
        check = `you are too young`;
    } else {
        check = `you can watch porn film lmao`;
    }

    document.getElementById(`check-area`).innerText = check;
}