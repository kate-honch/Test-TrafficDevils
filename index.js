const button = document.querySelector('.main__button');
const slot = document.querySelector('.main__slot');
const arrow = document.querySelector('.main__arrow');
const winBlock = document.querySelector('.main__win');
const mainBlock = document.querySelector('.main__block');
const winButton = document.querySelector('.win__button');

button.addEventListener('click', () => {
    slot.classList.add('active');
    button.classList.add('stop');
    button.disabled = true;

    const showNextBlock = () => {
        winBlock.classList.add('active');
        mainBlock.classList.add('hide');
    }

    setTimeout(showNextBlock, 4000);
});

winButton.addEventListener('click', () => {
    alert('Thank you for participating. Expect a call!')
})
