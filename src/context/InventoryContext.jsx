/* eslint-disable react/prop-types */
import { useReducer, createContext } from 'react'
export const InventoryContext = createContext()
const reducer = (state, action) => {
    switch (action.type) {
        case 'GET':
            return { inventories: action.payload }
        case 'POST':
            return { inventories: [action.payload, ...state.inventories] }
        default:
            return state
    }
}
export const IventoryProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, { iventories: null })
        return (
            <InventoryContext.Provider value={{ ...state, dispatch }}>
                {children}
            </InventoryContext.Provider>
        )
}