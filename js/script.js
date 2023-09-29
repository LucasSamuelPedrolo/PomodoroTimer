const timer = document.querySelector('.timer');
const startTimer = document.querySelector('#start');
const pauseTimer = document.querySelector('#pause');
const btnAboutPomodoro = document.querySelector('#more');

const minutesToSecondsTimer = 60 * 2;
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

disableButton(pauseTimer);

document.addEventListener('click', (e) => {
    const elem = e.target;

    if (elem.id === 'start') {
        disableButton(startTimer);
        enableButton(pauseTimer);

        if (!lastMin) {
            clearInterval(timerControl);
            timerStarted(lastMin, timer);
            console.log('dentro do last min if')
        }
        clearInterval(timerControl);
        timerStarted(minutesToSecondsTimer, timer);
        console.log('ação aqui');
    }

    if (elem.id === 'pause') {
        clearInterval(timerControl);
        enableButton(startTimer);
        disableButton(pauseTimer);
    }
    if (elem.id === 'more') {

    }
})

function timerStarted(duration, display) {
    let timer = duration, minutes, seconds;

    timerControl = setInterval(() => {
        console.log('last ', timer + 'e' + lastMin)
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        lastMin = timer;
        display.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            clearInterval(timerControl);
        }
    }, 1000);
}
