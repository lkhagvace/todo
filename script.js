let containers = document.querySelectorAll(".containers")
let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");
let container4 = document.getElementById("container4");
let levelHigh1 = document.getElementById("levelHigh1");
let levelHigh2 = document.getElementById("levelHigh2");
let levelHigh3 = document.getElementById("levelHigh3");
let levelHigh4 = document.getElementById("levelHigh4");
let levelMedium1 = document.getElementById("levelMedium1");
let levelMedium2 = document.getElementById("levelMedium2");
let levelMedium3 = document.getElementById("levelMedium3");
let levelMedium4 = document.getElementById("levelMedium4");
let levelLow1 = document.getElementById("levelLow1");
let levelLow2 = document.getElementById("levelLow2");
let levelLow3 = document.getElementById("levelLow3");
let levelLow4 = document.getElementById("levelLow4");
let h3 = document.querySelectorAll("h3");
let bigCon = document.getElementById("big-container");
let value = document.getElementById("status");
let priorityValue = document.getElementById("priority");
var taskbar = document.getElementById("taskAddBar");
let highs = document.querySelectorAll(".highs");
let mediums = document.querySelectorAll(".mediums")
let lows = document.querySelectorAll(".lows")
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
        // IsItDoneBtn.innerHTML = <i class="fa-solid fa-check" style="color: #000000;"></i>
        IsItDoneBtn.classList.add("IsItDone");
        tasks.appendChild(IsItDoneBtn);


        let textTask = document.createElement("div");
        textTask.classList.add("textTask");
        tasks.appendChild(textTask);


        let deleteAndChange = document.createElement("div");
        deleteAndChange.classList.add("deleteAndChange");
        tasks.appendChild(deleteAndChange);


        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn")
        // deleteBtn.innerHTML = <i class="fa-solid fa-minus" style="color: #000000;"></i>;
        let changeBtn = document.createElement("button");
        changeBtn.classList.add("changeBtn")
        // changeBtn.innerHTML = <i class="fa-solid fa-wrench" style="color: #000000;"></i>
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

        if(priorityValue.value === "High"){
            tasks.style.border = "1px solid red";
        }
        if(priorityValue.value === "Medium"){
            tasks.style.border = "1px solid blue";
        }
        if(priorityValue.value === "Low"){
            tasks.style.border = "1px solid purple";
        }


        if (value.value === "ToDo"){
            if(priorityValue.value === "High"){
                levelHigh1.appendChild(tasks);
            }
            if(priorityValue.value === "Medium"){
                levelMedium1.appendChild(tasks);
            }
            if(priorityValue.value === "Low"){
                levelLow1.appendChild(tasks);
            }
        }
        if (value.value === "InProgress"){
            if(priorityValue.value === "High"){
                levelHigh2.appendChild(tasks);
            }
            if(priorityValue.value === "Medium"){
                levelMedium2.appendChild(tasks);
            }
            if(priorityValue.value === "Low"){
                levelLow2.appendChild(tasks);
            }
        }
        if (value.value === "Stuck"){
            if(priorityValue.value === "High"){
                levelHigh3.appendChild(tasks);
            }
            if(priorityValue.value === "Medium"){
                levelMedium3.appendChild(tasks);
            }
            if(priorityValue.value === "Low"){
                levelLow3.appendChild(tasks);
            }
        }
        if (value.value === "Done"){
            if(priorityValue.value === "High"){
                levelHigh4.appendChild(tasks);
            }
            if(priorityValue.value === "Medium"){
                levelMedium4.appendChild(tasks);
            }
            if(priorityValue.value === "Low"){
                levelLow4.appendChild(tasks);
            }
        }
        var dlt = document.querySelectorAll(".deleteBtn")

    

        let task = document.querySelectorAll(".task");
        task.forEach(task => {
            task.addEventListener("dragstart", () => {
                console.log("dragstart")
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
        console.log(highs)
        highs.forEach(highs => {
            highs.addEventListener("dragover", e => {
                e.preventDefault();
                console.log("dragover")
                let draggable = document.querySelector(".dragging");
                if(priorityValue.value === "High"){
                    highs.appendChild(draggable)
                }
            })




            let changingRef = () => {
                taskbar.style.display = "flex";

                task.forEach(task => {
                    containers.removeChild(task)
                })
            }

            
            changeBtn.addEventListener("click", changingRef)
        })
        NameOfInput.value = "";
        Description.value = ""

    }
    coTaskBar.addEventListener("click", coAddingBtn);