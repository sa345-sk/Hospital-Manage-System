import Navbar from "./components/Navbar";
const Home = () => {
    return ( 
    <div className="home">
        <Navbar title="Hospital Management System"/>
        <div className="text-center text-3xl">
            <h2>Welcome, to <strong>Hospital Management System!</strong></h2>
        </div>
            <p className="m-2 text-1.5">Only <strong>Authenticated</strong> Officials can login.</p>
       <div className="login">
         <form>
            <input type="text" required/>
            <input type="password" required/>
            <button>Login</button>
         </form>
       </div>      
    </div> 
);
}
 
export default Home;