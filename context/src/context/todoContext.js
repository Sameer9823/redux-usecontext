import { useContext } from "react";
import { createContext } from "react";


export const Todocontext = createContext({
    todos: [
        {
            id: 1,
            todo: 'learn react',
            completed: false
        }
    ],
    addTodo:(todo)=>{},
    editTodo:(todo, id)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{},
})

export const useTodo = () => {
    return useContext(Todocontext)
}

export const TodoProvider = Todocontext.Provider