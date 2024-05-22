import {configureStore} from "@reduxjs/toolkit"
import todoReducer from './features/todos/todoSlicer'


export const store=configureStore({
    reducer:todoReducer
});