let num = document.getElementsByClassName("num");
let ope = document.getElementsByClassName("ope");
let his = document.getElementById("his");
let out = document.getElementById("res");
function output(i) {
  out.textContent = i;
}
function history(i) {
  his.textContent = i;
}

// logic

// clicked on numbers
let temout = "";
for (var i = 0; i < num.length; i++) {
  num[i].addEventListener("click", function () {
    temout = temout + this.id;
    output(temout);
  });
}
// clicked on a operator
for (var i = 0; i < ope.length; i++) {
  ope[i].addEventListener("click", function () {
    if (this.id == "clear") {
      temout = "";
      history("");
      output("");
    } else if (this.id == "back") {
      temout = temout.substring(0, temout.length - 1);
      output(temout);
    } else if (this.id == "=") {
      history(temout);
      temp = his.textContent;
      temout = eval(temp);
      output(temout);
    } else if (isNaN(temout[temout.length - 1])) {
      temout = temout.substring(0, temout.length - 1);
    } else {
      temout = temout + this.id;
      output(temout);
    }
  });
}
