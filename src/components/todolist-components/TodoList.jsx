import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos }) => {
    return (
        <div>
            {
                todos.map(t => <TodoItem key={t.id} id={t.id} name={t.name} completed={t.completed} />)
            }
        </div>
    )
}

export default TodoList