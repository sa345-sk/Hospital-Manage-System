import { useContext } from 'react'
import { PateintContext } from '../context/PateintContext'
export const usePateint = () => {
    const context = useContext(PateintContext)
    return context
}