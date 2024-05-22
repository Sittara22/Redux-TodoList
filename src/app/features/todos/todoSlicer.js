import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={   //This is initial state of Redux State 
    todos:[{
        id:1,
        text:"Hello world",
    }]
}

export const todoSlicer=createSlice({
 name:'todo',
 initialState,
 reducers:{
    addTodo:(state,action)=>{  //addTodo for adding task in State
        const todo={
            id:nanoid(),
            text:action.payload
        }
        state.todos.push(todo);//todos comes from initial state
    },
    removeTodo:(state,action)=>{
       state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
    },
 }

})

export const{addTodo,removeTodo} =todoSlicer.actions

export default todoSlicer.reducer