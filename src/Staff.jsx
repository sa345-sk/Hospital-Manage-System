/* eslint-disable react/prop-types */
import Navbar from './components/Navbar';
import {useQuery, useMutation } from '@apollo/client'
import { staffQuery, StaffDeleteQuery } from './graphql/queries'
import { useEffect, useState } from 'react';
import { useStaffContext} from './hooks/useStaffContext'
import StaffDialog from './components/StaffDialog'
import { Alert, Spinner, Button } from 'flowbite-react'
import { HiInformationCircle } from "react-icons/hi";

const Staff = ({sidebarControl}) => {
    const { error, loading, data } = useQuery(staffQuery)
    const {staff, dispatch} = useStaffContext() 
    const [s, setS] = useState(false)
    const [isData, setIsData] = useState(false)

    useEffect(() => {
        if (data) {
            if(data.staff.length > 0 )dispatch({ type: 'GET_STAFF', payload: data.staff }); else setIsData(true)
        }
    }, [dispatch, data])
    const [deleteStaff] = useMutation(StaffDeleteQuery, { refetchQueries: [{ query: staffQuery }]})
    const mojo = () => {
        if (s == true) setS(false)
        else if(s == false) setS(true)
    }
    const delete_staff = (id) => {
        deleteStaff({variables: {id: id}})
    }
    return ( 
    <div className='main-footer'>
        <Navbar title='Staff Management' control={sidebarControl}/>
            <div className='w-op h-fit m-ma mt-5'>
                <table className='staff-table'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Second Name</th>
                            <th>Date Employed</th>
                            <th>Gender</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr> 
                    </thead>
                    <tbody>
                        {staff && staff.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.firstName}</td>
                                    <td>{data.secondName}</td>
                                    <td>{data.dateEmployed}</td>
                                    <td style={{textTransform: 'Capitalize'}}>{data.gender}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.email}</td>
                                    <td>{data.age}</td>
                                    <td onClick={() => delete_staff(data.id)}><Button>Delete</Button></td>
                                </tr>
                            )}
                        )}
                    </tbody>
                </table>
                {loading && <div className="text-center m-1">
                    <Spinner aria-label="Center-aligned spinner example" size='xl' />
                </div>}
                {error && <Alert color='failure' icon={HiInformationCircle} className='mt-2'>
                    <span className='font-medium'>Info alert</span> Cannot access your data, Please check your network connectivity
                </Alert>}
                {isData && <Alert color='info' icon={HiInformationCircle} className='mt-2'>
                    <span className='font-medium'>Info</span> You currently have staff!
                </Alert>}
            </div>
            <Button className=' ml-2 mb-1 mt-2' onClick={mojo}>
                Add
            </Button>
            {s && <StaffDialog show={setS} func={mojo}/>}
    </div>
    );
}
 
export default Staff;