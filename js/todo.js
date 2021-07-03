const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 배열처럼 보이는 string으로 저장
}

function deleteToDo(event) {
	const li = event.target.parentElement; // 삭제버튼을 클릭하 요소를 찾음?

	li.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	saveToDos();
}

function paintToDo(newTodo) {
	const li = document.createElement("li");
	li.id = newTodo.id;
	const span = document.createElement("span");
	span.innerText = newTodo.text; 
	const button = document.createElement("button");
	button.innerText = "❌";
	button.addEventListener("click", deleteToDo);
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = "";
	const newTodoObj = {
		text: newTodo,
		id: Date.now(),
	}
	toDos.push(newTodoObj);
	paintToDo(newTodoObj);
	saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos) {
	const parsedToDos = JSON.parse(savedToDos); // 배열처럼 보이는 string을 js에 진짜 배열로 바꿈
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);
}
