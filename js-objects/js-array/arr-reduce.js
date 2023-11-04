//let arr = [1,2,3,4,5,6];
let arr = ['car', 'bike', 'motor', 'plane'];
let reducer = arr.reduce((prevValue, currValue) => {
    return prevValue+' '+currValue;
}, 'x'); // 10 se la gia tri ban dau 

console.log(reducer); 