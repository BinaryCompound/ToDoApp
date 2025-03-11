"use strict";
const content = document.querySelector('.show_content');
const splashActive = document.querySelector('.splash_active');
const buttonSend = document.querySelector('#send_button');//Кнопка добавления задачи
const taskNameInput = document.querySelector('#popup_task_name');
const descriptionInput = document.querySelector('#popup_text');

import { popupClose, popupOpen, dialogClose } from "./src/components/modal.js";
import { addTask, renderTask } from "./src/components/createTask.js";

document.addEventListener('DOMContentLoaded', renderTask);

//splashScreen
setTimeout(function showContent() {
    content.classList.add('show_content_active');
}, /*3500*/ 600 /*<-временное значение*/);

//Показать контент
setTimeout(function deleteSplash() {
    splashActive.classList.add('splash_disabled');
}, /*3000*/ 500 /*<-временное значение*/)

// Открытие закрытие попапа
dialogOpen.addEventListener('click', () => {
    popupOpen();
})

dialogClose.addEventListener('click', () => {
    popupClose();
    taskNameInput.value = "";
    descriptionInput.value = "";
});

buttonSend.addEventListener('click', () => {
    addTask(taskNameInput, descriptionInput);

    taskNameInput.value = "";
    descriptionInput.value = "";
    popupClose();
    renderTask();
});

//localStorage.clear();//очистить хранилище