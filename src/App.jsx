import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './Sidebar'
import Reports from './Reports'
import Patient from './Patient'
import Staff from './Staff'
import Unknown from './Unknown'
import Profile from './Profile'
import Billing from './Billing'
const App = () => {
  return (
    <Router>
      <div className="app flex">
        <Sidebar/>
        <main className='w-full bg-gray-100 main'>
           <Routes>
            <Route path='/' element={<Reports/>}/>
            <Route path='/patientmanagement' element={<Patient/>}/>
            <Route path='/staffmanagement' element={<Staff/>}/>
            <Route path='/userprofile' element={<Profile/>}/>
            <Route path='/billinginvoicing' element={<Billing />}/>
            <Route path='*' element={<Unknown/>}/>
           </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
