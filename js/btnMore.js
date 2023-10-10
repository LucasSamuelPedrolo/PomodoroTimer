const btnAboutPomodoro = document.querySelector('#more');
const sectionAboutContent = document.querySelector('.section-content-more');


btnAboutPomodoro.addEventListener('click', () => {
    sectionAboutContent.classList.toggle('hidden');
})
