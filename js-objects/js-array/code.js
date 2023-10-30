var numbers = [1, 2, 3, 4, 5, 6, 7]; // array numbers

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 == 0) {
    console.log(numbers[index]);
    document.write(numbers[index] + `<br/>`);
  }
}

//create array = object array

let myPet = new Array();
myPet[0] = `none`;
myPet[1] = `cat`;
myPet[2] = `dog`;
myPet[3] = `bird`;
myPet[4] = `dick`;

for (let index = 0; index < myPet.length; index++) {
  const element = myPet[index];
  document.write(element + `<br/>`);
}

console.log(myPet.concat(numbers)); // merge 2 or more arrays

//let copiedArray = myPet.copyWithin(3,1,2);
//console.log(copiedArray);

let itr = myPet.entries();

for (let x of itr) {
  console.log(x);
}

function test(value) {
  return value > 10;
}

console.log(numbers.every(test));

function check(element, index, array) {
  return index < 2;
}

console.log([1, 2, 3, 4, 5, 6].every(check));
console.log([11, 12, 23].every(check));

let aFlatMap = numbers.flatMap((numbers, index) => [numbers,myPet[index]]);

console.log(aFlatMap);


let aFill = numbers.fill(1, 3);
console.log(aFill);