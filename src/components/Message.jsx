/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
const Message = ({messageType, errorMssg, control}) => {
    const [width, setWidth] = useState(100)
    const interval = setInterval(() => {

    }, )
    return ( 
        <div className="mssg absolute top-0 left-0 z-50  bg-err-bg w-115 text-err-border" style={{width: '95%', border: '1px solid #ec2727', borderRadius: '10px'}}>
            <div className="flex justify-between  p-2">
                <span><strong>{messageType}!</strong></span>
                <p className="hover:cursor-pointer" onClick={control}>X</p>
            </div>
            <p className="pt-2">{errorMssg}</p>
            <div style={{ width: `${width}%`, height: '10px',  transition: 'width linear 0.1s', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}} className="bg-err-border"></div>
        </div> 
    );
}
 
export default Message;