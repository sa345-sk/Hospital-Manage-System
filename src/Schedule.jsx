/* eslint-disable react/prop-types */
import background from './img/sidebar-1.jpg'
import { useState, useEffect, useRef } from 'react'
import Message from './components/Message'
import { useTasks } from './hooks/useTasks'
import Navbar from './components/Navbar'
const Schedule = ({ sidebarControl }) => {
  const {state, dispatch} = useTasks()
  //  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('');
  const [showMssg, setShowMssg] = useState(false)
useEffect(() => {
    // dispatch({ type: 'SET_TASK', payload: [{ task: 'eat' }] })
     console.log(state);
}, [])
  //  tasks.push({task: task})
 const sectionRef = useRef(null)
 const [scheduleName, setScheduleName] = useState() 
 const [scheduleDate, setScheduleDate] = useState() 
 const [scheduleTime, setScheduleTime] = useState() 
 const [sectionCondition, setSectionCondition] = useState(false)
  const addTasks = () => {
    if(task != '' && task != undefined && task.trim()) {
      dispatch({ type: 'UPDATE', payload: {task: task}})
      console.log('Current state:', state);
      setTask('')
    } else {
      setTimeout(() => setShowMssg(false), 4000)
      setShowMssg(true)
    }
  }
  const showAdd = () => {
    if (sectionCondition == false) {
      sectionRef.current.style.display = 'block'
      setSectionCondition(true)
    } 
  }
  const closeAdd = () => {  
    if (sectionCondition == true) {
      sectionRef.current.style.display = 'none'
      setSectionCondition(false)
    }
  }
    return ( 
      <div className='main-footer'>
        <Navbar title='Schedule' control={sidebarControl}/>
          <div className="schedule w-full" style={{ minHeight: '100%', height: '100vh', backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <section ref={sectionRef}>
            <div onClick={closeAdd} className='schedule-dialog'>
              <svg width="64px" height="64px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>cancel</title><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="work-case" fill="#000000" transform="translate(91.520000, 91.520000)"><polygon id="Close" points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"></polygon></g></g></g></svg>
              </div>
              <div id="add-schedule">
                <form>
                  <input type="text" id='text-input' className='focus:outline-none' onChange={(e) => setScheduleName(e.target.value)}/>
                <input type="date" className='focus:outline-none' onChange={(e) => setScheduleDate(e.target.value)}/>
                <input type="time" className='focus:outline-none' onClick={(e) => setScheduleTime(e.target.value)}/>
                  <button id='schedule-button' className='hover:cursor-pointer hover:opacity-90'>Add</button>
                </form>
              </div>
            </section>
            <div className="task">
              <div className="schdules overflow-auto w-full p-2" style={{ height: '100%'}}>
                <div className='bg-yellow-800 w-full'>
                    <span><strong>Meeting with the Director</strong></span>
                    <p>Date Of Appointment: 8/2/2024</p>
                    <p>Time: 3:00 PM</p>
                </div>
                 <div className="add_schedule border hover:cursor-pointer" onClick={showAdd}>
                <svg width="60px" height="60px" viewBox="-20.88 -20.88 65.76 65.76" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00024000000000000003" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.144"></g><g id="SVGRepo_iconCarrier"><path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#ffffff"></path><path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#585858"></path></g></svg>
                 </div>
              </div>
            </div>
          {showMssg ? <Message messageType="Error 😥" errorMssg='Kindly fill the Input before adding.' control={() => setShowMssg(false)} /> : null}
          </div> 
      </div>
    );
}
 
export default Schedule;