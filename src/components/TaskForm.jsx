import React, {useState} from 'react';

const TaskForm = (props) => {
    const [task, setTask] = useState('');
    const [currentId, setCurrentId] = useState(0);

    const createTask = (event) => {
        event.preventDefault();
        const newTask = {
            value: task,
            id: currentId
        }
        setCurrentId(currentId+1);
        props.create(newTask);
        setTask('');
    };
    
    return (
        <form >
            <input 
                type='text' 
                placeholder='Enter a task' 
                onChange = {(event) => setTask(event.target.value)}
                value = {task}
            />
            <button onClick={(event) => createTask(event)}>Create</button>
        </form>
    );
};

export default TaskForm;