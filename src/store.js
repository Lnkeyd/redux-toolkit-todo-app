import { configureStore } from "@reduxjs/toolkit"
import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'
import modalSlice from "./features/modal/modalSlice"

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        filters: filtersReducer,
        modal: modalSlice
    },
})