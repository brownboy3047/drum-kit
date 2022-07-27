window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return;//stop the function from running altogether
    audio.currentTime = 0; //rewind to the start
    audio.play();

    key.classList.add('playing');
    console.log(e)
});



const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
    key.addEventListener('transitionend', (e) => {
        if (e.propertyName !== 'transform') return; //skip if it is not a transform

        e.target.classList.remove('playing');
    });
});

