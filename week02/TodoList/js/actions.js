//삭제, 완료 버튼
import { renderTodos } from "./render.js";

function getCheckedIndexes() {
    const checkboxes = document.querySelectorAll('#todo-list input[type="checkbox"]');
    return Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => parseInt(checkbox.dataset.index));
}

//모달
function showModal() {
    document.getElementById("modal").classList.remove("hidden");
}

function hideModal() {
    document.getElementById("modal").classList.add("hidden");
}

function setupModalEvent() {
    const closeBtn = document.getElementById("modal-btn");
    if (closeBtn) {
        closeBtn.addEventListener("click", hideModal);
    }
}

export function setActionButtons() {
    setupModalEvent();
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
            showModal();
            return;
        }

        checkedIndexes.forEach((index) => {
            todos[index].completed = true;
        });

        localStorage.setItem("todoItems", JSON.stringify(todos));
        renderTodos(todos);
    });
}
