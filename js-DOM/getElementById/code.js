//we can use id to get element HTML instead

function calculatePrice(){
    let val = document.getElementById("input-price").value;
    let total = Math.pow(val,2);
    alert(`your total: `+ Number(total));
}