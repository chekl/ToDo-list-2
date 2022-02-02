import React, { useState } from 'react';

const TaskItem = (props) => {
    const [parag, setParag] = useState(true);
    const [editedTask, setEditedTask] = useState(props.desc);
    const [editedDate, setEditedDate] = useState(props.date);
    
    return (
        <div>
            {parag
             ? <div className='todo-item'>
                <div>
                    <p className='task'>{editedTask}</p>
                    {editedDate
                        ? <p>Deadline: {editedDate}</p>
                        : null
                    }    
                </div>
                
                <div className='btn-block'>
                    <button className='todo-btn list-btn' onClick={() => props.delete(props.task)}>Delete</button>
                    <button className='todo-btn list-btn' onClick={() => setParag(false)}>Edit</button>     
                </div>
                
                </div>
             : <div className='todo-item input-item'>
                    <input                        
                        type='text' 
                        placeholder='Enter a task'
                        onChange={(event) => setEditedTask(event.target.value)}
                    />
                    <input
                        type='date' 
                        onChange={(event) => setEditedDate(event.target.value)}
                        value={editedDate}
                    />
                 { editedTask.trim()
                    ? <button className='todo-btn' onClick={() => setParag(true)}>Save</button>
                    : null
                 }
             </div>
             }
        </div>
    );
};

export default TaskItem;