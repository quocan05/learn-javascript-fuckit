let month = ['Feb', 'Mar', 'Dec', 'Jan'];
let numbers = [1,2,1000,30,22,41,10,99];
let sMonth = month.sort();
//let sNumbers = numbers.sort();
//sort chi sap xep theo ki tu dau tien, khong nhan dien duoc so

//console.log(sNumbers);
// neu sort theo thu tu so tu nhien thi nhu nay

let sNumbers = numbers.sort((prev, curr) => prev - curr);
console.log(sNumbers); //gio da sort theo thu tu nho => lon

let people = [
    {name: 'An', age: 21},
    {name: 'Xole', age: 35},
    {name: 'bulma', age: 18},
    {name: 'Vegeta', age: 291},
    {name: 'Neymar', age: 31},
]
//sort theo ten
console.log(people.sort((a,b) => {
    let x= a.name.toUpperCase();
    let y = b.name.toUpperCase();
    if(x > y){
        return 1;

    } 
    if(x < y){
        return -1;
    }
    return 0;
}));

//sort theo tuoi tu be den lon 

console.log(people.sort((a,b) => {
    return b.age - a.age;
}));