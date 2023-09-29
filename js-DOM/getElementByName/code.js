document.addEventListener(
  "DOMContentLoaded",

  function getTotal() {
    let x = document.getElementsByName("gender");

    console.log(`total name is got: `, x.length);
    alert(`total name is got: ` + x.length);
  }
);



