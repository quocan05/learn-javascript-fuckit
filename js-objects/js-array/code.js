var numbers = [1, 2,3,4,5]; // array numbers

for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] % 2  == 0){
        console.log(numbers[index]);
        document.write(numbers[index] +`<br/>` );
    }
}

//create array = object array

let myPet = new Array();
myPet[0] = `none`;
myPet[1] = `cat`;
myPet[2] = `dog`;

for (let index = 0; index < myPet.length; index++) {
    const element = myPet[index];
    document.write(element + `<br/>`);
}

console.log(myPet.concat(numbers)); // merge 2 or more arrays


