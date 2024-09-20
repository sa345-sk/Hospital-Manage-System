/* eslint-disable react/prop-types */
import { Button } from 'flowbite-react'
const Table = ({ data, delete_pateint }) => {
    return ( 
        <table className='table-p w-full'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Second Name</th>
                    <th>Date</th>
                    <th>Diagnosis</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((d) => {
                        return (
                            <tr key={d.id}>
                                <td>{d.firstName}</td>
                                <td>{d.secondName}</td>
                                <td>{d.date}</td>
                                <td>{d.diagnosis}</td>
                                <td>{d.phone}</td>
                                <td>{d.email}</td>
                                <td>{d.gender}</td>
                                <td onClick={() => delete_pateint(d.id)}><Button>Delete</Button></td>
                            </tr>
                        )
                    })}
            </tbody>
        </table> 
);
}
 
export default Table;