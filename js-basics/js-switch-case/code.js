var grade = 'A';
var res;

switch(grade){
    case 'A':
        res = "grade A";
        break;
    case 'B':
        res = "grade B";
        break;
    case 'C': 
        res = "grade C";
        break;
    default:
        res = "no grade";
        break;
}
//document.write(res);

var grade2='B';  
var result;  
switch(grade2){  
case 'A':  
result+=" A Grade";  
case 'B':  
result+=" B Grade";  
case 'C':  
result+=" C Grade";  
default:  
result+=" No Grade";  
}  
document.write(result);  