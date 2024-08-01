/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar";
import Dialog from './components/Dialog'
import {useState} from 'react'
import Message from "./components/Message";
const Inventory = () => {
  const [inventories, setInventories] = useState([])
  const [inventory,  setInventory] = useState()
  const [price,  setPrice] = useState(0)
  const [quantity,  setQuantity] = useState(0)
  const [amount,  setAmount] = useState(0)
  const [showDialog, setShowDialog] = useState(false)
  const [showMssg, setShowMssg] = useState(false)
  const addItems = () => {
    if (inventory!==undefined && inventory!=='' && price!==undefined && price!==0 && quantity!==undefined &&quantity!==0 && amount!==undefined&&amount!==0) {
      inventories.push({inventory: inventory, price: price, quantity: quantity, amount: amount})
      setShowDialog(false)
      console.log(inventories);
    } else {
      setShowMssg(true)
      setTimeout(() => setShowMssg(false), 4000)
    }
  }
    return ( 
        <div>
          <Navbar title="Inventory Management"/>
          <div id="table-container" className="bg-purple-600 m-ma " style={{width: '80%', padding: '5px'}}>
            <table  className="w-full">
              <caption className="text-left">Items</caption>
              <thead>
                <tr>
                  <th className="text-left">Item</th>
                  <th className="text-left">Price</th>
                  <th className="text-left">Quantity</th>
                  <th className="text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CAR</td>
                  <td>N5,000,000.00</td>
                  <td>1</td>
                  <td>N5,000,000.00</td>
                </tr>
              </tbody>
            </table>
            <button className="border-none bg-sky-b p-1" onClick={() => {
              if (showDialog == false) setShowDialog(true)
                else setShowDialog(false)
            }}>Add Item</button>
            {showDialog?<Dialog showItmeDialog={() => {
              if (showDialog == true) setShowDialog(false)
                else setShowDialog(true)
            }} showInvAmount={true} showPrice={true} showQty={true} setInvAmount={setAmount} setProduct={setInventory} setPrice={setPrice} setQty={setQuantity} addProduct={addItems}/>:null}
            {showMssg?<Message messageType="Error 😥" errorMssg="Kindly fill the inputs before adding." control={() => {if (showMssg == true) setShowMssg(false)
              else setAmount(true)
            }}/>:null}
          </div>
        </div>
    );
}
 
export default Inventory;