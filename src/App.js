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
        
        </Routes>
          <Footer />
       {/* </div> */}
    </Router>
  );
};

export default App;