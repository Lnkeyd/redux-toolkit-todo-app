import { useDispatch } from 'react-redux'
import { deleteTodoItem, updateTodoItem } from '../../features/todos/todosSlice'
import todoStyles from './singleTodo.module.css'
import {TbCircle, TbCircleCheck, TbTrash} from 'react-icons/tb'

const SingleTodo = ({id, todo, completed}) => {

    const dispatch = useDispatch()

    const handleDelete = (e) => {
        e.stopPropagation()
        console.log(id)
        dispatch(deleteTodoItem(id))
    }

    const handleUpdate = () => {
        dispatch(updateTodoItem(id))
    }

  return (
    <div className={todoStyles.todo} style={{cursor: 'pointer'}}  onClick={() => handleUpdate()}>
        <div className={todoStyles.mark}>
            {
                completed ? <TbCircleCheck/> : <TbCircle/> 
            }
        </div>
        <p style={completed ? {color: 'green'} : {color: 'orange'}}>{todo}</p>
        <div className={todoStyles.trash} onClick={(e) => handleDelete(e)}>
            <TbTrash/>
        </div>
    </div>
  )
}

export default SingleTodo