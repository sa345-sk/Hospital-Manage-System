/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import logo from '../public/Logo.png'
import { useState, useRef } from 'react'
import Dialog from './components/Dialog'
import Message from './components/Message'
import Navbar from './components/Navbar'
import ReactToPrint from "react-to-print";
const Prescrption = ({sidebarControl}) => {
    const [showDialog, setShowDialog] = useState(false)
    const [medicines, setMedicines] = useState([])
    const [medicine, setMedicine] = useState()
    const [error, setError] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef()
    const addMedicine = () => {
      if (medicine!== undefined && medicine!=='') {
         medicines.push({medicine: medicine})
        setShowDialog(false)
        console.log(medicines);
      } else {
          setError(true)
          setTimeout(() => {setError(false)}, 4000)
      }
    }
    return ( 
        <div className='main-footer'>
            <Navbar title='Prescription' control={sidebarControl}/>
            <div className="prescription p-2 w-full" ref={ref}>
                <div className="prescription-header flex justify-between">
                    <img src={logo} alt="" />
                    <div className='pt-5'>
                        <span><strong>E-mail: </strong>someone@example.com</span>
                        <br/>
                        <span><strong>Phone: </strong>+234 (0)8000000000</span>
                    </div>
                </div>
                <div className="prescriptions">
                    <div className="prescription-headers flex justify-between" style={{borderBottom: '1px solid #c3c3c3'}}>
                        <p><strong>Medicine</strong></p>
                        <p className='text-left w-60'><strong>Description</strong></p>
                    </div>
                    {medicines? medicines.map((medicine, i) => {
                        return (
                                <div className="prescriptions-items flex justify-between" key={i}>
                                    <p>{medicine.medicine}</p>
                                    <textarea></textarea>
                                </div>
                                )
                            }):null}
                </div>
                <button className='bg-sky-b w-28 hover:bg-sky-b-h ml-1 rounded mb-1 mt-2' onClick={() => setShowDialog(true)}>Add Medicine</button>
                <ReactToPrint trigger={() => (<button className="bg-sky-b w-28 hover:bg-sky-b-h ml-1 rounded mb-1 mt-2">Print</button>)} documentTitle={`Prescription`} content={() => ref.current} />
                {showDialog && <Dialog showItmeDialog ={() => {
                    if (showDialog == false) setShowDialog(true) 
                    else setShowDialog(false)
                }} addProduct={addMedicine} setProduct={setMedicine}/>}
                {error && <Message messageType="Error 😥" errorMssg="Kindly fill the input before adding" control={() => setError(false)}/>}
            </div>     
        </div>
    );
}
export default Prescrption;