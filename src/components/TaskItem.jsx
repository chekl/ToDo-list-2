import React from 'react';

const TaskItem = (props) => {
    return (
        <div>
            <p>{props.desc}</p>
            <button onClick={() => props.delete(props.task)}>Delete</button>
            <button>Edit</button>
        </div>
    );
};

export default TaskItem;