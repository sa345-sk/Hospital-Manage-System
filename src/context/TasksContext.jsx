import { createContext, useReducer } from "react"
export const TaskContext = createContext()
export const reducer = (state, action) => {
     switch (action.type) {
        case 'SET_TASK': 
             return {tasks: action.payload}
        case 'UPDATE':
             return {tasks: [action.payload, ...state.tasks]}
        default:
            return state
     }
}

export const TasksProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, { tasks: [{task: 'Done'}] })
    return (
        <TaskContext.Provider value={{...state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
} 
