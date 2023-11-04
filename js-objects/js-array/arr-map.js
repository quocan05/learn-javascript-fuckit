let numbers = [1, 2, 3, 4, 5, 6];

let numbersMap = numbers.map((element, index) => {
  return Math.pow(element, 2);
  //return `check value: ${element}, index: ${index}`;
});

console.log("Numbers array: ", numbers);
console.log("Numbers Mapped: ", numbersMap);

//Using map to reformat objects in an array

let kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
  { key: 4, value: 40 },
  { key: 5, value: 50 },
];

let reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value })); // [key] is get value of key at kvArray , (key: 1 => [key] = 1)
console.log(reformattedArray);
console.log(kvArray);

let cart = [3, 4, 5];
let total = 0;
let cartMap = cart.map((element) => {
  total += element; // total without tax
  return element * 1.2;
});

let withTax = total * 1.2;

console.log(cartMap);
console.log(withTax);
console.log(total);

let products = [{ name: "sports car" }, { name: "laptop" }, { name: "phone" }];

let prMap = products.map((product) => {
  product.price = 100;
  return product;
});

console.log(prMap);
