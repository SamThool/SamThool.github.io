
let colours = document.getElementById("feed_colour");
let  ttt = document.getElementById("feed_ttt");
let  clock = document.getElementById("feed_clock");
let  stopwatch = document.getElementById("feed_stopwatch");
let  noteapp = document.getElementById("feed_note");
let  rps = document.getElementById("feed_rps");
let  calculator = document.getElementById("feed_calculator");
let  todo = document.getElementById("feed_todo");



colours.addEventListener("click", () => {
    window.location.href="colours.html";
})
ttt.addEventListener("click", () => {
    window.location.href="tiktactoe.html";
})
clock.addEventListener("click", () => {
    window.location.href="analogclock.html";
})
stopwatch.addEventListener("click", () => {
    window.location.href="stopwatch.html";
})
noteapp.addEventListener("click", () => {
    window.location.href="noteapp.html";
})
rps.addEventListener("click", () => {
    window.location.href="rps.html";
})
calculator.addEventListener("click", () => {
    window.location.href="calculator.html";
})
todo.addEventListener("click", () => {
    window.location.href="todolist.html";
})