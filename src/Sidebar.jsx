import { Link } from "react-router-dom" 
const Sidebar = () => {
    return (
        <div className="sidebar w-64 h-screen fixed">
            <div className="ss h-full">
            <div className="sidebar-title w-full h-14 text-center pt-3 text-2xl ">
                Dashboard
            </div>
                <div className="w-full p-4">
                    <Link to='/'><div className=" w-52 p-4 hover:bg-div-h text-main" style={{ borderRadius: '5px' }}>Reports & Analytics</div></Link>
                    <Link to='/patientmanagement'><div className=" w-52 p-4 hover:bg-div-h text-main" style={{ borderRadius: '5px' }}>Patient Management</div></Link>
                    <Link to='/billinginvoicing'><div className=" w-52 p-4 hover:bg-div-h text-main" style={{ borderRadius: '5px' }}>Billing & Invoicing</div></Link>
                    <Link to='/staffmanagement'><div className="w-52 p-4 hover:bg-div-h text-main" style={{ borderRadius: '5px' }}>Staff Management</div></Link>
                    <Link to='/userprofile'><div className="w-52 p-4 hover:bg-div-h text-main" style={{ borderRadius: '5px' }}>User Profile</div></Link>
                </div>
                <div className="mt-64 ml-4 text-main mr-3 w-52 p-1" style={{ backgroundColor: 'rgba(203, 213, 225, 0.2)', borderRadius: '5px'}}>© {new Date().getFullYear()} All Rights Reserved.</div>
                </div>
        </div>
    )
}
export default Sidebar;