// Select elements
const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${taskText}
            <button onclick="removeTask(this)">Done</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = ''; // Clear the input field
    }
}

// Function to remove a task
function removeTask(button) {
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
}

// Event listener for the "Enter" key
taskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
