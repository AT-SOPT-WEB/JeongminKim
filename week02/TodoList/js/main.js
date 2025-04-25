import { renderTodos } from "./render.js";
import { handleAddTodo } from "./addTodo.js";
import { setupFilterButtons } from "./filters.js";
import { setupActionButtons } from "./actions.js";

renderTodos(JSON.parse(localStorage.getItem("todoItems")));

handleAddTodo();
setupFilterButtons();
setupActionButtons();
