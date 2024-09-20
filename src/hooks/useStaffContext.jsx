import { useContext } from 'react'
import { StaffContext } from '../context/StaffContext'

export const useStaffContext = () => {
    const context = useContext(StaffContext)
    if (!context) throw new Error('useStaffContext Must Be Used In A StaffContext  ')
    return context
}