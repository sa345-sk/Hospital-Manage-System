/* eslint-disable no-unused-vars */
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './Sidebar'
import Reports from './Reports'
import Patient from './Patient'
import Staff from './Staff'
import Unknown from './Unknown'
import Billing from './Billing'
import Schedule from './Schedule' 
import Home from './Home'
import Inventory from './Inventory'
import Prescrption from './Prescription'
import {useRef, useState} from 'react'
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
const App = () => {
  const sidebarRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const overlayRef = useRef(null)
  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache()
  })
    const openSidebar = () => {
      if (innerWidth <= '640') {
        if (isOpen == false) {
          sidebarRef.current.style.width = '256px'
          overlayRef.current.style.cssText = 'display: block; visibility: visible;'
          setIsOpen(true)
        }
        else if (isOpen == true) {
          sidebarRef.current.style.width = '0px'
          overlayRef.current.style.cssText = 'display: none; visibility: hidden;'
          setIsOpen(false)
        }
      } else if (innerWidth > 640) {
        sidebarRef.current.style.width = '256px'
      } else {
        throw new Error('Invalid Width!')
      }
    }
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app flex">
          <Sidebar ref={sidebarRef}/>
          <main className='w-full  main'>   
              <div className='routes'>
                <div id='overlay' ref={overlayRef} onClick={openSidebar}></div>
                <Routes>
                <Route path='/' element={<Reports sidebarControl={openSidebar} />}/>
                <Route path='/patientmanagement' element={<Patient sidebarControl={openSidebar} />}/>
                <Route path='/staffmanagement' element={<Staff sidebarControl={openSidebar} />}/>
                <Route path='/billinginvoicing' element={<Billing sidebarControl={openSidebar} />}/>
                <Route path='/schedule' element={<Schedule sidebarControl={openSidebar} />}/>
                <Route path='/home' element={<Home sidebarControl={openSidebar} />}/>
                <Route path='/inventorymanagement' element={<Inventory sidebarControl={openSidebar} />}/>
                <Route path='/prescription' element={<Prescrption sidebarControl={openSidebar}/>}/>
                <Route path='*' element={<Unknown/>}/>
                </Routes>
              </div>
          </main>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App