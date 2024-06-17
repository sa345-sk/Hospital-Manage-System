import {Link} from 'react-router-dom'
import Navbar from './components/Navbar';
const Patient = () => {
    return ( 
        <div className="pateint_management w-full h-screen ">
           <Navbar title="Patient Management"/>
           <div className=''>
            <div className='table h-fit m-ma mt-5 bg-white shadow'>
                 <div className="headers">
                  <h4 style={{gridArea: 'HID'}}>ID</h4>
                  <h4 style={{gridArea: 'HNAME'}}>NAME</h4>
                  <h4 style={{gridArea: 'HDATE'}}>DATE</h4>
                  <h4 style={{gridArea: 'HDN'}}>DIAGNOSIS</h4>
                  <h4 style={{gridArea: 'HP'}}>PHONE</h4>
                  <h4 style={{gridArea: 'HE'}}>EMAIL</h4>
                 </div>
                 <div className="body">
                 <Link>
                    <p>1</p>
                    <p>IBRAHIM GONI</p>
                    <p className='pl-2'>8/5/2025</p>
                    <p className='pl-3'>HEADACHE</p>
                    <p className='pl-2'>+234(0)80235614</p>
                    <p className='pl-3'>someone@example.com</p>
                 </Link>
                 </div>
             </div>
           </div>
        </div>
    );
}
 
export default Patient;