
import {Link} from 'react-router-dom'
import Navbar from './components/Navbar';
const Patient = () => {
    return ( 
        <div className="pateint_management w-full h-screen ">
           <Navbar title="Patient Management"/>
           <div className='w-op h-fit m-ma mt-5 bg-white shadow'>
            <div className="table">
                <div className="headers">
                    <h3 className='id'>ID</h3>
                    <h3 className='fn'>First Name</h3>
                    <h3 className='ln'>Last Name</h3>
                    <h3 className='dg'>Diagnosis</h3>
                    <h3 className='gd'>Gender</h3>
                    <h3 className='rd'>Reported Date</h3>
                    <h3 className='ph'>Phone</h3>
                </div>
                <Link>
                  <div className='table-data'>
                    <p>1</p>
                    <p>Ibrahim</p>
                    <p>Goni</p>
                    <p>Headache</p>
                    <p>Male</p>
                    <p>5/2/09</p>
                    <p>+1 1275136298</p>
                  </div>
                </Link>
            </div>
           </div>
        </div>
    );
}
 
export default Patient;