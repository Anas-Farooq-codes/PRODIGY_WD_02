let ms=0, s=0, m=0, h=0 
let timer


const display = document.querySelector(".timer-display")
const laps = document.querySelector(".laps")

function start() {

  if(!timer) {

    timer=setInterval(run, 10)
  }
} 

function run() {
  display.innerHTML = getTimer();

  ms++;

  if (ms == 100) {
      ms = 0;
      s++; // Increment seconds when milliseconds reach 100
  }

  if (s == 60) {
      s = 0;
      m++; // Increment minutes when seconds reach 60
  }

  if (m == 60) {
      m = 0;
      h++; // Increment hours when minutes reach 60
  }
}

function getTimer() {

  return `${(h < 10 ? "0" + h : h)} : ${(m < 10 ? "0" + m : m)} : ${(s < 10 ? "0" + s : s)} : ${(ms < 10 ? "0" + ms : ms)}`;
}

function pause( ) {
  stopTimer()
}

function stopTimer() {
  
clearInterval(timer)
timer = false

}

function reset() {

  stopTimer()
  ms = 0
  s = 0 
  m = 0
  h = 0
  display.innerHTML = getTimer()
  resetLap()
}

function restart () {

  if(timer) {
reset()
start()
  }
}


function lap () {

  if(timer) {

    let li = document.createElement("li")
    li.innerHTML = getTimer()
    laps.appendChild(li)
  }
}

function resetLap() {

laps.innerHTML = ""

}

