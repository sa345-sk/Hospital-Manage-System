import {Link} from 'react-router-dom'
const Footer = () => {
    let date = new Date()
    return ( 
        <div className='flex justify-between h-14 p-2 bg-indigo-200' style={{ borderTop: '1px solid #c3c3c3', color: '#afafaf'}} id='footer'>
       <div className='flex' style={{ alignItems: 'center'}}>
         <Link to='/home' className='footer-links'>Home</Link>
         <Link to='#' style={{marginLeft: '10px', marginRight: '10px'}} className='footer-links'>Portfolio</Link>
         <Link to='#' className='footer-links'>Blog</Link>
       </div>
       <div style={{ alignItems: 'center'}}>
            <p>&copy;{date.getFullYear()} <span className='text-blue-500'>Hospital Management System</span>, Manage Effectively and Efficiently</p>
       </div>
    </div> );
}
 
export default Footer;