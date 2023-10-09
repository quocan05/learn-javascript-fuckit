function setCookie() {
  document.cookie = "username=Quoc An";
}
function getCookie() {
  if (document.cookie.length != 0) {
    let array = document.cookie.split(`=`);
    alert(`Name : ` + array[0] + ` Value: ` + array[1]);
  } else {
    alert("Cookie not available");
  }
}



function displayColor() {
  let select = document.getElementById(`color`).value;

  if (select != `Select color`) {
    document.bgColor = select;
    document.cookie = `color=` + select; //cau truc cookie : name=value
  }
  
  console.log(select);
  console.log(document.cookie);
}

window.onload = function () {
    let cookies = getAllCookies();

    let colorCookie;
  
    for(let cookieName in cookies){
          let cookieValue = cookies[cookieName]; //get value cookie
          if(cookieName == `color`){
              colorCookie = cookieValue;
          }
    }
    console.log(`value of cookie : `+ colorCookie);
    document.bgColor = colorCookie;
};


function getAllCookies() {
    var cookies = document.cookie.split("; "); // Tách các cookie thành mảng

    var cookiePairs = {};
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split("=");
        var cookieName = decodeURIComponent(cookie[0]);
        var cookieValue = decodeURIComponent(cookie[1]);
        cookiePairs[cookieName] = cookieValue;
    }

    return cookiePairs;
}

// Gọi hàm và lấy tất cả các cặp tên và giá trị của cookie
var allCookies = getAllCookies();

// In ra các cặp tên và giá trị của cookie
for (var cookieName in allCookies) {
    var cookieValue = allCookies[cookieName];
    console.log("Tên cookie: " + cookieName + ", Giá trị cookie: " + cookieValue);
}


document.addEventListener(`DOMContentLoaded`, function () {
  const selectButton = document.getElementById(`color`);
  selectButton.onchange = function () {
    displayColor();
  };
});
