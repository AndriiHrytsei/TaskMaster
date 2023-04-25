// Get DOM elements
export const taskInput = document.querySelector(".task-input")
export const addTaskBtn = document.querySelector(".add-task-input")
export const taskList = document.querySelector(".task-list")
export const taskForm = document.querySelector(".task-form")


// Save and load tasks to local storage 

export const saveToLocalStorage = () => {
    localStorage.setItem("tasks", taskList.innerHTML)
}

export const loadFromLocalStorage = () => {
    taskList.innerHTML = localStorage.getItem("tasks")
}


// Add tasks function

export const addTaskOnClick = () => {
    if (taskInput.value.trim() !== ""){
        taskList.insertAdjacentHTML("afterbegin", 
        `<li class = "task-container">
            <input class = "task" type="text" value = "${taskInput.value}" readonly>
            <button class = "edit" type = "button">Edit</button>
            <button class = "delete" type = "button">Remove</button>
        </li>`)
        taskInput.value = ""
        saveToLocalStorage()
    }
}


// Delete task function

export const deleteTask = (index) => {
    const taskContainers = document.querySelectorAll(".task-container")
    taskList.removeChild(taskContainers[index])
}


// Edit task function

export const editTask = (index) => {
    const tasks = document.querySelectorAll(".task")
    tasks[index].removeAttribute("readonly")
    tasks[index].focus()
}

// Save edited tasks function

export const saveEditedTasks = () => {
    const tasks = document.querySelectorAll(".task")
    tasks.forEach((task) => {
        task.addEventListener("keypress", (e)=>{
            if (e.key === "Enter"){
                task.setAttribute("readonly", "")
                saveToLocalStorage()
            }
        })
    })
}

