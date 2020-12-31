import React from 'react'
import './TodoForm.css'

const TodoForm = () => {
    return (
        <form>
            <input type="text" className="todo-input" placeholder="Enter Text"/>
            <button type="submit" className="todo-btn">
                <i class="fas fa-radiation-alt"></i>
            </button>
        </form>
    )
}

export default TodoForm
