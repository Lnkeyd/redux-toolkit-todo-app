import SingleTodo from '../singleTodo/SingleTodo'
import { useSelector } from 'react-redux'
import { filteredTodosSelector } from '../../features/filters/filtersSlice'

const Todos = () => {

    const filteredTodos = useSelector(filteredTodosSelector)
    // console.log('I\'m mounted!')

  return (
    <>
        <h2>TODOS:</h2>
        {
            filteredTodos.map(item => <SingleTodo key={item.id} {...item}/>)
        }
    </>
  )
}

export default Todos