function checkValid(){
    let name = document.getElementById(`input-name`).value;
    let age = document.getElementById(`input-age`).value;

    if(name == null || name ==""){
        alert(`name can't be blank bro`);
        return false;
    } else {
        if(age < 18 || age == null){
            alert(`bro you don't have enough age to go`);
            return false;
        } 
    }
}

function checkPassword(){
    let pass1 = document.getElementById(`pass1`).value;
    let pass2 = document.getElementById(`pass2`).value;

    let checkMsg = "";

    if(pass1 == null || pass2 == null){
        checkMsg = `enter true value`;
    }
    else if(pass1 == pass2) {
        checkMsg = `match`;
    } else{
        checkMsg = `does not match`;
    }

    document.getElementById(`notifi-check`).innerText = checkMsg;
}

function checkNumeric(){
    let numberInput = document.getElementById(`number-input`).value;
    let checkMsg = "";
    if(isNaN(numberInput)){
        checkMsg = `enter numeric only!`;
        document.getElementById(`notifi-numbercheck`).innerText = checkMsg;
        return false;
    } 
}

function checkEmail(){
    let inputEmail = document.getElementById(`input-email`).value;

    let posA = inputEmail.indexOf(`@`);
    let posD = inputEmail.indexOf(`.`);

    console.log(posA+`  `+posD);

    if(posA<1 || posD+2 >= inputEmail.length){
        document.getElementById(`noti-email`).innerText = `Enter correct email`;
    } else {
        document.getElementById(`noti-email`).innerText = `ok`;
    }
}