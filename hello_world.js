console.log("Hello World An");

/*
    hello  hihihi
*/

function msg(){ // display alert box
    alert("Hello Toi la Quoc An");
}

const list = [
    3,
    function (a, b) {
      return a + b
    }
  ]
  const [value, func] = list
  func(1, 2) // 3
  console.log(func(1,2));
  console.log(list);

  const user = {
    name: 'Dang',
    age: 24,
    ability: ['coding', 'depressed']
  }
  // shallow copy
  const cloneUser = { ...user }

  console.log(cloneUser);
  
  