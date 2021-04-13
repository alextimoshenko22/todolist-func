//UI уровень
import React, { useState, useEffect } from "react"
import "./App.css"
import TodoList from './components/todolist-components/TodoList'
import { Context } from './components/todolist-components/Context'

const App = () => {
  const [todos, setTodos] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    const _todos = localStorage.getItem('todos') || []
    setTodos(JSON.parse(_todos))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        name: name,
        completed: false
      }
    ])
    setName('')
  }
  
  const _addTodo = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  }

  const completeTodo = (id) => {
    setTodos(todos.map(t => {
      if(t.id === id){
        t.completed = !t.completed
      }
      return t
    }))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <Context.Provider value={{completeTodo, deleteTodo}}>
      <div>
        <h1>MY TO DO LIST</h1>
        <label>Задание</label>
        <div>
          <input type="text"
            placeholder="Что будете делать?"
            value={name}
            onChange={onNameChange}
            onKeyPress={_addTodo} />
          <button onClick={addTodo}>+ Добавить</button>
        </div>
        <TodoList todos={todos} />
      </div>
    </Context.Provider>
  )
}

export default App