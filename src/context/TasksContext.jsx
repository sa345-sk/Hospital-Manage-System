import { createContext, useReducer } from "react"
export const TaskContext = createContext()
export const reducer = (state, action) => {
     switch (action.type) {
        case 'SET_Task': 
             return {tasks: action.payload}
        case 'UPDATE':
            return {tasks: [action.payload, ...state.tasks]}
        default:
            return state
     }
}

export const TasksProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {tasks: null})
    return (
        <TaskContext.Provider value={{...state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
} 
