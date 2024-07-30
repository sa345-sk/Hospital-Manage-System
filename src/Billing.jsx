/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import Dialog from "./components/Dialog";
import Message from "./components/Message";
import shadows from "@mui/material/styles/shadows";
const Billing = () => {
    const ref = useRef()
    const [addItem, setAddItem] = useState(false)
    const [list, setList] = useState([])
    const [product, setProduct] = useState()
    const [amount, setAmount] = useState()
    const [showMssg, setShowMssg] = useState(false)
    const showItmeDialog = () => {
        if (addItem == false) {
            setAddItem(true)
        } else {
            setAddItem(false)
        }
    }
    const addProduct = () => {
        if (product!== undefined && amount!== undefined) {
            list.push({ product: product, amount: amount })
            setAddItem(false)
        } else {
            setShowMssg(true)
            setTimeout(() => {
               setShowMssg(false)
            }, 4000)
        }
    }
    let sum = 0
    list.forEach(amount => sum += parseInt(amount.amount))
    const mssgControl = () => {
        setShowMssg(false)
    }
    return ( 
        <div className="billing-invoicing bg-white shadow">
            <div className="billing-pdf p-3" ref={ref}>
                <div className="billing-details">
                    <div className="billing-headers w-80">
                        <h3 style={{ color: '#2093c6', fontSize: '24px'}}>Hospital</h3>
                        <span>+234 (0) 806658239</span>
                        <p>Email: hospital@example.com</p>
                    </div>
                    <div className="billing-headers w-80">
                        <h4 style={{ color: '#2093c6', fontSize: '24px' }}>INVOICE</h4>
                        <span>ID: 1234</span>
                    </div>
                </div>
                <div className="billing-info">
                    <table className="billing-table w-full  mt-11" >
                        <thead style={{ borderBottom: '1px  solid #c3c3c3'}} className="w-full">
                            <tr className="flex justify-between ">
                                <th className="w-80 text-left"><h5>Items</h5></th>
                                <th className="w-80 text-left"><h5>Amount</h5></th>
                            </tr>
                        </thead>
                        <tbody className="w-fit">
                            <tr style={{borderBottom: '1px solid #c3c3c3'}} className="mt-3 pb-2 w-full">
                                {
                                    list? 
                                    list.map((item, i) => {
                                        return (
                                            <td key={i} className="flex justify-between w-full">
                                                <p className="w-80 text-left">{item.product}</p>
                                                <p className="w-80 text-left">N{item.amount}</p>
                                            </td>
                                        )
                                    }):null
                                }
                            </tr>
                            <tr style={{ borderBottom: '1px solid #c3c3c3'}} >
                                <td className="flex justify-between w-full">
                                    <div className="w-80">
                                        <p><span>Total Amount: </span></p>
                                        <p><span>Payable Amount: </span></p>
                                    </div>
                                    <div className="w-80">
                                        <p><span>N{sum}</span></p>
                                        <p><span>N{sum}</span></p>
                                    </div>
                                </td>
                            </tr>
                            <tr className="total">
                                <td><strong className="text-red-500 flex justify-between"><span className="w-80 text-left">Total: </span><span className="w-80 flex justify-between">N{sum}</span></strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {addItem?
                   <Dialog showItmeDialog={showItmeDialog} setProduct={setProduct} setAmount={setAmount} addProduct={addProduct}/>:null
                }
            </div> 
            <button onClick={showItmeDialog} className="bg-sky-b w-28 hover:bg-sky-b-h focus:outline-none">Add Items</button>
            <ReactToPrint trigger={() => (<button className="bg-sky-b w-28 hover:bg-sky-b-h">Print</button>)} documentTitle={`INVOICE 1234`} content={() => ref.current}/>
            {showMssg ? <Message messageType="Error 😥" errorMssg='Kindly fill the Inputs before adding it to the Invoice' control={mssgControl}/>:null}
    </div> 
    );
}
 
export default Billing; 