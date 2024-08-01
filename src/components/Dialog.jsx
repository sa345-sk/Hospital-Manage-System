/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Dialog = ({ showItmeDialog, setProduct, setAmount, addProduct, showAmount = false, showPrice = false, showQty = false, showInvAmount = false, invAmount, setQty, setPrice, product, qty, price , calculateTotal}) => {
    const styles = {
        width: !showAmount && !showPrice && !showQty && !showInvAmount ? '99%' : '46.5%',
        marginBottom: !showAmount && !showPrice && !showQty && !showInvAmount ? '0px' : '5px'
    }
    return ( 
        <div className="dialog z-40">
            <div className="wrapper shadow">
                <span className="cursor-pointer" onClick={showItmeDialog}>X</span>
                <p className="text-center">Item</p>
                <div className="inputs flex justify-between mt-9 flex-row flex-wrap">
                    <input type="text" placeholder="Item" onChange={(e) => setProduct(e.target.value)} style={styles} value={product}/>
                    {showPrice ? <input type="number" placeholder="Price (N)" value={price} style={{marginBottom: '5px'}} onChange={(e) => {
                        const newPrice = parseFloat(e.target.value)
                        if (!isNaN(newPrice)) {
                            setPrice(newPrice)
                            calculateTotal(newPrice, qty)
                        }
                        }}/>:null}
                    {showQty ? <input type="number" placeholder="Quantity" value={qty} onChange={(e) => {
                        const newQuantity = parseInt(e.target.value) 
                        if (!isNaN(newQuantity)) {
                            setQty(newQuantity)
                            calculateTotal(price, newQuantity)
                        }
                        }
                        } />:null}
                    {showInvAmount ? <input type="number" placeholder="Amount (N)" value={invAmount} disabled className="bg-white hover:cursor-not-allowed"  />:null}
                    {showAmount&& <input type="number" placeholder="Amount (N)" onChange={(e) => setAmount(e.target.value)} style={{marginBottom: '5px'}}/>}
                    <button style={{ background: '#2093c6', width: '150px', border: 0, marginLeft: '30%' }} onClick={addProduct} className="hover:bg-sky-b-h">Add</button>
                </div>
            </div>
        </div> 
    );
}
export default Dialog;