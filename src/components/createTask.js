let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//функция добавления задачи
export function addTask(taskNameInput, descriptionInput) {
    let valueTaskName = taskNameInput.value;
    let valueDescription = descriptionInput.value;
    let newTask = {
        taskName: valueTaskName,
        taskDescription: valueDescription,
    };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks);
}

//функция рендера задачи
export function renderTask() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    let list = document.querySelector('#td_list');
    list.innerHTML = "";
    tasks.forEach((tasks) => {
        let taskItem = document.createElement('li');
        taskItem.classList.add('task_item');

        taskItem.innerHTML = `
        <p>${tasks.taskName}</p>
        <p>${tasks.taskDescription}</p>
        <button>удалить</bottun>
        `;

        list.appendChild(taskItem);
    });
}