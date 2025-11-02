import "./App.css"
import { MdCheck,  MdDelete } from "react-icons/md";

import React, { useState } from 'react'
const Todo = () => {
  
    const [inputValue, setInputvalue] = useState("")

    const [task, setTask] =useState([])

    const handleinputChange = (value) => {
        setInputvalue(value);
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputValue) return;

        if (task.includes(inputValue)) {
            setInputvalue(' ');
            return;
        }
        setTask((prev) => [...prev, inputValue])
        
   }

    return (
        <section className="todo-container">
            <header>
                <h1>TODO List</h1>
            </header>
            <section className="form"  onSubmit={handleSubmit}>
                <form>
                    <div>
                        <input type="text" className="todo-input" autoComplete="off"
                        value={inputValue}
                        onChange={(e) => handleinputChange(e.target.value)}/>
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">Add Task</button>
                    </div>
                </form>
            </section>
            <section className="myUnOrdList">
                <ul>                 
                {
                    task.map((curTask, index) => {
                        return (
                            <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                <button className="check-btn"><MdCheck /></button>
                                <button className="delete-btn"><MdDelete /></button>
                            </li>
                        )
                    })
                }
                </ul>
            </section>
        </section>
    );
}
export default Todo

