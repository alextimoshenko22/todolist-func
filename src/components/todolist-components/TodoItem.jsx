import React, { useContext } from 'react'
import { Context } from './Context'
import cn from 'classnames'
import styles from './TodoList.module.css'

const TodoItem = ({id, name, completed}) => {
    const {completeTodo, deleteTodo} = useContext(Context)
    return(
        <div className={cn({ [styles.completed]: completed })}>
            <input type="checkbox" checked={completed} onChange={() => completeTodo(id)} />
            {name}
            <button onClick={() => deleteTodo(id)}>Удалить</button>
        </div>
    )
}

export default TodoItem