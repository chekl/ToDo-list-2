import React from 'react';
import TaskItem from './TaskItem';

const TaskList = (props) => {

    const taskList = [...props.tasks];

    if(!props.tasks.length){
     return <h3>Please create some tasks</h3>
    }



    return (
        <div>
            {taskList.map((task) => 
                <TaskItem delete={props.delete} key={task.id} desc={task.value} task={task}/>
            )}
        </div>
    );
};

export default TaskList;