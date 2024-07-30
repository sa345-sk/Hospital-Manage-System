/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'
const Table = ({data}) => {
    return ( 
        <table className='table-p w-full'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Second Name</th>
                    <th>Date</th>
                    <th>Diagnosis</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d, i) => {
                        return (
                            <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{d.firstName}</td>
                                    <td>{d.secondName}</  td>
                                    <td>{d.date}</td>
                                    <td>{d.diagnosis}</td>
                                    <td>{d.phone}</td>
                                    <td>{d.email}</td>
                                    <td><Link to='/patient/:id'>Manage</Link></td>
                            </tr>
                        )
                    })}
            </tbody>
        </table> 
);
}
 
export default Table;