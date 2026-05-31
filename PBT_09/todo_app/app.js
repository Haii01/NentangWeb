const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

const itemsLeft = document.querySelector("#itemsLeft");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const clearCompletedBtn =
    document.querySelector("#clearCompleted");

let todos =
    JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";

function saveTodos() {
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

function updateCount() {

    const activeCount =
        todos.filter(todo =>
            !todo.completed
        ).length;

    itemsLeft.textContent =
        `${activeCount} items left`;
}

function createTodoElement(todo) {

    const li =
        document.createElement("li");

    li.classList.add("todo-item");

    if (todo.completed) {
        li.classList.add("completed");
    }

    li.dataset.id = todo.id;

    const span =
        document.createElement("span");

    span.classList.add("todo-text");
    span.textContent = todo.text;

    const deleteBtn =
        document.createElement("button");

    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "❌";

    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

function renderTodos() {

    todoList.textContent = "";

    let filteredTodos = [...todos];

    if (currentFilter === "active") {

        filteredTodos =
            todos.filter(todo =>
                !todo.completed
            );
    }

    if (currentFilter === "completed") {

        filteredTodos =
            todos.filter(todo =>
                todo.completed
            );
    }

    filteredTodos.forEach(todo => {

        const todoElement =
            createTodoElement(todo);

        todoList.appendChild(todoElement);

    });

    updateCount();
}

todoForm.addEventListener("submit", e => {

    e.preventDefault();

    const text =
        todoInput.value.trim();

    if (text === "") {
        return;
    }

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(newTodo);

    saveTodos();
    renderTodos();

    todoInput.value = "";
    todoInput.focus();
});

todoList.addEventListener("click", e => {

    const li =
        e.target.closest(".todo-item");

    if (!li) {
        return;
    }

    const id =
        Number(li.dataset.id);

    const todo =
        todos.find(todo =>
            todo.id === id
        );

    if (
        e.target.classList.contains(
            "delete-btn"
        )
    ) {

        todos =
            todos.filter(todo =>
                todo.id !== id
            );

        saveTodos();
        renderTodos();

        return;
    }

    if (
        e.target.classList.contains(
            "todo-text"
        )
    ) {

        todo.completed = !todo.completed;

        saveTodos();
        renderTodos();
    }
});

todoList.addEventListener("dblclick", e => {

    if (!e.target.classList.contains(
            "todo-text"
        )) {
        return;
    }

    const span = e.target;

    const li =
        span.closest(".todo-item");

    const id =
        Number(li.dataset.id);

    const todo =
        todos.find(todo =>
            todo.id === id
        );

    const input =
        document.createElement("input");

    input.type = "text";
    input.value = todo.text;

    input.classList.add("edit-input");

    li.replaceChild(input, span);

    input.focus();

    input.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                const newValue =
                    input.value.trim();

                if (newValue !== "") {

                    todo.text =
                        newValue;

                    saveTodos();
                    renderTodos();
                }
            }
        }
    );
});

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            currentFilter =
                button.dataset.filter;

            renderTodos();
        }
    );
});

clearCompletedBtn.addEventListener(
    "click",
    () => {

        todos =
            todos.filter(todo =>
                !todo.completed
            );

        saveTodos();
        renderTodos();
    }
);

renderTodos();