const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

startBtn.addEventListener('click', () => {
  changeBodyColor();
  intervalId = setInterval(changeBodyColor, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
