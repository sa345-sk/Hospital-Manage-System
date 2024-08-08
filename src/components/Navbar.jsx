/* eslint-disable react/prop-types */
const Navbar = ({title, control}) => {
    return (<div className="nav w-full h-16 flex justify-between bg-zinc-200" style={{ borderBottom: '1px solid #929292' }}>
        <div className="nav-1 flex w-fit items-center nav-header">
            <h2 className="p-1 text-3xl hover:cursor-pointer defaultc">{title}</h2>
            <p className="p-1 hover:cursor-pointer" >Notifications</p>
        </div>
        <div className="nav-1 flex items-center w-fit p-1">
            <p className="p-1 hover:cursor-pointer">Logout</p>
            <div className="sidebar-button" onClick={control}></div>
        </div>
    </div> );
}
 
export default Navbar;