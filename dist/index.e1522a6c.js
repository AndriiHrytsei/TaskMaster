const taskInput = document.querySelector(".task-input");
const addTaskBtn = document.querySelector(".add-task-button");
const taskList = document.querySelector(".task-list");
const editButton = document.querySelector(".edit");
const task = document.querySelector();
const addTaskOnClick = ()=>{
    if (taskInput.value.trim() !== "") taskList.insertAdjacentHTML("afterbegin", `<div class = "task-container">
            <input class = "task" type="text" value = "${taskInput.value}" readonly>
            <button class = "edit" type = "button">Edit</button>
            <button class = "delete" type = "button">Delete</button>
        </div>`);
};
const editTaskOnClick = (e)=>{
    task.removeAttribute("readonly");
};
editButton.addEventListener("click", editTaskOnClick);
addTaskBtn.addEventListener("click", addTaskOnClick);

//# sourceMappingURL=index.e1522a6c.js.map
