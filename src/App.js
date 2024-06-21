import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './index.css';
import Home from './Pages/Home.jsx'
import Navbar from  "./components/Navbar.js"
import About from './Pages/About.jsx';
import Homesection2 from './components/Homesection2.jsx';
import Contact from './Pages/Contact.jsx'
import Sports from './Pages/Sports.js';
import Ayurveda from './Pages/Ayurveda.js';
import Global from './Pages/Global.js';
const App = () => {
  return (
    <Router>
      {/* <div className=""> */}
        <Navbar/>
          {/* <Homesection2 /> */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/sports" element={<Sports/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/ayurveda" element={<Ayurveda/>}/>
          <Route path="/Global" element={<Global/>}/>
        </Routes>
       {/* </div> */}
    </Router>
  );
};

export default App;