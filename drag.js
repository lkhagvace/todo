let containerBox = document.createElement("div");
document.body.appendChild(containerBox);
containerBox.style.width = "60px"
containerBox.style.height = "60px"
containerBox.style.border = "1px solid black";
containerBox.classList.add("boxes")
let box = document.createElement("div");
containerBox.appendChild(box);
box.draggable = "true"
box.style.width = "50px"
box.style.height = "50px"
box.style.backgroundColor = "green"
let emptyDiv = document.createElement("div");
document.body.appendChild(emptyDiv);
emptyDiv.style.border = "1px solid black";
emptyDiv.style.width = "100px";
emptyDiv.style.height = "100px" 
emptyDiv.classList.add("boxes")
let boxes = document.querySelectorAll(".boxes")
boxes.forEach(boxes => {
    boxes.addEventListener("dragstart", () => {
    })
    boxes.addEventListener("dragover", e => {
        e.preventDefault();
        e.target.style.border = "5px solid green"
    })
    boxes.addEventListener("dragleave", e => {
        e.target.style.border = "1px solid black"
    })
    boxes.addEventListener("drop", () => {
        boxes.appendChild(box)
    })
})