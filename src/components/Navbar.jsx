/* eslint-disable react/prop-types */
const Navbar = ({title}) => {
    return (<div className="dashboard-nav w-full h-16 flex justify-between bg-zinc-200" style={{ borderBottom: '1px solid #929292' }}>
        <div className="nav-1 flex w-fit items-center">
            <h2 className="p-1 text-3xl hover:cursor-pointer defaultc">{title}</h2>
            <p className="p-1 hover:cursor-pointer">Notification</p>
        </div>
        <div className="nav-1 flex items-center w-fit">
            <h3 className="p-1 hover:cursor-pointer">Account</h3>
            <p className="p-1 hover:cursor-pointer">Logout</p>
        </div>
    </div> );
}
 
export default Navbar;