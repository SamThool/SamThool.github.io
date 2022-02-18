let local = [
  "red",
  "green",
  "blue",
  "white",
  "black",
  "brown",
  "pink",
  "yellow",
  "orange",
  "gold",
  "silver",
];
let simple = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];
let body = document.getElementById("body");
let btn = document.getElementById("btn");
let s = document.querySelector("#s");
let m = document.querySelector("#m");
let cn = document.getElementById("cn")

s.classList.add("a");

m.addEventListener("click", () => {
  s.classList.remove("a");
  m.classList.add("a");
});

s.addEventListener("click", () => {
  m.classList.remove("a");
  s.classList.add("a");
});


  btn.addEventListener("click", () => {
    str = "#" + "";
    for (let i = 1; i <= 6; i++) {
      let n = Math.floor(Math.random() * 16);
      str += simple[n]; }
    console.log(str);
    body.style.backgroundColor = str;
    cn.textContent = "Colour :- "+body.style.backgroundColor ;
  });


