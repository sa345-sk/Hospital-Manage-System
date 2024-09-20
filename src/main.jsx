import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TasksProvider } from './context/TasksContext'
import { StaffProvider } from './context/StaffContext.jsx'
import { IventoryProvider } from './context/InventoryContext.jsx'
import { PateintProvider } from './context/PateintContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <TasksProvider>
      <StaffProvider>
        <IventoryProvider>
          <PateintProvider>
            <App />
          </PateintProvider>
        </IventoryProvider>
      </StaffProvider>
    </TasksProvider>
  </React.StrictMode>
)
