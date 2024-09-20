/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useMutation } from '@apollo/client'
import { staffMutationQuery } from '../graphql/queries'
const Dialog = ({ showItmeDialog, setProduct, setAmount, addProduct, showAmount = false, showPrice = false, showQty = false, showInvAmount = false, invAmount, setQty, setPrice, product, qty, price, calculateTotal}) => {
   
    const styles = {
        width: !showAmount && !showPrice && !showQty && !showInvAmount ? '99%' : '46.5%',
        marginBottom: !showAmount && !showPrice && !showQty && !showInvAmount ? '0px' : '5px',
        border: 'none'
    }
    return ( 
        <div className="dialog z-40">
            <div className="wrapper shadow">
                <span className="cursor-pointer" onClick={showItmeDialog}>X</span>
                <p className="text-center">Item</p>
                <div className="inputs flex justify-between mt-9 flex-row flex-wrap">
                    <input type="text" placeholder="Item" onChange={(e) => setProduct(e.target.value)} style={styles} value={product} className='border-none'/>
                    {showPrice ? <input inputMode="numeric" placeholder="Price (N)" value={price} style={{marginBottom: '5px', width: '203px', padding: '4px'}} onChange={(e) => {
                        const newPrice = parseFloat(e.target.value)
                        if (!isNaN(newPrice)) {
                            setPrice(newPrice)
                            calculateTotal(newPrice, qty)
                        }
                        }}/>:null}
                    {showQty ? <input  placeholder="Quantity" value={qty} onChange={(e) => {
                        const newQuantity = parseInt(e.target.value) 
                        if (!isNaN(newQuantity)) {
                            setQty(newQuantity)
                            calculateTotal(price, newQuantity)
                        }
                        }
                        } inputMode="numeric" style={{ paddingLeft: '2px' }}/>:null}
                    {showInvAmount ? <input type="number" placeholder="Amount (N)" value={invAmount} disabled className="bg-white hover:cursor-not-allowed border-none" inputMode="numeric"/>:null}
                    {showAmount&& <input type="number" placeholder="Amount (N)" onChange={(e) => setAmount(e.target.value)} style={{marginBottom: '5px', border: 'none'}}/>}
                    <button style={{ background: '#2093c6', width: '150px', border: 0, marginLeft: '30%' }} onClick={addProduct} className="hover:bg-sky-b-h rounded mt-2 ">Add</button>
                </div>
            </div>
        </div> 
    );
}
export default Dialog;