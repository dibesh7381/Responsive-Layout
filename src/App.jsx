// App.js
import React from 'react';
import CustomCard from './CustomeCard'
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import ImageSlider from './ImageSlider';
import AboutUsPage from './About';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './ContactPage';
import Accordion from './Accrodian';
function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<LandingPage/> }/>
          <Route path='/feature' element={<AboutUsPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/about' element={<Accordion/>}/>
      </Routes>
    </div>
  );
}

export default App;

