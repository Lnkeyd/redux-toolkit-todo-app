import React from 'react'
import modalStyles from './modal.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../features/modal/modalSlice'
import { deleteTodoItem } from '../../features/todos/todosSlice'

const Modal = () => {

  const dispatch = useDispatch()
  const {todos} = useSelector(store => store.todos)
  const filteredTodosID = todos.filter(item => item.completed).map(item => item.id)
  
  return (
    <div className={modalStyles.container}>
        <div className={modalStyles.modal}>
            <h3>Сonfirm your action</h3>
            <p>Delete all completed tasks</p>

            <button onClick={() => {
              filteredTodosID.forEach(item => {
                dispatch(deleteTodoItem(item))
              });
              dispatch(closeModal())
            }} className={modalStyles.delete}>Delete</button>

            <button onClick={() => {
              dispatch(closeModal())
            }} className={modalStyles.cancel}>Cancel</button>

        </div>
    </div>
  )
}

export default Modal