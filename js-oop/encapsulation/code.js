class Student {
  constructor() {
    var name;
    var grade;
  }
  setName(name) {
    this.name = name;
    console.log(`name change: ` + this.name);
  }
  getName() {
    return this.name;
  }

  setMark(mark) {
    if (mark < 0 || mark > 10) {
      alert(`invalid grade`);
    } else {
      this.grade = mark;
    }

    console.log(`Grade: ` + this.grade);
  }
  getMark() {
    return this.grade;
  }

  showInfo() {
    alert(`Name ` + this.getName() + ` Grade: ` + this.getMark());
    console.log(`ok`);
  }
}

// let sName = document.getElementById(`name`).value;
// let sGrade = document.getElementById(`grade`).value;

let s = new Student();

console.log(s);

document.addEventListener("DOMContentLoaded", function () {
  const inputName = document.getElementById(`name`);
  inputName.onchange = function () {
    s.setName(inputName.value);
  };
  const inputGrade = document.getElementById(`grade`);
  inputGrade.onchange = function () {
    s.setMark(inputGrade.value);
  };
  const button = document.getElementById(`submit`);
  button.onclick = function () {
    s.showInfo();
  };
});
