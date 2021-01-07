import { React } from 'react';
import './AddTaskForm.css';

const AddTaskForm = props => {
    return (
        <div className='addTaskForm'>
        <input  placeholder='Add new task' className="task_input" onChange={props.onChange} />
        <button className="task_add" onClick={props.onClick}>Add</button>
        </div>
        )
    };
    
    export default AddTaskForm;