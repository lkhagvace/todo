let pushTaskRef = document.getElementById("push-task-btn");
let addTaskRefs = document.querySelectorAll(".add-ref");
let taskAddBar = document.getElementById("task-add-bar");
let cancelTaskAddBar = document.getElementById("cancel-01");
let firstTextArea = document.getElementById("first-textArea");
let secondTextArea = document.getElementById("second-textArea");
let coFirstTextArea = document.getElementById("co-first-textArea");
let coSecondTextArea = document.getElementById("co-second-textArea");
let statusFirst = document.getElementById("status")

addTaskRefs.forEach(addTaskRefs => {


    let displayTaskBar = () =>{
        taskAddBar.style.display = "flex";
        if (addTaskRefs.id === "first-ref") statusFirst.value = "ToDo";
        if (addTaskRefs.id === "second-ref") statusFirst.value = "InProgress";
        if (addTaskRefs.id === "third-ref") statusFirst.value = "Stuck";
        if (addTaskRefs.id === "forth-ref") statusFirst.value = "Done";
    }
    addTaskRefs.addEventListener("click", displayTaskBar);
})


let creatingTask = () => {
    let task = document.createElement("div");
    task.classList
}




cancelTaskAddBar.onclick = () => {
    taskAddBar.style.display = "none"
}

let pushingTaskToContainers = () => {
    
}
pushTaskRef.addEventListener("click", pushingTaskToContainers)