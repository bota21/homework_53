import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';

function App() {  
  const [todo, setTodos] = useState([
    {id: uuidv4(), text: 'buy milk'},
    {id: uuidv4(), text: 'walk with dog'},
    {id: uuidv4(), text: 'do homework'}
  ]);
  const [task, setTask] = useState([]);
  let currentTask = (e, id) => {
    const copyTask = [...task];     
    copyTask[0] = e.target.value;
    setTask(copyTask);
  };
  let addTodo = (e, id) => {
    const copyTask = [...task]; 
    const copyTodo = [...todo];     
    copyTodo.push({id: uuidv4(), text: copyTask[0]});
    setTodos(copyTodo);
  };
  
  let removeTask = id => {
    const index = todo.findIndex(item => item.id === id);
    let copyTodo = [...todo];
    copyTodo.splice(index, 1);
    setTodos(copyTodo);
  };
  
  let newTask = todo.map(item => {
    return <Task key={item.id} text={item.text} onRemove={() => removeTask(item.id)} />
  });
  return (
    <div className="App">
    <AddTaskForm onChange={(e) => currentTask(e, todo.id)} onClick={(e) => addTodo(e, todo.id)}/>
    {newTask}
    </div>
    );
  }
  
  export default App;
  