/* eslint-disable react/prop-types */
import Navbar from './components/Navbar';
import Table from './components/Table';
import { usePateint } from './hooks/usePateint'
import { useQuery, useMutation } from '@apollo/client'
import {pateintsQuery, pateintsMutationQuery, pateintDeleteQuery} from './graphql/queries'
import { useEffect, useState } from 'react';
import { Spinner, Alert, Button, Modal} from 'flowbite-react'
import { HiInformationCircle } from 'react-icons/hi';
const Patient = ({ sidebarControl }) => {
    const { data, loading, error } = useQuery(pateintsQuery)
    const { pateints, dispatch } = usePateint()
    const [showModal, setShowModal] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [gender, setGender] = useState('')
    const [diagnosis, setDiagnosis] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    const [isData, setIsData] = useState(false)

    const [addPateint] = useMutation(pateintsMutationQuery, {
        refetchQueries: [{ query: pateintsQuery}]
    })
    useEffect(() => {
        if (data) {
            if (data.pateints.length > 0) dispatch({ type: 'GET', payload: data.pateints }); else setIsData(true)
        }
    }, [data, dispatch, pateints])
    const [deletePateint] = useMutation(pateintDeleteQuery, {
        refetchQueries: [{ query: pateintsQuery }]
    })
    const delete_pateint = (id) => {
        deletePateint({ variables: { id: id } })
    }
    const add_pateint = (e) => {
        e.preventDefault()
        addPateint({
            variables: {
                pateint: {
                    firstName: firstName,
                    secondName: secondName,
                    gender: gender,
                    phone: phone,
                    email: email,
                    diagnosis: diagnosis,
                    date: date
                }
            }
        })
        setShowModal(false)
        setFirstName('')
        setSecondName('')
        setGender('')
        setDiagnosis('')
        setEmail('')
        setPhone('')
        setDate('')
    }
    return ( 
        <div className="pateint_management w-full main-footer">
            <Navbar title='Pateint Management' control={sidebarControl}/>
           <div className="table-container overflow-x-auto">
                <Table data={pateints} delete_pateint={delete_pateint}/>
            </div>
            {loading && <div className="text-center m-1">
                <Spinner aria-label="Center-aligned spinner example" size='xl'/>
            </div>}
            {error && <Alert color='failure' icon={HiInformationCircle} className='mt-2'>
                <span className='font-medium'>Error</span> Cannot access your data, Please check your network connectivity
            </Alert>}
            {showModal && <Modal show={showModal} size="md" onClose={() => setShowModal(false)} popup dismissible>
                <Modal.Header />
                <Modal.Body>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Fill In The Form</h3>
                            <form onSubmit={add_pateint}>
                                <div>
                                    <div className="mb-2 block">
                                        <label>First Name *</label>
                                    </div>
                                    <input
                                        value={firstName}
                                        onChange={(event) => setFirstName(event.target.value)}
                                        required
                                        className='border w-full rounded'
                                        type='text'
                                    />
                                </div>   
                                <div>
                                    <div className="mb-2 block">
                                        <label>Second Name *</label>
                                    </div>
                                    <input
                                        value={secondName}
                                        onChange={(event) => setSecondName(event.target.value)}
                                        required
                                        className='border w-full rounded'
                                        type='text'
                                    />
                                </div>   
                                <div>
                                    <div className="mb-2 block">
                                        <label>Gender *</label>
                                </div>
                                <select name="gender" value={gender}
                                    onChange={(event) => setGender(event.target.value)}
                                    required
                                    className='border w-full rounded'>
                                    <option defaultChecked>None</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                                </div>   
                                <div>
                                    <div className="mb-2 block">
                                        <label>Diagnosis *</label>
                                    </div>
                                    <input
                                        value={diagnosis}
                                        onChange={(event) => setDiagnosis(event.target.value)}
                                        required
                                        className='border w-full rounded'
                                        type='text'
                                    />
                                </div>   
                                <div>
                                    <div className="mb-2 block">
                                        <label>Phone *</label>
                                    </div>
                                    <input
                                        value={phone}
                                        onChange={(event) => setPhone(event.target.value)}
                                        required
                                        className='border w-full rounded'
                                        type='number'
                                        inputMode='number'
                                    />
                                </div>   
                                <div>
                                    <div className="mb-2 block">
                                        <label>Date *</label>
                                    </div>
                                    <input
                                        value={date}
                                        onChange={(event) => setDate(event.target.value)}
                                        required
                                        className='border w-full rounded'
                                        type='date'
                                    />
                                </div>   
                                <div>
                                    <div className="mb-2 block">
                                        <label>Email *</label>
                                    </div>
                                    <input
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                        className='border w-full rounded'
                                        type='email'
                                />
                                </div>   
                            <button className='mt-2 bg-sky-b  hover:bg-sky-b-h ml-1 rounded w-full'>Add Pateint</button>
                            </form>
                        </div>
                </Modal.Body>
            </Modal>}
            {isData && <Alert color='info' icon={HiInformationCircle} className='mt-2'>
                <span className='font-medium'>Info</span> You currently have no pateints!
            </Alert>}
            <Button onClick={() => setShowModal(true)} className='ml-2 mt-2'>Add a Pateint</Button>
           <div>
        </div>
        </div>
    );
}
 
export default Patient;