let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Функция добавления задачи
export function addTask(taskNameInput, descriptionInput) {
    const valueTaskName = taskNameInput.value;
    const valueDescription = descriptionInput.value;

    tasks.push({
        taskName: valueTaskName,
        taskDescription: valueDescription,
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTask(); // Перерисовываем список после добавления
}

// Функция рендера задачи
export function renderTask() {
    const list = document.querySelector('#td_list');
    list.innerHTML = "";

    tasks.forEach((task, index) => { // Добавляем index для удаления
        const taskItem = document.createElement('li');
        taskItem.classList.add('task_item');

        taskItem.innerHTML = `
            <p>${task.taskName}</p>
            <p>${task.taskDescription}</p>
            <button class="delete_task">удалить</button>
        `;

        list.appendChild(taskItem);

        const buttonTaskDelete = taskItem.querySelector('.delete_task');
        buttonTaskDelete.addEventListener('click', () => {
            tasks.splice(index, 1); // Удаляем задачу по индексу
            localStorage.setItem('tasks', JSON.stringify(tasks)); // Обновляем localStorage
            renderTask(); // Перерисовываем список
        });
    });
}