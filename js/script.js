const timer = document.querySelector('.timer');
const startTimer = document.querySelector('#start');
const resetTimer = document.querySelector('#reset');
const pauseTimer = document.querySelector('#pause');
const btnAboutPomodoro = document.querySelector('#more');

const minutesToSecondsTimer = 6;
let lastMin;
let timerControl;

function disableButton(btn) {
    btn.disabled = true;
    btn.style.opacity = '0.2';
};
function enableButton(btn) {
    btn.disabled = false
    btn.style.opacity = '1';
}

disableButton(resetTimer);
disableButton(pauseTimer);

document.addEventListener('click', (e) => {
    const elem = e.target;

    if (elem.id === 'start') {
        disableButton(startTimer);
        enableButton(pauseTimer);
        enableButton(resetTimer);
        timerStarted(minutesToSecondsTimer, timer);
    }
    if (elem.id === 'reset') {
        console.log(elem.id)
    }
    if (elem.id === 'pause') {
        console.log(elem.id)
    }
    if (elem.id === 'more') {

    }
})

function timerStarted(duration, display) {
    let timer = duration, minutes, seconds;
    timerControl = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            clearInterval(timerControl);
        }
    }, 1000);
}
