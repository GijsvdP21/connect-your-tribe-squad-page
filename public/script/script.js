const star = document.querySelector('.star');

const goal = document.querySelector('.goal');

const modal = document.querySelector('.modal');

const modals = document.querySelector('.modals');

const opstelling = document.querySelector('h1');

const firstScreen = document.querySelector('.first-screen')

const SecondScreen = document.querySelector('.second-screen')

opstelling.addEventListener('click', ScreenSwitch)

function ScreenSwitch() {
    firstScreen.classList.toggle('hide-first-screen');
    SecondScreen.classList.toggle('show-second-screen');
}



star.addEventListener('click', OpenModal)

function OpenModal() {
    modal.classList.toggle('show-modal')
}

goal.addEventListener('click', OpenModals)

function OpenModals() {
    modals.classList.toggle('show-modals')
}