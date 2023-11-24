let containers = document.querySelectorAll(".containers")
let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");
let container4 = document.getElementById("container4");
let h3 = document.querySelectorAll("h3");
let bigCon = document.getElementById("big-container");
let value = document.getElementById("status");
let valueOfRank = document.getElementById("priority")
var taskbar = document.getElementById("taskAddBar");
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
        tasks.draggable = "true";


        let IsItDoneBtn = document.createElement("button");
        IsItDoneBtn.innerHTML = `<i class="fa-solid fa-check" style="color: #000000;"></i>`
        IsItDoneBtn.classList.add("IsItDone");
        tasks.appendChild(IsItDoneBtn);


        let textTask = document.createElement("div");
        textTask.classList.add("textTask");
        tasks.appendChild(textTask);


        let deleteAndChange = document.createElement("div");
        deleteAndChange.classList.add("deleteAndChange");
        tasks.appendChild(deleteAndChange);


        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `<i class="fa-solid fa-minus" style="color: #000000;"></i>`;
        let changeBtn = document.createElement("button");
        changeBtn.innerHTML = `<i class="fa-solid fa-wrench" style="color: #000000;"></i>`
        deleteAndChange.appendChild(deleteBtn);
        deleteAndChange.appendChild(changeBtn);


        var NameOfInput = document.getElementById("inputFirst");
        let nameOfTask = document.createElement("h4");
        if (NameOfInput.value === "") return false
        nameOfTask.innerText = NameOfInput.value;
        textTask.appendChild(nameOfTask);


        var Description = document.getElementById("inputSecond")
        let description = document.createElement("p");
        description.innerText = Description.value;
        textTask.appendChild(description);


        let rank = document.createElement("div");
        rank.classList.add("rank");
        textTask.appendChild(rank)
        rank.innerText = valueOfRank.value;


        if (value.value === "ToDo"){
            container1.appendChild(tasks)
        }
        if (value.value === "InProgress"){
            container2.appendChild(tasks)
        }
        if (value.value === "Stuck"){
            container3.appendChild(tasks)
        }
        if (value.value === "Done"){
            container4.appendChild(tasks)
        }
    

        let task = document.querySelectorAll(".task");
        task.forEach(task => {
            task.addEventListener("dragstart", () => {
                task.classList.add("dragging");
            });
            task.addEventListener("dragend", () => {
                task.classList.remove("dragging")
            })

            let GoToDone = () => {
                container4.appendChild(task)
            }


            IsItDoneBtn.addEventListener("click", GoToDone)
        })
        containers.forEach(containers => {
            containers.addEventListener("dragover", e => {
                e.preventDefault();
                let draggable = document.querySelector(".dragging");
                containers.appendChild(draggable)
            })
            let deleteTask = () => {
                task.forEach(task => {
                    containers.removeChild(task.lastChild)
                })
            }




            let changingRef = () => {
                taskbar.style.display = "flex";

                task.forEach(task => {
                    containers.removeChild(task)
                })
            }

            
            changeBtn.addEventListener("click", changingRef)
            deleteBtn.addEventListener("click", deleteTask);
        })
        NameOfInput.value = "";
        Description.value = ""

    }
    coTaskBar.addEventListener("click", coAddingBtn);