import * as addTaskScript from "./js/add-task.js"


addTaskScript.addTaskBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    addTaskScript.addTaskOnClick()
})

addTaskScript.taskList.addEventListener("click", (e)=> {
    const editBtns = document.querySelectorAll(".edit")
    const deleteBtns = document.querySelectorAll(".delete")
    deleteBtns.forEach((deleteBtn, index)=> {
        if (e.target === deleteBtn){
            addTaskScript.deleteTask(index)
            addTaskScript.saveToLocalStorage()
        }
    })
    editBtns.forEach((editBtn, index) => {
        if (e.target === editBtn){
            addTaskScript.editTask(index)
            addTaskScript.saveEditedTasks()
        }
    })
})

addTaskScript.loadFromLocalStorage()
