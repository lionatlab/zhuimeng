const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function saveToDos(obj) {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li"),
        delBtn = document.createElement("button"),
        span = document.createElement("span"),
        newId = toDos.length + 1;

    toDoList.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(span);

    li.id = newId;
    delBtn.innerText = "❌";
    span.innerText = text;

    const toDoObj = {
        text: text,
        id: newId,
    }
    toDos.push(toDoObj);
    saveToDos(toDos);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const toDoList = localStorage.getItem(TODOS_LS);
    if (toDoList !== null) {

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
