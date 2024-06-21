import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Event from './Pages/Event.jsx';

const App = () => {
  return (
    <Router>
      <div className="landing-page-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path='/Events' element={<Event/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
