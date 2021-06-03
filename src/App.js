
import './App.css';
import React, {useState} from 'react'

function App() {

  const [todos,setTodos] =useState(["Do your Homework",'Drink water','Complete Assignment']);
  const [input,setInput]=useState('');

  return (
    <div className="App">
      <h1>Hello</h1>
      <input  value={input} onChange={e => setInput(e.target.value)}/>
      <button>Add Todo</button>

      <ul>
        {todos.map(todo =>(
          <li>{todo}</li>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
