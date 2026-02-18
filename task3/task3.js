// ─── Fixed Task Data ──────────────────────────────────────────────────────────
var tasks = [
    { id: 1, text: "Read Chapter 1 of the textbook", completed: false },
    { id: 2, text: "Complete the lab assignment", completed: false },
    { id: 3, text: "Review lecture notes", completed: false }
];

// ─── Render All Tasks ─────────────────────────────────────────────────────────
function renderTasks() {
    var container = document.getElementById("todo-container");
    container.innerHTML = "";

    // Loop through tasks and build DOM elements for each
    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];

        var taskDiv = document.createElement("div");
        taskDiv.id = "task-" + task.id;

        // Input field showing task text (editable)
        var input = document.createElement("input");
        input.type = "text";
        input.id = "input-" + task.id;
        input.value = task.text;

        // Apply strike-through if task is completed
        if (task.completed) {
            input.style.textDecoration = "line-through";
        } else {
            input.style.textDecoration = "none";
        }

        // Complete button
        var completeBtn = document.createElement("button");
        completeBtn.textContent = task.completed ? "Undo" : "Complete";
        completeBtn.setAttribute("onclick", "toggleComplete(" + task.id + ")");

        // Remove button
        var removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.setAttribute("onclick", "removeTask(" + task.id + ")");

        // Status label
        var statusSpan = document.createElement("span");
        statusSpan.textContent = task.completed ? " ✔ Done" : " ⏳ Pending";

        taskDiv.appendChild(input);
        taskDiv.appendChild(completeBtn);
        taskDiv.appendChild(removeBtn);
        taskDiv.appendChild(statusSpan);

        container.appendChild(taskDiv);
        container.appendChild(document.createElement("br"));
    }

    updateSummary();
}

// ─── Toggle Complete ──────────────────────────────────────────────────────────
function toggleComplete(id) {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = !tasks[i].completed;
            break;
        }
    }
    renderTasks();
}

// ─── Remove Task ──────────────────────────────────────────────────────────────
function removeTask(id) {
    var newTasks = [];
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id !== id) {
            newTasks.push(tasks[i]);
        }
    }
    tasks = newTasks;
    renderTasks();
}

// ─── Update Summary ───────────────────────────────────────────────────────────
function updateSummary() {
    var completed = 0;
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].completed) {
            completed++;
        }
    }

    var total = tasks.length;
    var summaryDiv = document.getElementById("summary");

    if (total === 0) {
        summaryDiv.innerHTML = "<p>📭 No tasks remaining.</p>";
        return;
    }

    var message = "<p>Tasks completed: " + completed + " / " + total + "</p>";

    if (completed === total) {
        message += "<p>🎉 All tasks are done! Great job!</p>";
    } else if (completed > 0) {
        message += "<p>👍 Keep going, you're making progress!</p>";
    } else {
        message += "<p>📝 No tasks completed yet. Get started!</p>";
    }

    summaryDiv.innerHTML = message;
}

// ─── Reset All Tasks ──────────────────────────────────────────────────────────
function resetList() {
    tasks = [
        { id: 1, text: "Read Chapter 1 of the textbook", completed: false },
        { id: 2, text: "Complete the lab assignment", completed: false },
        { id: 3, text: "Review lecture notes", completed: false }
    ];
    renderTasks();
}

// ─── Init ─────────────────────────────────────────────────────────────────────
renderTasks();
