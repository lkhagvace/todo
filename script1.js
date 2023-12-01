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
let firstContainer = document.getElementById("container1");
let secondContainer = document.getElementById("container2");
let thirdContainer = document.getElementById("container3");
let forthContainer = document.getElementById("container4");
let firstLength = document.getElementById("firstLength");
let secondLength = document.getElementById("secondLength");
let thirdLength = document.getElementById("thirdLength");
let forthLength = document.getElementById("forthLength")
let rankNum;

let state = {
    tasks: []
}

let counting = () => {
    firstLength.innerText = todoList.childElementCount;
    secondLength.innerText = inprogressList.childElementCount;
    thirdLength.innerText = stuckList.childElementCount;
    forthLength.innerText = doneList.childElementCount;
}

let render = () => {
    let title = document.createElement("h3");
    let description = document.createElement("p");
    let deleteBtn = document.createElement("button");
    let task = document.createElement("div");
    task.classList.add("task");
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
    refreshingArray()
    counting();
}

let refreshingArray = () => {
    state.tasks.push(
        {title: firstTextArea.value,
        description: secondTextArea.value,
        address: statusFirst.value,
        rank: priorityFirst.value
        }
        )
        const sorted = state.tasks.sort((a, b) => {
            return Number(b.rank) - Number(a.rank)
        })
        console.log(sorted);

        

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
    taskAddBar.style.display = "none";
}
pushTaskRef.addEventListener("click", pushingTasks)