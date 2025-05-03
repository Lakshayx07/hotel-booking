import './Hero.css';
import Guests from './Guests';
import Date from './Date'
import Location from './Location'
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='hero'>
          <div className='hero-container'>
            <h1>Start your journey with us</h1>
            <p>Find what makes you happy anytime, anywhere</p>
            <div className='hero-search-container'>
                <div className='hero-search'>
                    <div className='hero-wrapper'>
                        <Location/>
                        <Date/>
                        <Guests/>
                       
                        <Link to='/hotels'>
                        <div className='search-button'>
                            <button>Search</button>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )
    
}

export default Hero
