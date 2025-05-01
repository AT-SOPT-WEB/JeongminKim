export function renderTodos(todoList) {
    const tbody = document.getElementById("todo-list");
    tbody.innerHTML = "";

    todoList.forEach((todo, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><input type="checkbox" data-index="${index}" /></td>
            <td>${todo.completed ? "✅" : "❌"}</td>
            <td class="priority-${todo.priority}">${"⚝".repeat(todo.priority)}</td>
            <td>${todo.title}</td>
        `;
        tbody.appendChild(tr);
    });
}
