export const taskInput = document.querySelector(".task-input")
export const addTaskBtn = document.querySelector(".add-task-input")
export const taskList = document.querySelector(".task-list")
export const taskForm = document.querySelector(".task-page-form")


export const addTaskOnClick = (e) => {
    e.preventDefault();
    if (taskInput.value.trim() !== ""){
        taskList.insertAdjacentHTML("afterbegin", 
        `<li class = "task-container">
            <input class = "task" type="text" value = "${taskInput.value}" readonly>
            <button class = "edit" type = "button">Edit</button>
            <button class = "delete" type = "button">Remove</button>
        </li>`)
        taskInput.value = ""

        const editBtn = document.querySelector(".edit")
        const deleteBtn = document.querySelector(".delete")
        const task = document.querySelector(".task")
        const taskContainer = document.querySelector(".task-container")


        deleteBtn.addEventListener("click", () => {
            taskContainer.style.display = "none"
        })
        editBtn.addEventListener("click", () => {
            task.removeAttribute("readonly")
            task.focus()
        })
        task.addEventListener("keypress", (e) => {
            if (e.key === "Enter"){
                task.setAttribute("readonly", "")
            }
        })
    }
}




