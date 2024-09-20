/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Dialog from './components/Dialog'
import {useState, useEffect} from 'react'
import Message from "./components/Message";
import Navbar from './components/Navbar';
import { inventoryQuery, inventoryMutationQuery, InventoryDeleteQuery } from './graphql/queries'
import { useQuery, useMutation } from '@apollo/client'
import { useInventory } from './hooks/useInventory'
import { Alert, Spinner, Button } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

const Inventory = ({ sidebarControl }) => {
  const { inventories, dispatch } = useInventory()
  const [inventory, setInventory] = useState('')
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [amount, setAmount] = useState()
  const [showDialog, setShowDialog] = useState(false)
  const [showMssg, setShowMssg] = useState(false)
  const [isData, setIsData] = useState(false)
  const [deleteInventory] = useMutation(InventoryDeleteQuery, {
    refetchQueries: [{ query: inventoryQuery }]
  })
  const { data, loading, error } = useQuery(inventoryQuery)
  const [addInventory] = useMutation(inventoryMutationQuery, {
    refetchQueries: [{ query: inventoryQuery }]
  })

  useEffect(() => {
    if (data) {
      if (data.inventories.length > 0) {
        dispatch({ type: 'GET', payload: data.inventories })
      }else setIsData(true);
    }
  }, [data, dispatch])

  const addItems = (e) => {
    e.preventDefault()
    if (inventory!==undefined && inventory!=='' && price!==undefined && price!==0 && quantity!==undefined &&quantity!==0) {
      addInventory({
        variables: {
          inventory: {
            item: inventory,
            price: price,
            quantity: quantity,
            amount: amount
          }
        }
      })
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
    inventories?.forEach(amount => sum += parseInt(amount.amount))
  const styles = {
    border: '1px solid #c3c3c3',
    borderCollapse: 'collapse'
  }
  const deleteItem = (id) => {
    deleteInventory({variables: {id: id}})
  }
  return ( 
        <div className="main-footer">
      <Navbar title='Inventory Management' control={sidebarControl}/>
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
              { inventories && inventories.map((inventory) => {
                return (
                  <tr key={inventory.id}>
                    <td style={styles}>{inventory.item}</td>
                    <td style={styles}>N{inventory.price}</td>
                    <td style={styles}>{inventory.quantity}</td>
                    <td style={styles}>N{inventory.amount}</td>
                    <td style={styles} onClick={() => deleteItem(inventory.id)}><Button>Delete</Button></td>
                  </tr>
                )
                })}
              </tbody>
        </table>
        {loading && <div className="text-center m-1">
          <Spinner aria-label="Center-aligned spinner example" size='xl' className='mt-2'/>
        </div>}
        {isData && <Alert color='info' icon={HiInformationCircle} className='mt-2'>
          <span className='font-medium'>Info alert</span> You currently have no item in you inventories!
        </Alert>}
        {error && <Alert color='failure' icon={HiInformationCircle} className='mt-2'>
          <span className='font-medium'>Error</span> Cannot access your data, Please check your network connectivity
        </Alert>}
        <br /><Button className="border-none bg-sky-b mb-1 mt-1 p-1 rounded" onClick={() => {
              if (showDialog == false) setShowDialog(true)
                else setShowDialog(false)
        }}>Add Item</Button>
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