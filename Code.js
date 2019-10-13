const clock = 333;
let protecc = document.getElementById("protecc");
let run = false;

const connectToHTML = function() {
  protecc = document.getElementById("protecc");
  
  if (run === true) {
    protecc.innerHTML += "c";
  }
}

function run() {
  run = true;
}

setInterval(connectToHTML, clock);
