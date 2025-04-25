import { renderTodos } from "./render.js";
import { addTodo } from "./add.js";
import { setFilterButtons } from "./filters.js";
import { setActionButtons } from "./actions.js";

renderTodos(JSON.parse(localStorage.getItem("todoItems")));

addTodo();
setFilterButtons();
setActionButtons();
