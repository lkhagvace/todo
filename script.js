let containers = document.querySelectorAll(".containers")
let body = document.body
let clone = document.getElementById("clone")

let firstBtn = document.getElementById("firstBtn");
let secondBtn = document.getElementById("secondBtn")
let thirdBtn = document.getElementById("thirdBtn")
let forthBtn = document.getElementById("forthBtn")



let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");
let container4 = document.getElementById("container4");


let levelHigh1 = document.getElementById("levelHigh1");
let levelHigh2 = document.getElementById("levelHigh2");
let levelHigh3 = document.getElementById("levelHigh3");
let levelHigh4 = document.getElementById("levelHigh4");


let firstLength = document.getElementById("firstLength");
let secondLength = document.getElementById("secondLength");
let thirdLength = document.getElementById("thirdLength");
let forthLength = document.getElementById("forthLength")



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
let coStatusValue = document.getElementById("CoStatus");
coStatusValue.value = value.value;


let priorityValue = document.getElementById("priority");
let CoPriorityValue = document.getElementById("CoPriority")


var taskbar = document.getElementById("taskAddBar");


let editingBoard = document.getElementById("editing_board");
let editingBtn = document.getElementById("editingBtn")
let cancel = document.getElementById("cancel")


let coContainers = document.querySelectorAll(".coContainer")

let addBtn = document.querySelectorAll(".addBtn");
let cancel1 = document.getElementById("cancel1")


let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;


// adding button-------------------------------------------------------------------------------------------------------------------------------------------------------
    addBtn.forEach(addBtn => {
        let addingBtn = () => {
            taskbar.style.display = "flex";
            taskbar.style.flexDirection = "column";
            taskbar.style.justifyContent = "space-between"; 
            clone.style.display = "block"
        }
        addBtn.addEventListener("click", addingBtn);
    })
    clone.onclick = () => {
        taskbar.style.display = "none";
        clone.style.display = "none";
        editingBoard.style.display = "none"
        
    }
    firstBtn.onclick = () => {
        value.value = "ToDo"
    }
    secondBtn.onclick = () => {
        value.value = "InProgress"
    }
    thirdBtn.onclick = () => {
        value.value = "Stuck"
    }
    forthBtn.onclick = () => {
        value.value = "Done"
    }

    cancel1.onclick = () => {
        taskbar.style.display = "none"
        clone.style.display = "none"
    }



