const clock = 333;
let protecc = document.getElementById("protecc");
let canrun = false;

const connectToHTML = function() {
  protecc = document.getElementById("protecc");
  
  if (canrun === true) {
    protecc.innerHTML = protecc.innerHTML + "c";
  }
}

function run() {
  canrun = true;
}

setInterval(connectToHTML, clock);
