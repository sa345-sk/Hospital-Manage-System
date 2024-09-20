/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react"
export const TaskContext = createContext()
 const reducer = (state, action) => {
     switch (action.type) {
        case 'GET': 
             return {tasks: action.payload}
        case 'POST':
             return {tasks: [action.payload, ...state.tasks]}
        default:
            return state
     }
}

export const TasksProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, { tasks: null})
    return (
        <TaskContext.Provider value={{...state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
} 
