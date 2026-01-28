import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

// const savedTodos = localStorage.getItem("todos")
//   ? JSON.parse(localStorage.getItem("todos"))
//   : [];

// const todolistslice = createSlice({
//   name: "todo",
//   initialState: {
//     list: savedTodos,  
//   },
const todolistslice = createSlice({
    name : "todo",
    initialState : {
        list : [],
    },

    reducers:{
        addTodo : (state , action) => {
            state.list.push({
                id:Date.now(),
                text:action.payload, 
            });
        },

        deleteTodo : (state, action) => {
           state.list= state.list.filter((t)=>t.id !== action.payload);
        },

        updateTodo : (state, acttion) => {
            const {id , text} = acttion.payload;

            const todo = state.list.find((t)=>t.id === id);
            if(todo){
                todo.text = text;
            }
        },        
    },
});


export const {addTodo , deleteTodo , updateTodo } = todolistslice.actions ;
export default todolistslice.reducer;
