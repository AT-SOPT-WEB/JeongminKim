import { todos } from "../data/todos.js";

// localStorage 저장
if (!localStorage.getItem("todoItems")) {
    localStorage.setItem("todoItems", JSON.stringify(todos));
}
const todoData = JSON.parse(localStorage.getItem("todoItems"));

// 테이블에 데이터 렌더링
function renderTodos(todoList) {
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

// 필터링 함수
function filterTodos(condition) {
    const allTodos = JSON.parse(localStorage.getItem("todoItems"));

    let filtered = allTodos;
    if (condition === "completed") {
        filtered = allTodos.filter((todo) => todo.completed);
    } else if (condition === "active") {
        filtered = allTodos.filter((todo) => !todo.completed);
    }
    renderTodos(filtered);
}

document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const condition = button.dataset.filter;
        filterTodos(condition);
    });
});

filterTodos("all");
