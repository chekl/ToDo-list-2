import React, {useState} from 'react';

const TaskForm = (props) => {
    const [task, setTask] = useState('');
    const [currentId, setCurrentId] = useState(0);
    const [deadline, setDeadline] = useState('')

    const createTask = (event) => {
        event.preventDefault();
        if(task.trim()) {
            
            const newTask = {
                value: task,
                id: currentId,
                date: deadline
            }
            setCurrentId(currentId+1);
            props.create(newTask);
            setTask('');
            setDeadline('')  
        } else {
            alert('Enter a task, please')
        }
        
    };
    
    return (
        <form className='todo-form'>
            <input 
                type='text' 
                placeholder='Enter a task' 
                onChange = {(event) => setTask(event.target.value)}
                value = {task}
            />
            <input
                type='date'
                onChange= {(event) => setDeadline(event.target.value)}
                value = {deadline}
            />
            <button className='todo-btn' onClick={(event) => createTask(event)}>Create</button>
        </form>
    );
};

export default TaskForm;