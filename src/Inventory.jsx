/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar";
import Dialog from './components/Dialog'
import {useState} from 'react'
import Message from "./components/Message";
const Inventory = () => {
  const [inventories, setInventories] = useState([])
  const [inventory,  setInventory] = useState('')
  const [price,  setPrice] = useState(0)
  const [quantity,  setQuantity] = useState(0)
  const [amount,  setAmount] = useState()
  const [showDialog, setShowDialog] = useState(false)
  const [showMssg, setShowMssg] = useState(false)
  const addItems = () => {
    if (inventory!==undefined && inventory!=='' && price!==undefined && price!==0 && quantity!==undefined &&quantity!==0) {
      inventories.push({ inventory: inventory, price: price, quantity: quantity, amount: amount })
      setInventory('')
      setPrice(0)
      setQuantity(0)
      setAmount(0)
      setShowDialog(false)
    } else {
      setShowMssg(true)
      setTimeout(() => setShowMssg(false), 4000)
    }
  }
  const calculateAmount = (price, qty) => {
     const amount = price * qty
      setAmount(amount)
    }
    let sum = 0
    inventories.forEach(amount => sum += parseInt(amount.amount))
  const styles = {
    border: '1px solid #c3c3c3',
    borderCollapse: 'collapse'
  }
  return ( 
        <div className="main-footer">
          <Navbar title="Inventory Management"/>
          <div id="table-container" className="m-ma " style={{width: '80%', padding: '5px'}}>
            <table  className="w-full" style={styles}>
              <thead>
                <tr>
                  <th className="text-left" style={styles}>Item</th>
                  <th className="text-left" style={styles}>Price</th>
                  <th className="text-left" style={styles}>Quantity</th>
                  <th className="text-left" style={styles}>Amount</th>
                  <th className="text-left" style={styles}>Actions</th>
                </tr>
              </thead>
              <tbody>
              { inventories?.map((inventory, i) => {
                return (
                  <tr key={i}>
                    <td style={styles}>{inventory.inventory}</td>
                    <td style={styles}>N{inventory.price}</td>
                    <td style={styles}>{inventory.quantity}</td>
                    <td style={styles}>N{inventory.amount}</td>
                    <td style={styles}><button className="border-none p-1 bg-yellow-600">Delete</button></td>
                  </tr>
                )
                })}
              </tbody>
            </table>
            <button className="border-none bg-sky-b p-1" onClick={() => {
              if (showDialog == false) setShowDialog(true)
                else setShowDialog(false)
            }}>Add Item</button>
          </div>
            <div className="ml-3">
              <h3>Total:</h3>
              <input inputMode="numeric" disabled value={`N${sum}`} style={{background: '#c3c3c3', borderRadius: '5px', padding: '2px'}}/>
            </div>
            {showDialog?<Dialog showItmeDialog={() => {
              if (showDialog == true) setShowDialog(false)
                else setShowDialog(true)
            }} showInvAmount={true} showPrice={true} showQty={true} invAmount={amount} setProduct={setInventory} setPrice={setPrice} setQty={setQuantity} addProduct={addItems} product={inventory} qty={quantity} price={price}  calculateTotal={calculateAmount}/>:null}
            {showMssg?<Message messageType="Error 😥" errorMssg="Kindly fill the inputs before adding." control={() => {if (showMssg == true) setShowMssg(false)
              else setShowMssg(true)
            }}/>:null}
        </div>
    );
}
 
export default Inventory;