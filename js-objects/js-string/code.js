//create string by literal

let myName = `Quoc An create bt literal `;
//document.write(myName);

//by object String

let myName2 = new String(`Quoc An create by object String`);
//document.write(myName2);

//concat

let combineStr = myName.concat(myName2);
document.write(combineStr+`<br/>`);

//charAt

console.log(combineStr.charAt(5));
console.log(combineStr.charCodeAt(5)); //provide Unicode of char at 4 (ASCII)

//indexOf()

console.log(combineStr.indexOf(`Quoc`));

//split

var str="This is JavaTpoint website";  
document.write(str.split(" ")); //splits the given string. This,is,Javatpoint,website



