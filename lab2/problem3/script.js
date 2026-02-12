let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }

    // Create a task object
    const task = {
        id: Date.now(), // Unique ID based on time
        text: taskText,
        completed: false
    };

    tasks.push(task);
    taskInput.value = ''; // Clear input

    renderTasks(); // Update the screen
}

function toggleComplete(id) {
    // Find the task in the array
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            // Flip the completed status (true becomes false, false becomes true)
            tasks[i].completed = !tasks[i].completed;
            break;
        }
    }
    renderTasks();
}

function deleteTask(id) {
    // Filter out the task with the given ID
    // keeping only tasks where task.id is NOT equal to the id we want to delete
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

let currentFilter = 'all';

function filterTasks(status) {
    currentFilter = status;
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear current list

    let completedCount = 0;

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        // Filter logic
        if (currentFilter === 'active' && task.completed) continue; // Skip completed if viewing active
        if (currentFilter === 'completed' && !task.completed) continue; // Skip active if viewing completed

        // Count completed tasks
        if (task.completed) completedCount++;

        // Create list item
        const li = document.createElement('li');
        if (task.completed) {
            li.classList.add('completed');
        }

        // Add HTML for the task item
        li.innerHTML = `
            <span onclick="toggleComplete(${task.id})" style="cursor: pointer;">${task.text}</span>
            <button onclick="deleteTask(${task.id})" style="background: #ffcccc; border: none; color: red;">X</button>
        `;

        taskList.appendChild(li);
    }

    // Update count
    document.getElementById('completedCount').innerText = completedCount;
}
