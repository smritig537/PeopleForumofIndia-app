import React from 'react';
// import './App.css'; // Import your CSS file for styling
import img from '../images/logo.png';
import { Link } from 'react-router-dom';
import Ham from "../images/ham.png"
import "./Navbar.css"
import { useLocation } from 'react-router-dom';
function Navbar() {
        const location = useLocation();
        const isHomePage = location.pathname === "/";
        console.log(isHomePage);
  return (
    // <nav className='h-[100px]'>
    // <div className='Container'>
    // <img src={img} alt="img" className='LOGO'/>
    //   <ul className='List'>
    //     <li><a href="#home">Home</a></li>
    //     <li><a href="#about">About</a></li>
    //     <li><a href="#team">Our Team</a></li>
    //     <li><a href="#services">Services</a></li>
    //     <li><a href="#membership">Membership</a></li>
    //     <li><a href="#contact">Contact</a></li>
    //   </ul>
    //   </div>
    // </nav>

    <div className='overflow-x-hidden'>
    <header className={`w-[100%] overflow-y-hidden  ${isHomePage ? '' : 'bg-[#049372]'}  overflow-x-hidden  h-[100px] m-auto`}>
     
    <div class={`flex justify-between w-[100%] h-[100px] items-center`}>
    
        <img src={img} className='h-[200px] w-[200px] mt-8' alt="Pokemon Logo" />
        <input type="checkbox" id="checkbox" />
  <label htmlFor="checkbox" className='checkbtn'>   
<img src={Ham} className='h-[100px] w-[100px]' />
  </label>  
        <ul className={`nav-list  `}>
        <Link to="/" className={`nav-list-item text-xl ${isHomePage ? 'text-[#049372]' : ''}  text-black font-semibold mr-8 hover:bg-[#36D7B7] rounded-xl p-2 text-white`}>Home</Link>
        <Link to="/about" className={`nav-list-item text-xl ${isHomePage ? 'text-[#049372]' : ''} text-black font-semibold mr-8 hover:bg-[#36D7B7] rounded-xl p-2 text-white`}>About</Link>     
        {/* <Link to="/Agriculture" className='mr-8 nav-list-item text-xl font-semibold text-white hover:bg-[#36D7B7] rounded-xl p-2'>Agriculture</Link> */}
        <Link to="/Ayurveda" className={`mr-8 nav-list-item ${isHomePage ? 'text-[#049372]' : ''} text-xl font-semibold text-white hover:bg-[#36D7B7] rounded-xl p-2`}>Sports & Ayurveda</Link>
        <Link to="/contactus" className={`nav-list-item text-xl ${isHomePage ? 'text-[#049372]' : ''} text-white font-semibold mr-8 hover:bg-[#36D7B7] rounded-xl p-2`}>Contact Us</Link>
        </ul>
    </div>
</header>
    </div>
  );
}

export default Navbar;








// import React from 'react';
// import './App.css';
// import { Link } from 'react-router-dom'; // If you're using React Router for navigation

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <Link className="navbar-brand" to="/">Home</Link>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="ml-auto navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">About</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/our-team">Our Team</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/services">Services</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/membership">Membership</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
