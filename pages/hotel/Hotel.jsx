import { useParams } from 'react-router-dom'
import './hotel.css'
import { allHotels, facilities, rooms } from '../../data'
import Navbar from '../../Components/Navbar/Navbar'
import {FaMapLocationDot} from 'react-icons/fa6'
import {GiDoubleStreetLights} from 'react-icons/gi'
import {MdPool} from "react-icons/md";
import {FaCity} from 'react-icons/fa'
import { TbParkingCircle} from "react-icons/tb";
import Footer from '../../Components/Footer/Footer'
import { useState } from 'react'


function Hotel() {

    const [open , setOpen] = useState(false)
    const [sliderNumber, setSliderNumber] = useState(0)

    const handleOpen = (i) => {
        setSliderNumber(i)
        setOpen(true)
    }
    const handleMove = (direction) => {
        let newSlideNumber

        if (direction === '1'){
            newSlideNumber = sliderNumber === 0 ? 5:sliderNumber -1
        }else{
            newSlideNumber = sliderNumber === 5 ? 0:sliderNumber +1
        }
        setSliderNumber(newSlideNumber)
    }

    const {id} = useParams()
    
    const hotel = allHotels.find((hotel)=> hotel.id === parseInt(id))

  return (
    <div>
        <Navbar/>

        <div className='hotel-container'>
    {open&&(
        <div className='slider'>
            <FaCircleXmark className='close' onClick={()=> setOpen(false)}/>
            <FaCircleArrowLeft className='arrow' onClick={()=> handleMove('1')}/>
            <div className='slider-wrapper'>
                <img src={rooms[sliderNumber].image} alt='' className='slider-img'/>
            </div>
            <FaCircleArrowRight className='arrow' onClick={() => handleMove('r')}/>
        </div>
    )}
            <div className='hotel-wrapper'>
                <h1 className='hotel-titles'>{hotel.title}</h1>
                <div className='hotel-location'>
                    <FaMapLocationDot/>
                    <span>{hotel.location}</span>
                </div>
                <span className='hotel-distance'>Excellent location - 500m from center</span>
                <span className='hotel-price'>Enjoy a comfortable stay starting at ${hotel.price} per night</span>

                <div className='hotel-images'>
                    {rooms.map((room,i)=>(
                        <div key={i} className='hotel-images-wrapper'>
                            <img src={room.image} alt='' className='hotel-img' onClick={() => handleOpen(i)}/>
                        </div>
                    ))}
                </div>
                <div className='hotel-details'>
                    <div className='hotel-details-text'>
                        <h1 className='hotel-title'>About this hotel</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dolore blanditiis nulla odio officia beatae repellat laborum ullam maxime expedita deserunt libero, magni quidem sequi porro veniam quae! Ducimus, blanditiis.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur accusantium fugit ab? Eum qui neque consectetur dolor esse unde obcaecati nesciunt voluptatem numquam dignissimos vero recusandae expedita similique, aliquam voluptate?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae maiores eaque ratione esse, asperiores similique doloremque fugiat rerum hic. Enim commodi dolor modi aut officia a et sapiente id.
                        </p>

                        <div className='hotel-facilities'>
                            <h1 className='hotel-facilities-title'>Hotel Facilities</h1>
                            <div className='facilities'>
                                {facilities.map((facilitie)=>(
                                    <div key={facilitie.id} className='facilitie'>
                                        <span className='facilitie-icon'>{facilitie.icon}</span>
                                        <span>{facilitie.title}</span>
                                    </div>
                
                                ))}

                            </div>

                        </div>
                    </div>

                    <div className='hotel-highlights'>
                        <h1>Hotel highlights</h1>
                        <h4>Perfect for a 4-night Stay!</h4>
                        <span>Located in the real heart of kroakow , this property has an 
                            Excellent location score of 9.8!
                        </span>
                        <h4>Breakfast info</h4>
                        <span>Continental , Fresh , Indulgent , Protein-packed , Savory, Gourment</span>
                        <ul>
                            <li>
                                <GiDoubleStreetLights /> Quiet street view
                            </li>
                            <li>
                                <MdPool /> Pool with a view
                            </li>
                            <li>
                                <FaCity/> City view
                            </li>
                            <li>
                                <TbParkingCircle /> Free Parking
                            </li>
                        </ul>
                        <button>Book Now!</button>
                    </div>


                </div>
            </div>
        </div>
        <Footer/>
      
    </div>
  )
}

export default Hotel
