// Edit task from begins here:=====================================
const editTaskWindowRef = document.querySelector(".edit-background");
const editTitleInputRef = document.getElementById("edittitleinput");
const editDescrInputRef = document.getElementById("edittextinput");

function openEditTask(event, subdiv) {
  editTaskWindowRef.style.display = "flex";
  const title = subdiv.getElementsByClassName("title_editable")[0];
  // console.log(title);
  const description = subdiv.getElementsByClassName("description_editable")[0];
  editTitleInputRef.value = title.innerText;
  editDescrInputRef.value = description.innerText;
  const editTaskDone = document.getElementById("edittaskdone");
  // Edit task done begins here: ====================================
  editTaskDone.onclick = () => {
    // console.log("calling");
    title.textContent = editTitleInputRef.value;
    description.textContent = editDescrInputRef.value;
    editTaskWindowRef.style.display = "none";
  };
}
editTitleInputRef.value = "";
editDescrInputRef.value = "";