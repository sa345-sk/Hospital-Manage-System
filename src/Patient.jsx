import {Link} from 'react-router-dom'
import Navbar from './components/Navbar';
const Patient = () => {
    return ( 
        <div className="pateint_management w-full h-screen ">
           <Navbar title="Patient Management"/>
           <div className=''>
            <div className='table h-fit m-ma mt-5 bg-white shadow'>
                 <div className="headers">
                  <h4>ID</h4>
                  <h4>NAME</h4>
                  <h4>DATE</h4>
                  <h4>DIAGNOSIS</h4>
                  <h4>PHONE</h4>
                  <h4>EMAIL</h4>
                 </div>
                 <div className="body">
                  <p>1</p>
                  <p>IBRAHIM GONI</p>
                  <p>8/5/2025</p>
                  <p>HEADACHE</p>
                  <p>+234(0)80235614</p>
                  <p></p>
                 </div>
             </div>
           </div>
        </div>
    );
}
 
export default Patient;