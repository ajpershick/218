
var time = document.getElementById("time");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var count = 0;
var counter = 0;

function countTime() {
  count = (count + 1) % 60 ;
  time.innerHTML = count;
}

function startClock() {
  console.log("starting timer")
  counter = setInterval(countTime, 1000);
}

function stopClock() {
  console.log('test');
  clearInterval(counter);
}

start.addEventListener("click", startClock);
stop.addEventListener("click", stopClock);
