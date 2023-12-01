let state = {task: []};
let firstInput = document.getElementById("title");
let secondInput = document.getElementById("p");
let task = document.createElement("div");
let addBtn = document.getElementById("add");
let mainBtn = document.getElementById("mainBtn");
let taskBar = document.getElementById("adding-task");


mainBtn.onclick = () => {
    taskBar.style.display = "flex"
}

addBtn.onclick = () => {
    let title = document.createElement("div");
    let p = document.createElement("p");
    let task = document.createElement("div");
    task.classList.add("task")
    title.innerText = firstInput.value;
    p.innerText = secondInput.value;
    task.appendChild(title);
    task.appendChild(p);
    document.body.appendChild(task)
}

