// let arr = [1,2,3,4,5,6];

let arr = [
    {name: `quoc an`, age: 21},
    {name: `son goku`, age: 300},
    {name: `vegeta`, age: 400},
    {name: `enzo`, age: 23},
    {name: `ashdoaihsd`, age: 21}
]

let filter = arr.filter((element, index)=>{
    console.log(`check all elements of array, element: `, element, `index: `, index);
    return element && element.age > 21;
});

console.log(filter);

let find = arr.find((element, index) => {
    return element && element.age > 300;
});

console.log(find);