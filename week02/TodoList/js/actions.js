import { renderTodos } from "./render.js";

function getCheckedIndexes() {
    const checkboxes = document.querySelectorAll('#todo-list input[type="checkbox"]');
    return Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => parseInt(checkbox.dataset.index));
}

export function setupActionButtons() {
    const deleteBtn = document.querySelectorAll(".action-btn")[0];
    const completeBtn = document.querySelectorAll(".action-btn")[1];

    deleteBtn.addEventListener("click", () => {
        let todos = JSON.parse(localStorage.getItem("todoItems")) || [];
        const checkedIndexes = getCheckedIndexes();
        checkedIndexes
            .sort((a, b) => b - a)
            .forEach((index) => {
                todos.splice(index, 1);
            });
        localStorage.setItem("todoItems", JSON.stringify(todos));
        renderTodos(todos);
    });

    completeBtn.addEventListener("click", () => {
        let todos = JSON.parse(localStorage.getItem("todoItems")) || [];
        const checkedIndexes = getCheckedIndexes();

        const hasCompleted = checkedIndexes.some((index) => todos[index].completed);
        if (hasCompleted) {
            alert("이미 완료된 항목이 포함되어 있어 완료 처리가 취소됩니다.");
            return;
        }

        checkedIndexes.forEach((index) => {
            todos[index].completed = true;
        });

        localStorage.setItem("todoItems", JSON.stringify(todos));
        renderTodos(todos);
    });
}
