export function TodoItem({id, title, completed, key, toggleTodo, deleteTodo}){
 return(
   <li>
    <label>
        <input type="checkbox" 
         checked={completed} 
         onChange={e => toggleTodo(id, e.target.checked)}>
         </input>
         {title}
    </label>
    <button className="ml-10 border
     border-black
      bg-red-500"
      onClick={e => deleteTodo(id)}
      >
        
    delete</button>
   </li>
 )
}