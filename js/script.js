const timer = document.querySelector('.timer');
const startTimer = document.querySelector('#start');
const resetTimer = document.querySelector('#reset');
const pauseTimer = document.querySelector('#pause');
const btnAboutPomodoro = document.querySelector('#more');
const animationTimerStart = document.querySelector('.pomodoro-timer-animation');

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
        animationTimerStart.classList.remove('hidden');
    }
    if (elem.id === 'reset') {
        console.log(elem.id)
    }
    if (elem.id === 'pause') {
        console.log(elem.id)
    }
    if (elem.id === 'more') {
        console.log(elem.id)
    }

})


