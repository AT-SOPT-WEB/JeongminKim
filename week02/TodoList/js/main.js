import { todos } from "../data/todos.js";

//데이터 저장
localStorage.setItem("todoItems", JSON.stringify(todos));
