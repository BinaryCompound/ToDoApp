"use strict";
const content = document.querySelector('.show_content');
const splashActive = document.querySelector('.splash_active');

import { popupClose, popupOpen, dialogClose } from "./src/scripts/modal.js";

//splashScreen
setTimeout(function showContent() {
    content.classList.add('show_content_active');
}, 3500);

//Показать контент
setTimeout(function deleteSplash() {
    splashActive.classList.add('splash_disabled');
}, 3000)

// Открытие закрытие попапа
dialogOpen.addEventListener('click', () => {
    popupOpen();
})

dialogClose.addEventListener('click', () => {
    popupClose();
})