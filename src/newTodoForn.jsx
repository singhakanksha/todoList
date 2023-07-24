import { useState } from "react"
export function NewForm({addTodo}){

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault()
    
        addTodo(newItem)
       
    
        setNewItem("")
      }

    return(
        <form  onSubmit={handleSubmit} >
        <div className="ml-10 flex flex-row space-x-8 form-row">
         <label htmlFor="item">New Item</label>
         <input
          value={newItem} 
          onChange={(e)=>setNewItem(e.target.value)} 
          type="text" id="item" className="border border-spacing-3 border-black"></input>
        </div>
        <button className="font-bold ml-10 mt-5 pl-6 pt-2 pb-2 pr-6 rounded-sm border-blue-50 bg-blue-400">Add</button>
      </form>
    )
}