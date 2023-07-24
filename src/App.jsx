import { useState } from "react"
import { NewForm } from "./newTodoForn"
import {ToDoList} from "./todolist"
function App() {
  
  const [todos, setTodos] = useState([])


  function addTodo(newItem){
     setTodos((currentTodos)=>{
          const idn = new Date()
          console.log(idn.getMilliseconds())
          return [...currentTodos, 
            {id:idn, title: newItem, completed: false }]
          }
        )
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos((currentTodos) =>{
      return currentTodos.filter((todo) => todo.id != id)
    }
    )
  }
 
  return (
    <>
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-700">
    <NewForm addTodo={addTodo} />
    <h1 className="mt-5 font-mono font-extrabold">ToDo List</h1>
    <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
   
    </>   
  )
}

export default App
