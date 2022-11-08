import React, { useState } from 'react'
import { addTodoItem } from '../../features/todos/todosSlice'
import { useDispatch } from 'react-redux'
import formStyles from './addForm.module.css'

const AddForm = () => {

    const [todoName, setTodoName] = useState('')
    const dispatch = useDispatch()

    const handleForm = (e) => {
        e.preventDefault()
        dispatch(addTodoItem(todoName))
        setTodoName('')
    }

  return (
    <>
        <form className={formStyles.form} action="" onSubmit={handleForm}>
            <input placeholder='What you need to be done?' className={formStyles.input} type='text' value={todoName} onChange={(e) => setTodoName(e.target.value)}/>
            <button type="submit" className={formStyles.button}>add todo</button>
        </form>
    </>
  )
}

export default AddForm