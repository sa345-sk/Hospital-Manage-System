/* eslint-disable react/prop-types */
import { useState } from "react"
const Message = ({messageType, errorMssg, control}) => {
    let [width, setWidth] = useState(100)
    const callTimer = setInterval(() => {
        if (width != 0) {
            let c = width -= 25
            setWidth(c)
        } else clearInterval(callTimer)
    },  800)
    return ( 
        <div className="mssg absolute top-0 left-0 z-50  bg-err-bg w-115 text-err-border" style={{width: '95%', border: '1px solid #ec2727', borderRadius: '10px'}}>
            <div className="flex justify-between  p-2">
                <span><strong>{messageType}!</strong></span>
                <p className="hover:cursor-pointer" onClick={control}>X</p>
            </div>
            <p className="pt-2">{errorMssg}</p>
            <div style={{ width: `${width}%`, height: '10px',  transition: 'all ease-in 0.4s 0.3s', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}} className="bg-err-border"></div>
        </div> 
    );
}
 
export default Message;