import './AllHotels.css'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/hero/Hero'
import FilterBar from './FilterBar'
import { allHotels } from '../../Data'
import {HiOutlineSquares2X2} from 'react-icons/hi2'
import {BsGrid3X2Gap} from 'react-icons/bs'
import Hotels from '../../Components/hotels/Hotels'
import Footer from '../../Components/Footer/Footer'

function AllHotels() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FilterBar/>
      <div className='allhotels-items'>
        <h2 className='allhotels-heading'>{allHotels.length} Hotel Found</h2>
        <div className='allhotels-icons'>
            <HiOutlineSquares2X2/>
            <BsGrid3X2Gap/>
        </div>
      </div>

      <Hotels hotels={allHotels}/>
      <Footer/>
    </div>
  )
}

export default AllHotels
