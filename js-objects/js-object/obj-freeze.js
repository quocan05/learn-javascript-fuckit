let obj = {
    name: `An`,
    prop: function(){}
};

console.log(obj);

delete obj.prop;

console.log(obj);

let obj1 = Object.freeze(obj);
console.log(obj1);
obj1.name = `vegeta`;
console.log(obj1.name);