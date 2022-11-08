import React from 'react'
import Filters from '../filters/Filters'
import { useSelector, useDispatch } from 'react-redux'
import formFooterStyles from './formFooter.module.css'
import { openModal } from '../../features/modal/modalSlice'

const FormFooter = () => {

    const dispatch = useDispatch()
    const { remaining } = useSelector(store => store.todos)

  return (
    <div className={formFooterStyles.container}>
        <p>{remaining} items left</p>
        <Filters/>
        <button onClick={() => dispatch(openModal())} className={formFooterStyles.button}>Clear completed</button>
    </div>
  )
}

export default FormFooter