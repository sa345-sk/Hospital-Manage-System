import Navbar from "./components/Navbar";
const Home = () => {
    return ( 
    <div className="home h-hv main-footer">
        <Navbar title="Hospital Management System"/>
        <div className="text-center text-3xl home-header">
            <h2>Welcome, to <strong>Hospital Management System!</strong></h2>
        </div>
            <p className="m-2 text-1.5 home-auth">Only             <strong>Authenticated</strong> Officials can login.</p>
            <p>Manage <strong>Effectively</strong> and <strong>Efficiently.</strong></p>
       <div className="login bg-orange-500 w-100 m-ma" style={{height: '300px'}}>
            <form className="flex w-full h-full flex-row flex-wrap p-1">        
                <input type="text" required className="w-75 m-ma mt-1 r-5 outline-none" placeholder="Email or Username" style={{height: '40px'}}/>
                <input type="password" required className="w-75 m-ma  r-5 outline-none" placeholder="Password" style={{ height: '40px' }} />
                <button className="w-75 m-ma bg-blue-500 border-none" style={{height: '40px'}}>Login</button>
                <p className="pl-6  text-blue-700 hover:cursor-pointer">Forgot password?</p>
            </form>
       </div>      
    </div> 
);
}
 
export default Home;