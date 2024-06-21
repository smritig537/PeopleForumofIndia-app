import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './index.css';
import Home from './Pages/Home.jsx'
import Navbar from  "./components/Navbar.js"
import About from './Pages/About.jsx';
import Homesection2 from './components/Homesection2.jsx';
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
          {/* <Homesection2 /> */}
       {/* </div> */}
    </Router>
  );
};

export default App;
