"use strict";

const input = document.querySelector('.taskInput'); // Поле ввода
const buttonSaveTask = document.querySelector('.buttonSaveTask'); // Кнопка добавления задачи
const box = document.querySelector('.tasks'); // Место для задачи
const form = document.querySelector('.form'); // форма добавления задачи
const descriptionText = document.querySelector('.description');

// Загружаем задачи из localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function callForm() {
    buttonAddTask.addEventListener('click', () => {
        console.log('клик');
        form.classList.add('form_active');
        descriptionText.classList.add('descriptionOff');
    });
}

// Функция отрисовки задачи
function renderTask(value) {
    const taskElement = document.createElement('div');
    const buttonDelete = document.createElement('button');

    buttonDelete.textContent = 'удалить';
    taskElement.textContent = value;
    taskElement.classList.add('task');
    taskElement.appendChild(buttonDelete);
    box.appendChild(taskElement);

    // Удаление задачи
    buttonDelete.addEventListener('click', () => {
        taskElement.remove();
        tasks = tasks.filter(task => task !== value);
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Обновляем localStorage
    });
}

// Функция добавления задачи
function addTask() {
    buttonSaveTask.addEventListener('click', (event) => {
        event.preventDefault();

        const value = input.value.trim();

        if (value !== '') {
            tasks.push(value);
            localStorage.setItem('tasks', JSON.stringify(tasks)); // Сохраняем в localStorage

            renderTask(value);
            input.value = '';
        }
    });
}

tasks.forEach(renderTask);
addTask();
callForm();