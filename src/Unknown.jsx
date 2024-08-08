import { Link } from "react-router-dom";
const Unknown = () => {
    return ( 
        <div className="404 w-3/4 m-ma text-3xl h-full main-footer">
        Oops! THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST. <br/> <Link to='/' className="text-blue-500 underline">HOMEPAGE</Link>
    </div> );
}
 
export default Unknown;