let obj = {
    prop1: 12,
    prop2: `An`
}

let descriptor = Object.getOwnPropertyDescriptor(obj, `prop1`);
let descriptor2 = Object.getOwnPropertyDescriptor(obj, `prop2`);

console.log(descriptor.enumerable);
console.log(descriptor.value);
console.log(descriptor2.enumerable);
console.log(descriptor2.value);