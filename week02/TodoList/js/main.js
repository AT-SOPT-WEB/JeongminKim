// js/main.js

import { todos } from "../data/todos.js";

// 1. 초기 데이터 localStorage에 저장 (이미 저장되어 있으면 덮어쓰기 X)
if (!localStorage.getItem("todoItems")) {
    localStorage.setItem("todoItems", JSON.stringify(todos));
}

// 2. localStorage에서 데이터 가져오기
const todoData = JSON.parse(localStorage.getItem("todoItems"));

// 3. 테이블에 데이터 렌더링
function renderTodos(todoList) {
    const tbody = document.getElementById("todo-list");
    tbody.innerHTML = ""; // 기존 내용 비우기

    todoList.forEach((todo, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td><input type="checkbox" data-index="${index}" /></td>
            <td>${todo.completed ? "✅" : ""}</td>
            <td class="priority-${todo.priority}">${"⚝".repeat(todo.priority)}</td>
            <td>${todo.title}</td>
        `;

        tbody.appendChild(tr);
    });
}

// 4. 페이지 로드 시 렌더링 실행
renderTodos(todoData);
