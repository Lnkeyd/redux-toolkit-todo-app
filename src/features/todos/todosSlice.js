import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit"
import { useHttpRequest } from "../../service/Service"

const initialState = {
    todos: [],
    filteredTodos: [],
    remaining: 0,
    isLoading: false
}

const todosUrl = 'http://localhost:3001/todos/'

export const getTodosItems = createAsyncThunk('todos/getTodosItems', async () => {
    const { request } = useHttpRequest()
    try {
        return await request(todosUrl)
    } catch (error) {
        console.log(error)
    }
})

export const addTodoItem = createAsyncThunk('todos/addTodoItem', async (title) => {
    const { request } = useHttpRequest()
    try {
        return await request(todosUrl, 'POST', JSON.stringify(
            {
                id: nanoid(),
                todo: title,
                completed: false
            }
        ))
    } catch (error) {
        console.log(error)
    }
})

export const updateTodoItem = createAsyncThunk('todos/updateTodoItem', async (id) => {
    const { request } = useHttpRequest()
    try {
        const todoItem = await request (todosUrl + id)
        return await request(todosUrl + id, 'PATCH', JSON.stringify(
            {
                completed: !todoItem.completed
            }
        ))
    } catch (error) {
        console.log(error)
    }
})

export const deleteTodoItem = createAsyncThunk('todos/deleteTodoItem', async (id) => {
    const { request } = useHttpRequest()
    try {
        await request(todosUrl + id, 'DELETE')
        return id
    } catch (error) {
        console.log(error)
    }
})


const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        updateRemainingTodos: (state) => {
            state.remaining = state.todos.filter(item => !item.completed).length
        }
    },
    extraReducers: {
        [getTodosItems.pending]: (state) => {
            state.isLoading = true
        },
        [getTodosItems.fulfilled]: (state, action) => {
            state.isLoading = false
            state.todos = action.payload
            state.filteredTodos = action.payload
            state.remaining = state.todos.filter(item => !item.completed).length
        },
        [getTodosItems.rejected]: (state, action) => {
            state.isLoading = false
            throw new Error(`Couldn't fetch ${todosUrl}`)
        },

        [getTodosItems.pending]: (state) => {
            state.isLoading = true
        },
        [addTodoItem.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.todos = [...state.todos, action.payload]
            state.remaining = state.todos.filter(item => !item.completed).length
            state.isLoading = false
        },
        [addTodoItem.rejected]: (state) => {
            state.isLoading = false
            throw new Error(`Couldn't add ${todosUrl}`)
        },

        [getTodosItems.pending]: (state) => {
            state.isLoading = true
        },
        [updateTodoItem.fulfilled]: (state, action) => {
            let { id } = action.payload
            let todoItem = state.todos.find(item => item.id === id)
            todoItem.completed = !todoItem.completed
            state.remaining = state.todos.filter(item => !item.completed).length
            state.isLoading = false
        },
        [updateTodoItem.rejected]: (state, action) => {
            state.isLoading = false
            throw new Error(`Couldn't update ${todosUrl + action.payload.id}`)
        },

        [deleteTodoItem.pending]: (state) => {
            state.isLoading = true
        },
        [deleteTodoItem.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.todos = state.todos.filter(item => item.id !== action.payload)
            state.isLoading = false
            state.remaining = state.todos.filter(item => !item.completed).length
            console.log(state)
        },
        [deleteTodoItem.rejected]: (state, action) => {
            state.isLoading = false
            throw new Error(`Couldn't delete ${todosUrl + action.payload.id}`)
        },
    }
})

export const { updateRemainingTodos } = todosSlice.actions

export default todosSlice.reducer