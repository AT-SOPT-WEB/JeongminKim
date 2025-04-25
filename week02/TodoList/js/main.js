import { todos } from "../data/todos.js";
import { renderTodos } from "./render.js";
import { addTodo } from "./add.js";
import { setFilterButtons } from "./filters.js";
import { setActionButtons } from "./actions.js";

if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

renderTodos(JSON.parse(localStorage.getItem("todos")));
addTodo();
setFilterButtons();
setActionButtons();
