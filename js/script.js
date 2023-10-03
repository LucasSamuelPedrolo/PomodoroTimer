const timer = document.querySelector('.timer');
const startTimer = document.querySelector('#start');
const pauseTimer = document.querySelector('#pause');
const btnAboutPomodoro = document.querySelector('#more');

const minutesToSecondsTimer = 2;
let lastMin;
let timerStop;
let pauseControl;

function disableButton(btn) {
    btn.disabled = true;
    btn.style.opacity = '0.2';
};

function enableButton(btn) {
    btn.disabled = false
    btn.style.opacity = '1';
}

disableButton(pauseTimer);

startTimer.addEventListener('click', () => {
    controlTimer();
    enableButton(pauseTimer);
    disableButton(startTimer);
    console.log('no click')
});

function controlTimer() {
    if (!pauseControl) {
        console.log('entrou na func')
        if (lastMin) {
            clearInterval(timerStop);
            timerStarted(lastMin, timer);
        } else {
            clearInterval(timerStop);
            timerStarted(minutesToSecondsTimer, timer);
        }
    } else {
        pauseControl = 0;
    }
}

pauseTimer.addEventListener('click', () => {
    enableButton(startTimer);
    disableButton(pauseTimer);
    clearInterval(timerStop);
})


function timerStarted(duration, display) {
    let timer = duration, minutes, seconds;

    timerStop = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        lastMin = timer;
        display.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            clearInterval(timerStop);
            alert('opa hora de descançar um pouco guerreiro');
            enableButton(startTimer);
            disableButton(pauseTimer);
            pauseControl = 1;
            lastMin = 0;
        }
    }, 1000);
}
