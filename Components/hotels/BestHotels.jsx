import React from 'react'
import Hotels from './Hotels';
import {hotels} from '../../Data'

function BestHotels() {
  return (
    <Hotels hotels={hotels} heading='Best Hotels'/>
  )
}

export default BestHotels
