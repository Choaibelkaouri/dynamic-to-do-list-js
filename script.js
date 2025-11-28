// Run code when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    /**
     * Add a task to the DOM (and optionally save it to Local Storage)
     * @param {string} taskText - The text of the task
     * @param {boolean} [save=true] - Whether to save the task to Local Storage
     */
    function addTask(taskText, save = true) {
        // If called without taskText (from button/Enter), read from input
        if (typeof taskText === 'undefined') {
            taskText = taskInput.value.trim();

            // If input is empty, alert the user
            if (taskText === "") {
                alert('Please enter a task.');
                return;
            }
        }

        // Create a new li element and set its textContent
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        // Give it the class name 'remove-btn' using classList.add
        removeButton.classList.add('remove-btn');

        // Assign onclick event to remove this li from taskList and Local Storage
        removeButton.onclick = function () {
            // Remove from DOM
            taskList.removeChild(listItem);

            // Remove from Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const index = storedTasks.indexOf(taskText);
            if (index > -1) {
                storedTasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }
        };

        // Append the remove button to the li
        listItem.appendChild(removeButton);

        // Append the li to the task list
        taskList.appendChild(listItem);

        // If we’re adding from the UI (not from loadTasks)
        if (save) {
            // Clear the input field
            taskInput.value = '';

            // Save to Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    /**
     * Load tasks from Local Storage and add them to the DOM
     */
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(function (taskText) {
            // 'false' so we don't re-save again to Local Storage
            addTask(taskText, false);
        });
    }

    // Add task on button click
    addButton.addEventListener('click', function () {
        addTask(); // will read from taskInput internally
    });

    // Add task on Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(); // will read from taskInput internally
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTas
