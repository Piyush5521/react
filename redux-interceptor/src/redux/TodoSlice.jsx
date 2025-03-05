import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name:'todos',
    initialState: {
        todos: [],

    },
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload;
        },
        addTodos: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodos: (state, action) => {
            state.todos = state.todos.filter(todo => todo[i] !== action.payload[i])
        },
        updateTodos: (state, action) => {
            const index = state.todos.findIndex(todo => todo[i] === action.payload[i]);
            index !== -1 ? state.todos[index] = action.payload : null;
        },
    }
})