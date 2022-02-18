let startandstop = document.getElementById("startandstop");
let reset = document.getElementById("reset");
count = 0;
startandstop.addEventListener("click", () => {
 if(startandstop.textContent==("Start")){
  document.querySelector(".count").style.color = "green";  
  myTime = setInterval(function () {
    myRuntime();
  }, 1000);
}else
myStoptime();
startandstop.textContent = ("Start");
});

reset.addEventListener("click", () => {
  myStoptime()
  count = 0 ;
  document.querySelector(".count").style.color = "black";
  document.querySelector(".count").textContent = (count);
  startandstop.textContent = ("Start");
});

function myRuntime() {
  count++;
document.querySelector(".count").textContent = (count);
document.querySelector(".count").style.color = "green";
startandstop.textContent = ("stop");

}

function myStoptime() {
  clearInterval(myTime);
  document.querySelector(".count").style.color = "black";
}
