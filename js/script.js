const timerDisplay = document.querySelector('.timer');
const startTimer = document.querySelector('#start');
const pauseTimer = document.querySelector('#pause');
const btnAboutPomodoro = document.querySelector('#more');
const mainTitle = document.querySelector('.main-title');
const mainDiv = document.querySelector('.pomodoro-timer');
const sectionAboutContent = document.querySelector('.section-content-more');

const minutesToSecondsTimer = 60 * 25;
let minutesToSecondsTimerRest = 60 * 5;
let lastMin;
let timerStop;
let pauseControl = 0;
let morePauseTimer = 0;

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

    mainTitle.classList.add('hidden');
    timerDisplay.classList.remove('hidden');
    mainDiv.classList.add('pomodoro-timer-animation');
    controlTimer();
    enableButton(pauseTimer);
    disableButton(startTimer);
});

btnAboutPomodoro.addEventListener('click', () => {
    sectionAboutContent.classList.toggle('hidden');
})

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
        pauseControl = 1;
        restTimer()
    }
}

function restTimer() {
    if (morePauseTimer >= 5) {
        minutesToSecondsTimerRest = 60 * 30;
        if (lastMin) {
            clearInterval(timerStop);
            timerStarted(lastMin, timerDisplay, pauseControl);
        } else {
            clearInterval(timerStop);
            timerStarted(minutesToSecondsTimerRest, timerDisplay, pauseControl);
        }
    } else {
        if (lastMin) {
            clearInterval(timerStop);
            timerStarted(lastMin, timerDisplay, pauseControl);
        } else {
            clearInterval(timerStop);
            timerStarted(minutesToSecondsTimerRest, timerDisplay, pauseControl);
        }
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
            morePauseTimer++;
            console.log(restTimer, pauseControl)
            if (restTimer === 0) {
                clearInterval(timerStop);
                enableButton(startTimer);
                disableButton(pauseTimer);
                alert('opa hora de descançar um pouco guerreiro');
                ++pauseControl;
                lastMin = 0;
                if (morePauseTimer >= 5) {
                    timerDisplay.innerHTML = '30:00';
                } else {
                    timerDisplay.innerHTML = '05:00';
                }
            }
            if (restTimer === 1) {
                clearInterval(timerStop);
                enableButton(startTimer);
                disableButton(pauseTimer);
                alert('bora la que o sucesso não surge sozinho');
                --pauseControl;
                lastMin = 0;
                timerDisplay.innerHTML = '25:00';
            }
        }
    }, 1000);
}
