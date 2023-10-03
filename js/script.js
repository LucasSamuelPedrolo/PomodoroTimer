const timerDisplay = document.querySelector('.timer');
const startTimer = document.querySelector('#start');
const pauseTimer = document.querySelector('#pause');
const btnAboutPomodoro = document.querySelector('#more');

const minutesToSecondsTimer = 60 * 25;
const minutesToSecondsTimerRest = 60 * 5;
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

    const mainDiv = document.querySelector('.pomodoro-timer');
    timerDisplay.classList.remove('hidden');
    mainDiv.classList.add('pomodoro-timer-animation');
    controlTimer();
    enableButton(pauseTimer);
    disableButton(startTimer);
});

function controlTimer() {
    if (!pauseControl) {
        if (lastMin) {
            clearInterval(timerStop);
            timerStarted(lastMin, timerDisplay, pauseControl);
        } else {
            clearInterval(timerStop);
            timerStarted(minutesToSecondsTimer, timerDisplay, pauseControl);
        }
    } else {
        console.log('vindo aqui')
        pauseControl = 1;
        restTimer()
    }
}

function restTimer() {
    if (lastMin) {
        clearInterval(timerStop);
        timerStarted(lastMin, timerDisplay, pauseControl);
    } else {
        clearInterval(timerStop);
        timerStarted(minutesToSecondsTimerRest, timerDisplay, pauseControl);
    }
}

pauseTimer.addEventListener('click', () => {
    enableButton(startTimer);
    disableButton(pauseTimer);
    clearInterval(timerStop);
})

function timerStarted(duration, display, restTimer) {
    let timer = duration, minutes, seconds;

    timerStop = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;


        lastMin = timer;
        display.textContent = minutes + ':' + seconds;

        document.title = minutes + ':' + seconds;
        if (--timer < 0) {
            if (restTimer === 1) {
                clearInterval(timerStop);
                enableButton(startTimer);
                disableButton(pauseTimer);
                alert('opa hora de descançar um pouco guerreiro');
                pauseControl = 0;
                lastMin = 0;
                timerDisplay.innerHTML = '05:00';
            } else {
                clearInterval(timerStop);
                enableButton(startTimer);
                disableButton(pauseTimer);
                alert('bora la que o sucesso não surge sozinho');
                pauseControl = 1;
                lastMin = 0;
                timerDisplay.innerHTML = '25:00';
            }
        }
    }, 1000);
}
