import { IoCalendarOutline } from 'react-icons/io5';
import {BsArrowRight} from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react';



function Date() {

    const [StartDate,setStartDate]= useState(null)
    const [endDate,setEndDate]= useState(null)

  return (
    <div className="date">
        <div className="check-in">
        <IoCalendarOutline size={24} color="blue" />
            <div className='date-content'>
                <label>Check-In</label>
                <DatePicker selected={StartDate}
                onChange={(date)=> setStartDate(date)}
                selectsStart
                startDate={StartDate}
                endDate={endDate}
                placeholderText='Add Date'
                dateFormat='MM/dd/yyyy'
                className='add-date'
                />
            </div>
        </div>

        <span>
            <BsArrowRight/>
        </span>

        <div className="check-out">
            <IoCalendarOutline className='date-icon'/>
            <div className='date-content'>
                <label>Check-Out</label>
                <DatePicker selected={endDate}
                onChange={(date)=> setEndDate(date)}
                selectsStart
                startDate={StartDate}
                endDate={endDate}
                minDate={StartDate}
                placeholderText='Add Date'
                dateFormat='MM/dd/yyyy'
                className='add-date'
                />
            </div>
        </div>

    </div>
  )
}

export default Date
