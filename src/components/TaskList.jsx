import React from 'react';
import TaskItem from './TaskItem';

const TaskList = (props) => {

    const taskList = [...props.tasks];

    if(!props.tasks.length){
     return <h3>Please create some tasks</h3>
    }

    return (
        <div className='task-list'>
            {taskList.map((task) => 
                <TaskItem 
                    date={task.date} 
                    delete={props.delete} 
                    key={task.id}
                    id={task.id}
                    desc={task.value} 
                    task={task}/>
            )}
        </div>
    );
};

export default TaskList;