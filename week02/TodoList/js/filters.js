//필터링 버튼
import { renderTodos } from "./render.js";

export function filterTodos(condition) {
    const allTodos = JSON.parse(localStorage.getItem("todos"));

    let filtered = allTodos;
    if (condition === "completed") {
        filtered = allTodos.filter((todo) => todo.completed);
    } else if (condition === "active") {
        filtered = allTodos.filter((todo) => !todo.completed);
    }
    renderTodos(filtered);
}

export function setFilterButtons() {
    document.querySelectorAll(".filter-btn").forEach((button) => {
        button.addEventListener("click", () => {
            const condition = button.dataset.filter;
            if (condition) filterTodos(condition);
        });
    });
}
