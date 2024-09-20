/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import Message from './components/Message'
import { useTasks } from './hooks/useTasks'
import Navbar from './components/Navbar'
import { useQuery, useMutation } from '@apollo/client'
import { scheduleQuery, scheduleMutationQuery, ScheduleDeleteQuery } from './graphql/queries'
import { Spinner, Alert, Button, Card, Modal } from 'flowbite-react'
import { HiInformationCircle } from 'react-icons/hi' 
import { FaTrash } from 'react-icons/fa'
const Schedule = ({ sidebarControl }) => {
  const {tasks, dispatch} = useTasks()
  const [showMssg, setShowMssg] = useState(false)
  const { error, loading, data } = useQuery(scheduleQuery)
  const [isData, setIsData] = useState(false)
  const [deleteSchedule] = useMutation(ScheduleDeleteQuery, {
    refetchQueries: [{ query: scheduleQuery}]
  })
  const [addSchedule] = useMutation(scheduleMutationQuery, {
    refetchQueries: [{ query: scheduleQuery }]
  })
  useEffect(() => {
    if (data) {
      if (data.schdules.length > 0) {
        dispatch({ type: 'GET', payload: data.schedules })
      } else setIsData(true)
    }
}, [dispatch, data])
 const [scheduleName, setScheduleName] = useState('') 
 const [scheduleDate, setScheduleDate] = useState('') 
  const [scheduleTime, setScheduleTime] = useState('') 
  const [showModal, setShowModal] = useState(false)

  const addTasks = (e) => {
   e.preventDefault()
   if (scheduleName != '' && scheduleDate != ''  && scheduleTime != '') {
     addSchedule({
       variables: {
         schedule: {
           title: scheduleName.trim(),
           date: scheduleDate,
           time: scheduleTime
         }
       }
     })
     setShowModal(false)
     setScheduleName('')
     setScheduleDate('')
     setScheduleTime('')
    } else {
      setTimeout(() => setShowMssg(false), 4000)
      setShowMssg(true)
    }
  }
  const deleteTask = (id) => {
    deleteSchedule({variables: {id: id}})
  }
    return ( 
      <div className='main-footer'>
        <Navbar title='Appointment' control={sidebarControl}/>
          {showModal && <Modal show={showModal} size="md" onClose={() => setShowModal(false)} popup dismissible>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Fill In The Form</h3>
                <form>
                  <div>
                    <div className="mb-2 block">
                      <label>Appointment Title *</label>
                    </div>
                    <input
                      value={scheduleName}
                      onChange={(event) => setScheduleName(event.target.value)}
                      required
                      className='border w-full rounded'
                      type='text'
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <label>Time *</label>
                    </div>
                    <input
                      value={scheduleTime}
                      onChange={(event) => setScheduleTime(event.target.value)}
                      required
                      className='border w-full rounded'
                      type='time'
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <label>Date *</label>
                    </div>
                    <input
                      value={scheduleDate}
                      onChange={(event) => setScheduleDate(event.target.value)}
                      required
                      className='border w-full rounded'
                      type='date'
                    />
                  </div>
                <Button onClick={addTasks} className='mt-2'>Add Appointment</Button>
                </form>
              </div>
            </Modal.Body>
          </Modal>}
            <div className="task">
            <div className="schdules w-full p-2" style={{ height: '100%' }}>
            {loading && <div className="text-center m-1">
              <Spinner aria-label="Center-aligned spinner example" size='xl' />
            </div>}
              {error && <Alert color='failure' icon={HiInformationCircle}><span className='font-medium'>Error</span> Cannot access your data, Please check your network connectivity</Alert>}
              {isData && <Alert color='info' icon={HiInformationCircle}><span className='font-medium'>Info</span>You have no Apointments</Alert>}
              {tasks && tasks.map(task => {
                return (
                  <Card className='w-full mt-1' key={task.id}>
                    <span className='text-2xl font-bold tracking-tight text-gray-900 flex w-full justify-between'><strong className='w-fit'>{task.title}</strong>
                      <Button className='w-fit bg-gray-400 rounded hover:shadow' onClick={() => deleteTask(task.id)}>{<FaTrash/>}</Button>
                    </span>
                    <p className='font-normal text-gray-700 dark:text-gray-400'>{task.date}</p>
                    <p className='font-normal text-gray-700 dark:text-gray-400'>{task.time}</p>
                  </Card>
                )
              })}
                 <Button onClick={() => setShowModal(true)} className='mt-2'>
                   Add an Appointment
                 </Button>
              </div>
          {showMssg ? <Message messageType="Error 😥" errorMssg='Kindly fill the Input before adding.' control={() => setShowMssg(false)} /> : null}
          </div> 
      </div>
    );
}
 
export default Schedule;