/* eslint-disable react/prop-types */
import { useReducer, createContext } from "react";
export const PateintContext = createContext()
const reducer = (state, action) => {
    switch (action.type) {
        case 'GET':
            return { pateints: action.payload }
        case 'POST':
            return { pateints: [...state.pateints, action.payload]}
   }
}
export const PateintProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, { pateints: null })
    return (
        <PateintContext.Provider value={{...state, dispatch}}>
            {children}
        </PateintContext.Provider>
    )
}