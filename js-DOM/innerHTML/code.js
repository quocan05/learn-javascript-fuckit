function showInfo(){
    let inf = `Bro wtf:<input type='text' name='name'><br>
    <br><input type='submit' value='fuck it'>`;

    document.getElementById(`show-info`).innerHTML = inf;
}
let flag = true;
function showName(){
    let myName = `<header>Bo may ten la An</header>`;
    let again = `<header>click lai di dcu may</header>`;
    if(flag){
        document.getElementById(`show-name`).innerHTML = myName;
        flag = false;

    } else{
        document.getElementById(`show-name`).innerHTML = again;
        flag = true;
    }
}