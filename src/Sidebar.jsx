import { Link, useLocation } from "react-router-dom" 
const Sidebar = () => {
    const location = useLocation()
    const style = {
        analytics: location.pathname == '/' ? 'bg-div-h':'',
        patientManagement: location.pathname == '/patientmanagement'? 'bg-div-h':'',
        billingInvoicing: location.pathname == '/billinginvoicing'? 'bg-div-h': '',
        staffManagement: location.pathname == '/staffmanagement'? 'bg-div-h': '',
        userProfile: location.pathname == '/userprofile'? 'bg-div-h': '',
        schedule: location.pathname == '/schedule'? 'bg-div-h': '',
        inventoryManagenmt: location.pathname == '/inventorymanagement'? 'bg-div-h': '',
        prescription: location.pathname == '/prescription'? 'bg-div-h': '',
    }
    return (
        <div className="sidebar h-screen fixed w-64 ">
            <div className="ss h-full">
                <div className="sidebar-title w-full h-14 text-center pt-3 text-2xl">
                    Dashboard
                </div>
                <div className="sidebar-container">
                    <div className="w-full p-4 sidebar-links">
                        <Link to='/'><div className={`w-52 p-4 hover:bg-div-h text-main ${style.analytics} mb-1`} style={{ borderRadius: '5px' }}>Reports & Analytics</div></Link>
                        <Link to='/patientmanagement'><div className={`w-52 p-4 hover:bg-div-h text-main mb-1 ${style.patientManagement}`} style={{ borderRadius: '5px' }}>Patient Management</div></Link>
                        <Link to='/billinginvoicing'><div className={`w-52 p-4 hover:bg-div-h text-main mb-1 ${style.billingInvoicing}`} style={{ borderRadius: '5px' }}>Billing & Invoicing</div></Link>
                        <Link to='/staffmanagement'><div className={`w-52 p-4 hover:bg-div-h text-main mb-1 ${style.staffManagement}`} style={{ borderRadius: '5px' }}>Staff Management</div></Link>
                        <Link to='/userprofile'><div className={`w-52 p-4 hover:bg-div-h text-main mb-1 ${style.userProfile}`} style={{ borderRadius: '5px' }}>User Profile</div></Link>
                        <Link to='/schedule'><div className={`w-52 p-4 hover:bg-div-h text-main mb-1 ${style.schedule}`} style={{ borderRadius: '5px' }}>Schedules</div></Link>
                        <Link to='/inventorymanagement'><div className={`w-52 p-4 hover:bg-div-h text-main mb-1 ${style.inventoryManagenmt}`} style={{ borderRadius: '5px' }}>Inventory Management</div></Link>
                        <Link to='/prescription'><div className={`w-52 p-4 hover:bg-div-h text-main mb-1 ${style.prescription}`} style={{ borderRadius: '5px' }}>Prescription</div></Link>
                    </div>
                </div>
                <div className="ml-4 text-main mr-3 w-52 p-1 copyright" style={{ backgroundColor: 'rgba(203, 213, 225, 0.2)', borderRadius: '5px'}}>© {new Date().getFullYear()} All Rights Reserved.</div>
            </div>
        </div>
    )
}
export default Sidebar;