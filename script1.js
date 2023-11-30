let pushTaskRef = document.getElementById("push-task-btn");
let addTaskRefs = document.querySelectorAll(".add-ref");
let taskAddBar = document.getElementById("task-add-bar");
let firstTextArea = document.getElementById("first-textArea");
let secondTextArea = document.getElementById("second-textArea");
let coFirstTextArea = document.getElementById("co-first-textArea");
let coSecondTextArea = document.getElementById("co-second-textArea");
let statusFirst = document.getElementById("status");
let priorityFirst = document.getElementById("priority")
let todoList = document.getElementById("todo-list");
let inprogressList = document.getElementById("inprogress-list");
let stuckList = document.getElementById("stuck-list");
let doneList = document.getElementById("done-list");
let rankNum;
let rankNumArr = [];

let state = {
    TodoTasks: [],
    InProgressTaks: [],
    StuckTasks: [],
    DoneTasks: []
}

let sorting = () => {
    rankNum = Number(priorityFirst.value);
    rankNumArr.push(rankNum)
    rankNumArr.sort(function(a, b){return b.priority - a.priority})
}

let refreshingArray = () => {
    if (statusFirst.value === "ToDo") {
        state.TodoTasks.push(
            {title: firstTextArea.value},
            {description: secondTextArea.value},
            {address: statusFirst.value},
            {rank: priorityFirst.value}
            )
    }
    if (statusFirst.value === "InProgress") {
        state.InProgressTaks.push(
            {title: firstTextArea.value},
            {description: secondTextArea.value},
            {address: statusFirst.value},
            {rank: priorityFirst.value}
            )
    }
    if (statusFirst.value === "Stuck") {
        state.StuckTasks.push(
            {title: firstTextArea.value},
            {description: secondTextArea.value},
            {address: statusFirst.value},
            {rank: priorityFirst.value}
            )
    }
    if (statusFirst.value === "Done") {
        state.DoneTasks.push(
            {title: firstTextArea.value},
            {description: secondTextArea.value},
            {address: statusFirst.value},
            {rank: priorityFirst.value}
            )
    }
}

let render = () => {
    let title = document.createElement("h3");
    let description = document.createElement("p");
    let deleteBtn = document.createElement("button");
    let task = document.createElement("div");
    task.classList.add("task");
    let taskClass = document.querySelectorAll(".task");
    title.innerText = firstTextArea.value;
    description.innerText = secondTextArea.value;
    deleteBtn.innerHTML = `<i class="fa-solid fa-minus" style="color: #000000;"></i>`
    task.appendChild(title);
    task.appendChild(description);
    task.appendChild(deleteBtn);
    if (statusFirst.value === "ToDo") todoList.appendChild(task);
    if (statusFirst.value === "InProgress") inprogressList.appendChild(task);
    if (statusFirst.value === "Stuck") stuckList.appendChild(task);
    if (statusFirst.value === "Done") doneList.appendChild(task);
    sorting();
    // deleteBtn.onclick = () => {
    //         if (statusFirst.value === "ToDo"){
    //             todoList.removeChild(task);
    //         }
    //         if (statusFirst.value === "InProgress") inprogressList.removeChild(task);
    //         if (statusFirst.value === "Stuck") stuckList.removeChild(task);
    //         if (statusFirst.value === "Done") doneList.removeChild(task);
    // }
}

addTaskRefs.forEach(addTaskRefs => {
    let displayTaskBar = () =>{
        firstTextArea.value = "";
        secondTextArea.value = "";
        taskAddBar.style.display = "flex";
        if (addTaskRefs.id === "first-ref") statusFirst.value = "ToDo";
        if (addTaskRefs.id === "second-ref") statusFirst.value = "InProgress";
        if (addTaskRefs.id === "third-ref") statusFirst.value = "Stuck";
        if (addTaskRefs.id === "forth-ref") statusFirst.value = "Done";
    }
    addTaskRefs.addEventListener("click", displayTaskBar);
})



let pushingTasks = () => {
    render();
    refreshingArray();
    console.log(rankNumArr);
    taskAddBar.style.display = "none";
}


pushTaskRef.addEventListener("click", pushingTasks)