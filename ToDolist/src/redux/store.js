import { configureStore } from "@reduxjs/toolkit";
import todoreducer  from './todolistslice';


const loadstate = () => {
    try{
        const data = localStorage.getItem("todos");
        return data ? {todo : { list : JSON.parse(data) } } : undefined ;
    }catch {
        return undefined;
    }
}

export const store = configureStore({
    reducer :{
        todo : todoreducer,
    },
    preloadedState : loadstate(),
});