var tile = Array.from(document.getElementsByClassName("tile"));
let play = "X";
var gamebtn = document.getElementById("btn");
var restart = document.getElementById("restart");
var O = document.getElementById("O");
var X = document.getElementById("X");
var enter = document.getElementById("winner");
var d = document.getElementById("d");
var lol = 0;

const winpat = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

var recdat = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];




function koijeetakya() {
  for (let i = 0; i < winpat.length; i++) {
    var a = "";
    var b = "";
    var c = "";
    var t = winpat[i];
    a = recdat[t[0]];
    b = recdat[t[1]];
    c = recdat[t[2]];
    if ((a == b) & (b == c)) {
      end();
    }}}

function checkdraw(){
 if (lol >= 9){
  d.innerHTML= "DRAW";
  end();
 }
}


function end() {
    document.getElementById("end").style.display = "flex";
    if (play == "X") {
        enter.innerHTML = "O";
      } else if (play == "O") {
        enter.innerHTML = "X";
      }
}

tile.forEach((element) => {
  element.addEventListener("click", () => {
      lol = lol + 1;
      console.log(lol);
      checkdraw()
    if (element.classList.contains("full")) {
      alert("you can't do that Sorry 😁 Invalid Move");
    } else {
      if (play == "X") {
        element.innerHTML = play;
        play = "O";
        X.classList.remove("turn");
        O.classList.add("turn");
        recdat[element.id] = "X";
      } else if (play == "O") {
        element.innerHTML = play;
        play = "X";
        O.classList.remove("turn");
        X.classList.add("turn");
        recdat[element.id] = "O";
      }
      element.classList.add("full");
    }
    koijeetakya();
  });
});

restart.addEventListener("click", () => {
  location.reload();
});
gamebtn.addEventListener("click", () => {
  location.reload();
});
