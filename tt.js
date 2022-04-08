let btn = document.getElementById("btn");
let aim = document.getElementById("aim");
let input = document.getElementById("input");
let sen = [
  "one two three four",
  "five six seven eight",
  "zero one two three",
  "six foue two one",
];
input.disabled = true;
let startt, endt;

btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    let date = new Date();
    input.value = "";
    input.disabled = false;
    this.innerText = "Submit";
    startt = date.getTime();
    aim.innerText = sen[Math.floor(Math.random() * 4)];
  } else {
    let date = new Date();
    let userinput = input.value;
    let count = userinput.split(" ").length;
    this.innerText = "Start";
    input.disabled = true;
    endt = date.getTime();
    console.log(input.value);
    aim.innerText = `${
      (endt - startt) / 1000
    } Seconds and ${count} words and speed was 
    ${Math.round((count / ((endt - startt) / 1000)) * 60)}WPM and ${compare(input.value,aim.innerText)} Mistakes  
    `;
  }
});


const compare = (str1,str2) => {
   let words1 = str1.split(" ");
   let words2 = str2.split(" ");
   let count  = 0;

   words1.forEach(function(value,index){
       if(value==words2[index]){
         count++;
       }
   })
   return (words2.length)-count
}