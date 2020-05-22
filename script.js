const audio = document.querySelector("audio"),
        test = document.getElementById('test');

// ADJUSTING AUDIO

audio.volume = 0.1;

window.addEventListener('blur', (event) => {
    audio.pause();
})

window.addEventListener('focus', (event) => {
    audio.play();
})



