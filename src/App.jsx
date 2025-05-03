import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from '../Components/home/Home';
import AllHotels from '../pages/allhotels/AllHotels';
import Hotel from '../pages/hotel/Hotel';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<AllHotels/>}/> 
        <Route path='/hotels/:id' element={<Hotel/>}/>
      </Routes>
    </Router>
  )
}

export default App;

