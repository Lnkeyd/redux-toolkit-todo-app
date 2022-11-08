import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getTodosItems } from '../../features/todos/todosSlice'
import Layout from "../layout/Layout";
import Modal from "../modal/Modal";

function App() {

  const dispatch = useDispatch()
  const { isOpen } = useSelector(store => store.modal)

  useEffect(() => {
    dispatch(getTodosItems())
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <Layout/>
      {isOpen && <Modal/>}
    </>
  );
}

export default App;
