import { useContext } from 'react'
import { InventoryContext } from '../context/InventoryContext'
export const useInventory = () => {
    const context = useContext(InventoryContext)
    return context
}