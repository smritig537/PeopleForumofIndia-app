import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './index.css';
import Home from './Pages/Home.jsx'
import Navbar from  "./components/Navbar.js"
import About from './Pages/About.jsx';
import Homesection2 from './components/Homesection2.jsx';
import Contact from './Pages/Contact.jsx'
import Footer from './components/Footer.jsx';
import Contactus from './Pages/Contactus.jsx';
import Sports from './Pages/Sports.js';
import Ayurveda from './Pages/Ayurveda.js';
import Wellness from './Pages/Wellness.jsx';
// import Global from './Pages/Global.js';
import Team from './Pages/Team.jsx';
import Business from './Pages/Business.jsx';
import Agriculture from './Pages/Agriculture.jsx';
const App = () => {
 
  return (

    <Router>
      {/* <div className=""> */}
        <Navbar />
          {/* <Homesection2 /> */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sports" element={<Sports/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/ayurveda" element={<Ayurveda/>}/>
          <Route path="/agriculture" element={<Agriculture/>}/>
          <Route path="/wellness" element={<Wellness/>}/>
          <Route path="/business" element={<Business/>}/>
        </Routes>
          <Footer />
       {/* </div> */}
    </Router>
  );
};

export default App;