// adding tasks------------------------------------------------------------------------------------------------------------------------------------------------------
    let coTaskBar = document.getElementById("coAddTaskBtn");


    let coAddingBtn = () => {

        taskbar.style.display = "none";
        clone.style.display = "none"

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
        


        let changeBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn")
        deleteBtn.innerHTML = `<i class="fa-solid fa-minus" style="color: #000000;"></i>`
        changeBtn.classList.add("changeBtn")
        changeBtn.innerHTML = `<i class="fa-solid fa-wrench" style="color: #000000;"></i>`
        deleteAndChange.appendChild(deleteBtn);
        deleteAndChange.appendChild(changeBtn);


        let NameOfInput = document.getElementById("inputFirst");
        let nameOfTask = document.createElement("h4");



        if (NameOfInput.value === "") return false



        nameOfTask.innerText = NameOfInput.value;
        nameOfTask.className = "title"
        textTask.appendChild(nameOfTask);


        


        var Description = document.getElementById("inputSecond")
        let description = document.createElement("p");
        description.innerText = Description.value;
        description.className = "description"
        textTask.appendChild(description);


        let rank = document.createElement("div");
        rank.innerText = priorityValue.value;
        rank.classList.add("rank")
        textTask.appendChild(rank);


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
        
        

    

        let task = document.querySelectorAll(".task");
        task.forEach(task => {
            task.addEventListener("dragstart", () => {
                task.classList.add("dragging");
            })
            task.addEventListener("dragend", () => {
                task.classList.remove("dragging")
            })

            let GoToDone = () => {
                if(priorityValue.value === "High"){
                    levelHigh4.appendChild(tasks)
                }
                if(priorityValue.value === "Medium"){
                    levelMedium4.appendChild(tasks)
                }
                if(priorityValue.value === "Low"){
                    levelLow4.appendChild(tasks)
                }
                IsItDoneBtn.style.backgroundColor = "black";
                IsItDoneBtn.innerHTML = `<i class="fa-solid fa-check" style="color: white;"></i>`;
                countFunction()
            }


            IsItDoneBtn.addEventListener("click", GoToDone);
        })
            
        
        
            container1.addEventListener("dragover", e => {
                e.preventDefault();
                let draggable = document.querySelector(".dragging");
                IsItDoneBtn.style.backgroundColor = "white";
                IsItDoneBtn.innerHTML = `<i class="fa-solid fa-check" style="color: black;"></i>`;
                if(priorityValue.value === "High"){
                    levelHigh1.appendChild(draggable)
                }
                if(priorityValue.value === "Medium"){
                    levelMedium1.appendChild(draggable)
                }
                if(priorityValue.value === "Low"){
                    levelLow1.appendChild(draggable)
                }
                value.value = "ToDo";
                coStatusValue.value = value.value;
                countFunction()
            })


            container2.addEventListener("dragover", e => {
                e.preventDefault();
                let draggable = document.querySelector(".dragging");
                IsItDoneBtn.style.backgroundColor = "white";
                IsItDoneBtn.innerHTML = `<i class="fa-solid fa-check" style="color: black;"></i>`;
                if(priorityValue.value === "High"){
                    levelHigh2.appendChild(draggable)
                }
                if(priorityValue.value === "Medium"){
                    levelMedium2.appendChild(draggable)
                }
                if(priorityValue.value === "Low"){
                    levelLow2.appendChild(draggable)
                }
                value.value = "InProgress"
                coStatusValue.value = value.value;
                countFunction()
            })



            container3.addEventListener("dragover", e => {
                e.preventDefault();
                let draggable = document.querySelector(".dragging");
                IsItDoneBtn.style.backgroundColor = "white";
                IsItDoneBtn.innerHTML = `<i class="fa-solid fa-check" style="color: black;"></i>`;
                if(priorityValue.value === "High"){
                    levelHigh3.appendChild(draggable)
                }
                if(priorityValue.value === "Medium"){
                    levelMedium3.appendChild(draggable)
                }
                if(priorityValue.value === "Low"){
                    levelLow3.appendChild(draggable)
                }
                value.value = "Stuck"
                coStatusValue.value = value.value;
                countFunction()


            })

            container4.addEventListener("dragover", e => {
                e.preventDefault();
                let draggable = document.querySelector(".dragging");
                IsItDoneBtn.style.backgroundColor = "black";
                IsItDoneBtn.innerHTML = `<i class="fa-solid fa-check" style="color: white;"></i>`;
                if(priorityValue.value === "High"){
                    levelHigh4.appendChild(draggable)
                }
                if(priorityValue.value === "Medium"){
                    levelMedium4.appendChild(draggable)
                }
                if(priorityValue.value === "Low"){
                    levelLow4.appendChild(draggable)
                }
                value.value = "Done"
                coStatusValue.value = value.value;
                countFunction()
            })



            coContainers.forEach(coContainers => {
            let deletingRef = () => {
                coContainers.removeChild(tasks);
                countFunction()
            }
            deleteBtn.addEventListener("click", deletingRef)
            })
            

            let coInputFirst = document.getElementById("CoInputFirst");
            let CoInputSecond = document.getElementById("CoInputSecond");
            changeBtn.onclick = () => {
                clone.style.display = "block"

                editingBoard.style.display = "flex";
                editingBoard.style.flexDirection = "column";
                
                coInputFirst.value = nameOfTask.innerText;
                CoInputSecond.value = description.innerText;
                CoPriorityValue.value = rank.innerText;
                coStatusValue.value = value.value
                
                




                editingBtn.onclick = () =>{
                    clone.style.display = "none"
                    nameOfTask.innerText = coInputFirst.value;
                    description.innerText = CoInputSecond.value;
                    rank.innerText = CoPriorityValue.value;
                    value.value = coStatusValue.value
                    




                    priorityValue.value = rank.innerText;
                    

                    
                    

                    if(priorityValue.value === "High"){
                        tasks.style.border = "3px dotted red";
                    }
                    if(priorityValue.value === "Medium"){
                        tasks.style.border = "3px dotted blue";
                    }
                    if(priorityValue.value === "Low"){
                        tasks.style.border = "3px dotted purple";
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
                    editingBoard.style.display = "none";
                    countFunction()
                }
                cancel.onclick = () => {
                    editingBoard.style.display = "none";
                    clone.style.display = "none"
                }
            }




      
        NameOfInput.value = "";
        Description.value = "";
        if(priorityValue.value === "High"){
            tasks.style.border = "3px dotted red";
        }
        if(priorityValue.value === "Medium"){
            tasks.style.border = "3px dotted blue";
        }
        if(priorityValue.value === "Low"){
            tasks.style.border = "3px dotted purple";
        }
        countFunction()
    }
    coTaskBar.addEventListener("click", coAddingBtn);

    let countFunction = () => {
        sum1 = levelHigh1.childElementCount + levelMedium1.childElementCount + levelLow1.childElementCount;
        sum2 = levelHigh2.childElementCount + levelMedium2.childElementCount + levelLow2.childElementCount;
        sum3 = levelHigh3.childElementCount + levelMedium3.childElementCount + levelLow3.childElementCount;
        sum4 = levelHigh4.childElementCount + levelMedium4.childElementCount + levelLow4.childElementCount;

        firstLength.innerText = sum1;
        secondLength.innerText = sum2;
        thirdLength.innerText = sum3;
        forthLength.innerText = sum4;
    }