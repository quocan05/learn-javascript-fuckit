let obj1 = {

}

Object.defineProperty(obj1, `prop`, {
    value: 123 //khia bao property cua obj ben ngoai
});

obj1.prop = 99;
console.log(obj1.prop);