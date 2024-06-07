import S from './img/sidebar-5.jpg'
import {Link} from 'react-router-dom'
const Staff = () => {
    return ( 
    <div>
            <div className="dashboard-nav w-full h-16 flex justify-between bg-zinc-200" style={{ borderBottom: '1px solid #929292' }}>
                <div className="nav-1 flex w-fit items-center">
                    <h2 className="p-1 text-3xl hover:cursor-pointer defaultc">Staff Mannagement</h2>
                    <p className="p-1 hover:cursor-pointer">Notification</p>
                </div>
                <div className="nav-1 flex items-center w-fit">
                    <Link className="p-1 hover:cursor-pointer">Account</Link>
                    <p className="p-1 hover:cursor-pointer">Logout</p>
                </div>
            </div>
            <div className='w-op h-fit m-ma mt-5'>
                <Link to='/staffmanagement/:id/info'>
                    <div className='card shadow bg-white flex p-4' style={{ borderRadius: '15px' }}>
                        {/*THIS IS THE PROFILE IMAGE*/}
                        <img src={S} className='w-64 h-64' style={{ borderRadius: '5px' }} />
                        <div className='ml-10 info'>
                            <p>Name: Aliyu sayyid</p>
                            <p>Age: 20</p>
                            <p>Date Employed: 5/2/2021</p>
                            <p>Gender: Male</p>
                            <p>Position: Back-End</p>
                            <p>Phone: +1 45553200</p>
                            <p>Email: someone@example.com</p>
                        </div>
                    </div>
                </Link>
            </div>
    </div>
    );
}
 
export default Staff;