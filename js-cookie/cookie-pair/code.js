function setCookie()  
{  
//Declaring 3 key-value pairs  
    var info="Name="+ document.getElementById("name").value+";Email="+document.getElementById("email").value+";Course="+document.getElementById("course").value;  
//Providing all 3 key-value pairs to a single cookie  
    document.cookie=info;  
    console.log(document.cookie);
}  

function getCookie()  
{  
    if(document.cookie.length!=0)  
    {  
   //Invoking key-value pair stored in a cookie  
    alert(document.cookie);  
    }  
    else  
    {  
    alert("Cookie not available")  
    }  
}  

//other way, using JSON
function setCookieJSON() {
    var obj = {};
    obj.name = document.getElementById("name").value;
    obj.email = document.getElementById("email").value;
    obj.course = document.getElementById("course").value;

    let jsonStr = JSON.stringify(obj);
    document.cookie = `ui=`+jsonStr;
    console.log(jsonStr);
}

function getCookieJSON(){
    if( document.cookie.length!=0)  
    {  
//Parsing JSON string to JSON object  
    var obj = JSON.parse(document.cookie);  
      
        alert("Name="+obj.name+" "+"Email="+obj.email+" "+"Course="+obj.course);  
    }  
    else  
    {  
        alert("Cookie not available");  
    }  
}

