import { renderTodos } from "./render.js";

export function handleAddTodo() {
    const inputEl = document.getElementById("todo-input");
    const selectEl = document.getElementById("todo-select");
    const addBtn = document.getElementById("add-btn");

    addBtn.addEventListener("click", () => {
        const title = inputEl.value.trim();
        const priority = selectEl.value;

        if (!title || !priority) {
            alert("할 일과 중요도를 모두 입력해주세요!");
            return;
        }

        const newTodo = {
            id: Date.now(),
            title,
            priority: parseInt(priority),
            completed: false,
        };

        const todos = JSON.parse(localStorage.getItem("todoItems")) || [];
        todos.push(newTodo);
        localStorage.setItem("todoItems", JSON.stringify(todos));

        renderTodos(todos);
        inputEl.value = "";
        selectEl.value = "";
    });
}
