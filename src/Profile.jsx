/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar"
import profile_img from './img/IMG_20240216_172241.jpg'
import s from './img/sidebar-3.jpg'
import {useState} from 'react'
const Profile = () => {
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [aboutMe, setAboutMe] = useState('')
    return ( 
    <div className="profile main-footer">
      <Navbar title="User Profile"/>
      <div className="profile_content flex flex-row flex-wrap m-ma w-op h-fit mt-5">
        <div className="update_profile w-fit shadow bg-white ">
          <h3 className="text-2xl ml-4 mt-3">Edit Profile</h3>
          <form className="w-full h-3/4">          
            <label  style={{gridArea: 'company-1'}}>Company (DISABLED)</label>
              <input type="text" defaultValue="Hospital" disabled className="hover:cursor-not-allowed" style={{ gridArea: 'company-2' }} />
            <label style={{gridArea: 'username-1'}}>Username</label>
              <input className="" type="text" style={{ gridArea: 'username-2' }} onChange={(e) => setUserName(e.target.value)} />
            <label style={{gridArea: "email-1"}} >Email Address</label>
              <input className="" type="email" style={{ gridArea: 'email-2' }} onChange={(e) => setEmail(e.target.value)} />
            <label style={{gridArea: "f-name-1"}}>First Name</label>
              <input className="" type="text" style={{ gridArea: 'f-name-2' }} onChange={(e) => setFirstName(e.target.value)}/>
            <label style={{gridArea: "s-name-1"}}>Second Name</label>
              <input className="" type="text" style={{ gridArea: 's-name-2' }} onChange={(e) => setSecondName(e.target.value)}/>
            <label style={{gridArea: "address-1"}}>Address</label>
              <input className="" type="text" style={{ gridArea: 'address-2', width: '94%' }} onChange={(e) => setAddress(e.target.value)}/>
            <label style={{gridArea: "city-1"}}>City</label>
              <input className="" type="text" style={{ gridArea: 'city-2' }} onChange={(e) => setCity(e.target.value)}/>
            <label style={{gridArea: "country-1"}}>Country</label>
              <input className="" type="text" style={{ gridArea: 'country-2' }} onChange={e => setCountry(e.target.value)}/>
            <label style={{gridArea: "pc-1"}}>Postal Code</label>
              <input placeholder="Zip Code" className="" type="number" style={{ gridArea: 'pc-2'}} onChange={e => setPostalCode(e.target.value)}/>
            <label style={{gridArea: "about-1"}}>About Me</label>
              <textarea style={{ gridArea: 'about-2',height: '95px', resize: 'none' }} onChange={e => setAboutMe(e.target.value)}></textarea>
            <button style={{gridArea: "btn"}} className="bg-blue-500 w-32">Update Profile</button>
          </form>
        </div>
        <div className="profile_details bg-white shadow">
         <div className="profile_images" style={{backgroundImage: `url(${s})`}}>
              <div className="img" style={{backgroundImage: `url(${profile_img})`}}></div>
         </div>
            <div className="profile_info mt-14 w-full text-center" style={{lineHeight: '2'}}>
             <h4 className="text-blue-500">{firstName} {secondName}</h4>
             <p>{username}</p>
              <p>{`"${aboutMe}"`}</p>
           </div>
           <div className="social_info w-full mt-5 p-5">
              Email: {email}
             <br/>
             Phone: 123456789101
           </div>
        </div>
      </div>
    </div> 
    );
}
 
export default Profile   