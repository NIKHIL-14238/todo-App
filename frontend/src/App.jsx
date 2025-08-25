import {useState} from 'react';
import {CreateTodo} from './components/CreateTodo';
import {Todo} from  './components/Todo';
import './App.css'


function App() {
const [todos,setTodos] = useState( [] );

fetch("https://todo-app-eq6c.onrender.com/geting")
.then(async function (res){
  const json = await res.json();
  setTodos(json.todos);
})

  return (
   <div>
        <CreateTodo></CreateTodo>
        <Todo todos={todos}></Todo>
   </div>
  );
}

export default App;
