import Navbar from "./components/Navbar";
const Profile = () => {
    return ( 
    <div className="profile">
      <Navbar title="User Profile"/>
      <div className="profile_content flex flex-row flex-wrap m-ma w-op h-fit mt-5">
        <div className="update_profile w-4/6 shadow bg-white ">
          <h3 className="text-2xl">Edit Profile</h3>
          <form>          
            <label  style={{gridArea: 'company-1'}}>Company (DISABLED)</label>
              <input type="text" defaultValue="Hospital" disabled className="hover:cursor-not-allowed" style={{ gridArea: 'company-2' }} />
            <label style={{gridArea: 'username-1'}}>Username</label>
              <input className="" type="text" style={{ gridArea: 'username-2'}} />
            <label style={{gridArea: "email-1"}}>Email Address</label>
              <input className="" type="email" style={{ gridArea: 'email-2' }} />
            <label style={{gridArea: "f-name-1"}}>First Name</label>
              <input className="" type="text" style={{ gridArea: 'f-name-2' }} />
            <label style={{gridArea: "s-name-1"}}>Second Name</label>
              <input className="" type="text" style={{ gridArea: 's-name-2' }} />
            <label style={{gridArea: "address-1"}}>Address</label>
              <input className="" type="text" style={{ gridArea: 'address-2', width: '94%' }} />
            <label style={{gridArea: "city-1"}}>City</label>
              <input className="" type="text" style={{ gridArea: 'city-2' }} />
            <label style={{gridArea: "country-1"}}>Country</label>
              <input className="" type="text" style={{ gridArea: 'country-2' }} />
            <label style={{gridArea: "pc-1"}}>Postal Code</label>
              <input placeholder="Zip Code" className="" type="number" style={{ gridArea: 'pc-2'}} />
            <label style={{gridArea: "about-1"}}>About Me</label>
              <textarea style={{ gridArea: 'about-2',height: '95px' }}></textarea>
            <button style={{gridArea: "btn"}} className="bg-blue-500 w-32">Update Profile</button>
          </form>
        </div>
        <div className="profile_details">
         
        </div>
      </div>
    </div> );
}
 
export default Profile;