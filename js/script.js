const timer = document.querySelector('.timer');
const startTimer = document.querySelector('#start');
const resetTimer = document.querySelector('#reset');
const pauseTimer = document.querySelector('#pause');
const btnAboutPomodoro = document.querySelector('#more');


document.addEventListener('click', (e) => {
    const elem = e.target;

    if (elem.id === 'start') {
        console.log(elem.id)
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
