// Buttonlar
let lap = document.querySelector(".lap");
let lapBtn = document.querySelector("#lapBtn");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
const lapList = document.querySelector("#lapList");
// Esas Timer
let timer = document.querySelector(".timer");
let seconds = 0;
let milliseconds = 0;
let intervalIndex;
let count = 0;
let lapdiv = document.querySelector(".lapdiv");
lapBtn.disabled = true
start.addEventListener("click", () => {
  start.style = "display: none;";
  stop.style = "display: inline;";
  lap.style = "display: inline;";
  reset.style = "display: none;";
  lapBtn.disabled = false
  clearInterval(intervalIndex);
  intervalIndex = setInterval(() => {
    milliseconds += 1;
    if (milliseconds === 100) {
      seconds++;
      milliseconds = 0;
    }
    timer.innerHTML = convertTime(seconds, milliseconds);
  }, 10);
});
stop.addEventListener("click", () => {
  stop.style = "display: none;";
  start.style = "display: inline;";
  lap.style = "display: none;";
  reset.style = "display: inline;";
  clearInterval(intervalIndex);
  timer.innerHTML = convertTime(seconds, milliseconds);
});
reset.addEventListener("click", () => {
  reset.style = "display: none;";
  lap.style = "display: inline;";
  lapBtn.disabled = true
  clearInterval(intervalIndex);
  seconds = 0;
  milliseconds = 0;
  lapList.innerHTML = ""
  count = 0
  timer.innerHTML = convertTime(seconds, milliseconds);
});
function convertTime(seconds, milliseconds) {
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const min = Math.floor(remainingSeconds / 60);
  const lastSec = remainingSeconds - min * 60;
  const roundHours = hours;
  const roundMin = min < 10 ? "0" + min : min;
  const roundLastSec = lastSec < 10 ? "0" + lastSec : lastSec;
  const roundMilliseconds = milliseconds.toString().padStart(2, "0");
  let formattedTime = `${roundHours}:${roundMin}:${roundLastSec},${roundMilliseconds}`;
  return formattedTime;
}
lapBtn.addEventListener("click", () => {
  count++
  lapList.innerHTML += `<div class="Lap"><p>Lap ${count}</p> ${convertTime(seconds,milliseconds)}</div>`;
});