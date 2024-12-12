import { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState(["Task 1", "Task 2"]);
    const [newTask, setNewTask] = useState([]);
    const [editMode, seteditMode] = useState([0, 0]);

    function handleNewTaskChange(event) {
        setNewTask(event.target.value)
    }

    function addNewTask() {
        if (editMode[0] == 0) {
            if (newTask.trim() !== "") {
                setTasks([...tasks, newTask]);
                setNewTask("");
            }
        }
        else {
            if (newTask.trim() !== "") {
                var newTasks = tasks;
                newTasks[editMode[1]] = newTask;
                setTasks(newTasks);
                setNewTask("");
                
                var newEditMode = editMode;
                newEditMode[0] = 0;
                seteditMode(newEditMode);
            }
        }
    }

    function DeleteTask(index) {
        var newTasks = tasks.filter((task, i) => index !== i)
        setTasks(newTasks);
    }

    function EditTask(index) {
        setNewTask(tasks[index]);
        seteditMode([1, index]);
    }

    return (<>
        <div>
            <h1>To Do App</h1>
            <input type='text' value={newTask} onChange={handleNewTaskChange}></input>
            <button onClick={() => addNewTask()}>Add</button>
            <ul>
                {tasks.map((task, index) => <li key={index}>

                    <label htmlFor={index} key={index}>
                        <input id={index} type='checkbox'></input>
                        {task}
                    </label>
                    <div>
                        <button onClick={() => DeleteTask(index)} className='delete-btn'>Delete</button>
                        <button onClick={() => EditTask(index)} className='edit-btn'>Edit</button>
                    </div>
                </li>)}
            </ul>
        </div>
    </>)
}

export default ToDoList