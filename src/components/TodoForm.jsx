import React, { useState } from 'react'
import { useTodoContext } from '../context'
const TodoForm = () => {
    const [todo, setTodo] = useState("")  
    const { addTodo } = useTodoContext()
    
    const add = (e) => {
        e.preventDefault();

        if (!todo) return
        
        addTodo({ todo, completed: false })
        setTodo("")
    }
return (
         
<div>
    <form onSubmit={add} className="flex">
            <input
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 py-1.5 bg-white  text-black/90 "
                type="text"
                id='todoinput'
                placeholder="Write Todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                
            />
            {/* console.log(todo) */}
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
</div>
);
}
export default TodoForm