import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './Sidebar'
import Reports from './Reports'
import Patient from './Patient'
import Staff from './Staff'
import Unknown from './Unknown'
import Profile from './Profile'
import Billing from './Billing'
import Schedule from './Schedule' 
import Home from './Home'
import Inventory from './Inventory'
import Prescrption from './Prescription'
import {useRef} from 'react'
const App = () => {
  const sidebarRef = useRef(null)
   
  return (
    <Router>
      <div className="app flex">
        <Sidebar ref={sidebarRef}/>
        <main className='w-full bg-gray-100 main'>
            <div className='routes'>
              <Routes>
                <Route path='/' element={<Reports/>}/>
                <Route path='/patientmanagement' element={<Patient/>}/>
                <Route path='/staffmanagement' element={<Staff/>}/>
                <Route path='/userprofile' element={<Profile/>}/>
                <Route path='/billinginvoicing' element={<Billing />}/>
                <Route path='/schedule' element={<Schedule/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/inventorymanagement' element={<Inventory />}/>
                <Route path='/prescription' element={<Prescrption sidebarControl={sidebarRef}/>}/>
                <Route path='*' element={<Unknown/>}/>
              </Routes>
            </div>
           
        </main>
      </div>
    </Router>
  )
}

export default App