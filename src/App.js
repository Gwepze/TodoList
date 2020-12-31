import React, {useState} from 'react'
import { TodoForm } from './components'
import './App.css'

const App = () => {
  return (
    <div>
      <header>
        <h1>Jarred's Todo List</h1>
      </header>
      <TodoForm />
    </div>
  )
}

export default App

