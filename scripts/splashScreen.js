const splashActive = document.querySelector('.splash_active');

setTimeout(function deleteSplash() {
    splashActive.classList.add('splash_disabled');
}, 3000)