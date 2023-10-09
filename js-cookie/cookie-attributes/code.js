/*Attributes	    Description
  expires	        It maintains the state of a cookie up to the specified date and time.
  max-age	        It maintains the state of a cookie up to the specified time. Here, time is given in seconds.
  path	            It expands the scope of the cookie to all the pages of a website.
  domain	        It is used to specify the domain for which the cookie is valid. */


  let timeNow = new Date();

  console.log(timeNow.toUTCString());
  function setCookie(){
    document.cookie = `name=Dang Quoc An;expires=Mon, 09 Oct 2023 15:20:54 GMT`;
  }

  function getCookie(){
    if(document.cookie.length != 0){
        let arr = document.cookie.split(`=`);
        alert(`Cookie: Name = ` + arr[0]+` , Expire = `+ arr[1]);
        console.log(arr);
    } else{
        alert(`Not available`);
    }
  }

  let array = cookie.split(`=`);
  array.forEach(element => {
    console.log(array)
  });