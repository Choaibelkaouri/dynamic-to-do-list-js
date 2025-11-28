// Run the script after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();

        // If input is empty, alert the user
        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }

        // Create a new li element and set its textContent
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';

        // Give it the class name 'remove-btn' using classList.add
        removeButton.classList.add('remove-btn');

        // Assign onclick event to remove this li from taskList
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
            // or: listItem.remove();
        };

        // Append the remove button to the li
        listItem.appendChild(removeButton);

        // Append the li to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add click listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow adding task by pressing Enter in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
