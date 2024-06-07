import { Link } from "react-router-dom";
const Unknown = () => {
    return ( 
    <div className="404">
        Oops! THE PAGE YOU ARE LOOKIN FOR DOES NOT EXIST. <br/> <Link to='/' className="text-blue-500 underline">HOMEPAGE</Link>
    </div> );
}
 
export default Unknown;