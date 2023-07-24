import { TodoItem } from "./todoItem"
export function ToDoList({todos,toggleTodo,deleteTodo} ){
   
    return(
        <ul>
          {todos.length === 0 && "No todos"}
          {todos.map((todo) => 
           <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          )}
        
       </ul>

        
       )
}