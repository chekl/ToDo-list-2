import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles/styles.css'

function App() {
    const [taskList, setTaskList] = useState([]);

    const createTask = (newTask) => {
        setTaskList([...taskList, newTask])
    };

    const deleteTask = (task) => {
        setTaskList(taskList.filter(item => item.id !== task.id))
    }

    return (
        <div className="todo-list">
            <h1>Todo list</h1>
            <hr/>
            <TaskForm create={createTask} />
            <hr/>
            <TaskList delete={deleteTask} tasks={taskList}/>
        </div>
    )
} 

export default App;