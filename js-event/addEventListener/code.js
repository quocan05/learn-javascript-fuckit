document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById(`eftbutton`);

  function onMouseOver() {
    btn.style.width = "50px";
    btn.style.height = "50px";
    btn.style.background = "aqua";
    btn.style.color = "blue";
    console.log(`mouse is on the button`);
  }

  function onMouseOut(){
    btn.style.width = "";
    btn.style.height = "";
    btn.style.background = "";
    btn.style.color = "";
    console.log(`mouse is out`);
  }

  function onClick(){
    document.getElementById(`show-msg`).innerText = `you clicked the button`;
  }

  btn.addEventListener("mouseover", onMouseOver);
  btn.addEventListener("mouseout", onMouseOut);
  btn.addEventListener("click", onClick);
});
