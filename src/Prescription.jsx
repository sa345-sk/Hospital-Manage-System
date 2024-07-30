const Prescrption = () => {
    return ( 
        <div className="prescription">
            <div className="prescription-header">
                <img src="" alt="" />
                <div>
                    <span><strong>E-mail: someone@example.com</strong></span>
                    <br/>
                    <span><strong>Phone: +234 (0)8000000000</strong></span>
                </div>
            </div>
            <div className="prescriptions">
                <div className="prescription-headers">
                    <p><strong>Medicine</strong></p>
                    <p><strong>Description</strong></p>
                </div>
                <div className="prescriptions-items">
                    <p><strong>Paracetamol</strong></p>
                    <textarea></textarea>
                </div>
            </div>
            <div className="prescription-info">
                <p>Name: Muhammad</p>
                <p>Signature: <span>SASS</span></p>    
            </div>
        </div> 
    );
}
 
export default Prescrption;