/* eslint-disable react/prop-types */
"use client";
import { useMutation } from '@apollo/client'
import { staffMutationQuery, staffQuery } from '../graphql/queries'
import { useState } from 'react'
import { Alert } from 'flowbite-react'
import { HiInformationCircle } from "react-icons/hi";
const StaffDialog = ({ show, func }) => {
    const [addStaff, { error, loading}] = useMutation(staffMutationQuery, {
        refetchQueries: [{ query: staffQuery }]
    })
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [dateEmployed, setDateEmployed] = useState('')
    const [gender, setGender] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const add_staff = (e) => {
        e.preventDefault()
        addStaff({
            variables: {
                staff: {
                    firstName: firstName,
                    secondName: secondName,
                    dateEmployed: dateEmployed,
                    gender: gender,
                    phone: phone,
                    email: email,
                    age: age
                }
            }
        })
        show(false)
    }
    return (
        <div id="staff-dialog" className='z-40'>
            <div id="staff-overlay">
                <form onSubmit={add_staff}>
                    <h1 className='text-2xl pl-2 pt-2 hover:cursor-pointer' onClick={func}>X</h1>
                    <input type="text" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} required value={firstName}/>
                    <input type="text" placeholder='Second Name' onChange={(e) => setSecondName(e.target.value)} required value={secondName}/>
                    <input type="date" placeholder='Date Employed' onChange={(e) => setDateEmployed(e.target.value)} required value={dateEmployed}/>
                    <select onChange={(e) => setGender(e.target.value)} required value={gender}>
                        <option defaultChecked>Male</option>
                        <option>Female</option>
                    </select>
                    <input inputMode="numeric" onChange={(e) => setPhone(e.target.value)} placeholder='Phone'required value={phone}/>
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required value={email}/>
                    <input inputMode="numeric"  placeholder='Age' type="number"onChange={(e) => setAge(parseInt(e.target.value))} required value={age}/>
                    {!loading && <button className='hover:bg-sky-b-h'>Add</button>}
                    {loading && <button disabled>Loading...</button>}
                    {error && <Alert color='failure' icon={HiInformationCircle} withBorderAccent>
                      <span className='font-medium'></span>    
                    </Alert>}
                </form>
           </div>
        </div>
    );
}
 
export default StaffDialog;
