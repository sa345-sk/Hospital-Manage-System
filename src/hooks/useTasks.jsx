import { TaskContext } from '../context/TasksContext'
import {useContext} from 'react'

export const useTasks = () => {
  const context = useContext(TaskContext)
    if (!context) throw Error("useTasksContext must be used inside a task taskContextProvider")
  return context
}
