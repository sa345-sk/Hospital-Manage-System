/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react'
export const StaffContext = createContext()
export const staffReducer = (state, action) => {
    switch (action.type) { 
        case 'GET_STAFF':
            return { staff: action.payload }
        case 'CREATE_STAFF':
            return { staff: [...state.staff, action.payload]}
        default: 
            return state
    }
}
export const StaffProvider = ({children}) => {
    const [state, dispatch] = useReducer(staffReducer, {staff: null})
    return (
        <StaffContext.Provider value={{...state, dispatch}}>
            {children}
        </StaffContext.Provider>
    )
}