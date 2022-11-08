import { createSelector, createSlice } from "@reduxjs/toolkit"

const initialState = {
    filters: ['all', 'active', 'completed'],
    filteredByQuery: 'all'
}

export const filteredTodosSelector = createSelector(
    (state) => state.filters.filteredByQuery,
    (state) => state.todos.todos,
    (filter, todos) => {
        if (filter === 'all') {
            return todos
        } else if (filter === 'active') {
            return todos.filter(item => !item.completed)
        } else { //for completed instances
            return todos.filter(item => item.completed)
        }
    }
)

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeActiveFilter: (state, action) => {
            state.filteredByQuery = action.payload
        }
    },
    extraReducers: {

    }
})

export default filtersSlice.reducer

export const { changeActiveFilter } = filtersSlice.actions