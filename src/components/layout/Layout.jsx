import React from 'react'
import AddForm from '../addForm/AddForm'
import FormFooter from '../formFooter/FormFooter'
import Todos from '../todos/Todos'

const Layout = () => {
  return (
    <>
        <AddForm/>
        <Todos/>
        <FormFooter/>
    </>
  )
}

export default Layout