const audio = document.querySelector("audio"),
        test = document.getElementById('test'),
        audio2 = document.querySelector("#audio2");

// ADJUSTING AUDIO

audio.volume = 0.09;

window.addEventListener('blur', (event) => {
    audio.pause();
})

window.addEventListener('focus', (event) => {
    audio.play();
})

audio2.pause();


const throne = document.getElementById("throne"),
    modal = document.querySelector('.my-modal'),
    body = document.querySelector('body')
    mang = document.querySelector('.mang'),
    under = document.querySelector('.under'),
    rot = document.querySelectorAll('.rot');

throne.addEventListener('click', () => {
    modal.style.display = "block";
    body.style.overflow = "hidden";
    audio2.play();
    rot.forEach((item) => {
        item.classList.add('animation');
    });
});

under.addEventListener('click', () => {
    modal.style.display = "none";
    body.style.overflow = "visible";
    rot.forEach((item) => {
        item.classList.remove('animation');
    });
})


