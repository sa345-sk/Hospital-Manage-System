/* eslint-disable react/prop-types */
const Dialog = ({ showItmeDialog, setProduct, setAmount, addProduct }) => {
    return ( 
        <div className="dialog">
            <div className="wrapper shadow">
                <span className="cursor-pointer" onClick={showItmeDialog}>X</span>
                <p className="text-center">Item</p>
                <div className="inputs flex justify-between mt-9 flex-row flex-wrap">
                    <input type="text" placeholder="Medicine/Item" required onChange={(e) => setProduct(e.target.value)} />
                    <input type="number" placeholder="Amount (N)" required onChange={(e) => setAmount(e.target.value)} />
                    <button style={{ background: '#2093c6', width: '150px', border: 0, marginLeft: '30%' }} onClick={addProduct}>Add Item</button>
                </div>
            </div>
        </div> 
    );
}
 
export default Dialog;
