import { Link } from 'react-router-dom';
import './Navbar.css'
import { BiSolidPlaneAlt } from 'react-icons/bi';

function Navbar() {
    return (
        <>
            <div className='navbar'>
                <div className='navbar-container'>
                    <Link to='/'>
                    <div className='navbar-logo'>
                        <BiSolidPlaneAlt/>
                        <span>Rise of Code</span>
                    </div></Link>

                    <Link to='/hotels'><div>
                        <button className='navbar-button'>Book Now</button>
                    </div></Link>
                </div>
            </div>

        </>
 
    );
}

export default Navbar