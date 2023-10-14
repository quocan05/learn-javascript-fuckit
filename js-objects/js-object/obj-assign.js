//JavaScript Object.assign() Method
//Object.assign(target, sources)

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  d: 4,
  e: 5,
};

const obj3 = Object.assign({ c: 411, d: 1215 }, obj1); // gia tri cua c se khong thay doi vi assign khong lien quan den obj
console.log(obj3.c + ` ` + obj3.d);

const obj4 = Object.assign({ f: 55 }, obj2);
console.log(obj4);

let obj5 = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

let obj6 = Object.assign({ a: 11, b: 22, c: 33, g: 55 }, obj5);
console.log(obj6);
console.log(obj6.a, obj6.b, obj6.c, obj6.g);
console.log(obj5);
