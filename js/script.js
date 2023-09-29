const timer = document.querySelector('.timer');
const startTimer = document.querySelector('#start');
const resetTimer = document.querySelector('#reset');
const pauseTimer = document.querySelector('#pause');
const btnAboutPomodoro = document.querySelector('#more');

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


function timerStarted(minutes, seconds) {
    timerControl = setInterval(() => {
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;


    }, 1000);
}
