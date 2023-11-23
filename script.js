let containers = document.querySelectorAll(".containers")
containers.forEach(containers => {
    let taskbar = document.getElementById("taskAddBar");
    let addBtn = document.querySelectorAll(".addBtn");
    addBtn.forEach(addBtn => {
        let addingBtn = () => {
            taskbar.style.display = "flex";
            taskbar.style.flexDirection = "column";
            taskbar.style.justifyContent = "space-between";
        }
        addBtn.addEventListener("click", addingBtn);
    })

    let coTaskBar = document.getElementById("coAddTaskBtn");
    let coAddingBtn = () => {
        taskbar.style.display = "none";


        let tasks = document.createElement("div");
        tasks.classList.add("task")
        containers.appendChild(tasks);


        let IsItDoneBtn = document.createElement("button");
        IsItDoneBtn.classList.add("IsItDone");
        tasks.appendChild(IsItDoneBtn);


        let NameOfInput = document.getElementById("inputFirst");
        let nameOfTask = document.createElement("h4");
        nameOfTask.innerText = NameOfInput.value;
        tasks.appendChild(nameOfTask);


        let Description = document.getElementById("inputSecond")
        let description = document.createElement("p");
        description.innerText = Description.value;
        tasks.appendChild(description);

    }
    coTaskBar.addEventListener("click", coAddingBtn);
    
})