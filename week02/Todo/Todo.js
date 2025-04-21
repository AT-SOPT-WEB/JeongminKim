const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

const todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerText = todo;
        li.addEventListener("click", () => {
            todos.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(todos));
            renderTodos();
        });
        todoList.appendChild(li);
    });
}

//이벤트  핸들러
addBtn.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        todos.push(input.value.trim());
        localStorage.setItem("todos", JSON.stringify(todos));
        input.value = "";
        renderTodos();
    }
});

renderTodos();
