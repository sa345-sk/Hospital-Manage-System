/* eslint-disable react/prop-types */
const Message = ({messageType, errorMssg, control}) => {
    return ( 
        <div className="mssg absolute top-0 left-0 z-50 m-5 bg-err-bg w-115 text-err-border p-2" style={{width: '95%', border: '1px solid #ec2727', borderRadius: '10px'}}>
            <div className="flex justify-between">
                <span><strong>{messageType}!</strong></span>
                <p className="hover:cursor-pointer" onClick={control}>X</p>
            </div>
            <p className="pt-2">{errorMssg}</p>
        </div> 
    );
}
 
export default Message;