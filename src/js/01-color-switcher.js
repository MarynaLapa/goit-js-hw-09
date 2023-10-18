const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStart.addEventListener('click', handlerStart);
btnStop.addEventListener('click', handlerStop);

let timerId = null; 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function handlerStart() {
    btnStart.setAttribute('disabled', '');
    btnStop.removeAttribute('disabled');
    timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function handlerStop() {
    btnStop.setAttribute('disabled', '');
    btnStart.removeAttribute('disabled');
    clearTimeout(timerId);
}
