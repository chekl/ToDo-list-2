import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
    const [taskList, setTaskList] = useState([]);

    const createTask = (newTask) => {
        setTaskList([...taskList, newTask])
    };

    const deleteTask = (task) => {
        setTaskList(taskList.filter(item => item.id !== task.id))
    }

    return (
        <div>
            <h1>Todo list</h1>
            <TaskForm create={createTask} />
            <TaskList delete={deleteTask} tasks={taskList}/>
        </div>
    )
} 

export default App;