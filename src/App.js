// eslint-disable-next-line
import React, {useState} from 'react'
import './App.css';
// Importing components
import Form from './components/form'
import Todolist from './components/todolist';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
    <header>
    <h1>To Do List</h1>
    </header>
    <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
    <Todolist />
    </div>
  );
}

export default App;
