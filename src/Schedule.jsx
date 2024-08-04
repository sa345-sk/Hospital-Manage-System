import background from './img/sidebar-1.jpg'
import { useState, useEffect } from 'react'
import Message from './components/Message'
import { useTasks } from './hooks/useTasks'
import Navbar from './components/Navbar'
const Schedule = () => {
  const {state, dispatch} = useTasks()
  //  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('');
  const [showMssg, setShowMssg] = useState(false)
useEffect(() => {
    // dispatch({ type: 'SET_TASK', payload: [{ task: 'eat' }] })
     console.log(state);
}, [])
  //  tasks.push({task: task})
 
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
    return ( 
      <div style={{marginBottom: '50px'}}>
          <div className="schedule w-full" style={{ minHeight: '100%', height: '100vh', backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="task">
              <div className="schdules overflow-auto w-full p-2" style={{paddingBottom: '100px', height: '95.3vh'}}>
                <div className='bg-yellow-800 w-full'>
                    <span><strong>Meeting with the Director</strong></span>
                    <p>Date Of Appointment: 8/2/2024</p>
                    <p>Time: 3:00 PM</p>
                </div>
                {state && state.map((task, i) => {
                  return (
                    <p key={i}>{task}</p>
                  )
                })}
              </div>
              <div className="task-input fixed z-30 shadow flex " style={{ borderRadius: '15px', boxShadow: 'initial 2px #c3c3c3'}}>
                <div className="bg-lime-500 w-10 h-9 text-center pt-1 hover:cursor-pointer" style={{ borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', borderRight: '1px solid #c3c3c3'}} onClick={addTasks}>Add</div>
                  <input type="text" className="bg-lime-500 w-75 h-9 focus:outline-none overflow-auto" onChange={(e) => setTask(e.target.value)} value={task}/>
                  <div className="w-32 h-9  flex justify-evenly pt-1 bg-lime-500" style={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px'}}>
                    <div className="hover:cursor-pointer">Date</div>
                    <div className="hover:cursor-pointer">Time</div>
              {/* <input type="date" className="absolute top-0 left-96 focus:outline-none"/>
                  <input type="time" className="focus:outline-none absolute top-0 left-0 bottom-0"/> */}
                  </div>
                </div>
            </div>
          {showMssg ? <Message messageType="Error 😥" errorMssg='Kindly fill the Input before adding.' control={() => setShowMssg(false)} /> : null}
          </div> 
      </div>
    );
}
 
export default Schedule;