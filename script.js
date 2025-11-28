// Run code when the page is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Select elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function that adds a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }

        // Create li element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Remove task when clicking button
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Assemble list item
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input
        taskInput.value = '';
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
