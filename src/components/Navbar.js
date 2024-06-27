import React from 'react';
// import './App.css'; // Import your CSS file for styling
import img from '../images/logo.png';
import { Link } from 'react-router-dom';
function Navbar() {
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
    <div>
    <header className='w-[80%] overflow-y-hidden  h-[100px] m-auto '>
    <div class="nav flex justify-between w-[100%] items-center ">
        <img src={img} className='h-[200px] w-[200px] mt-8' alt="Pokemon Logo" />
        <div className=''>
        <Link to="/" className='text-2xl text-black font-semibold mr-8 hover:bg-[#d6924d] rounded-xl p-2'>Home</Link>
        <Link to="/about" className='text-2xl text-black font-semibold mr-8 hover:bg-[#d6924d] rounded-xl p-2'>About</Link>
        <Link to="/Sports" className='mr-8 text-2xl font-semibold text-white hover:bg-[#d6924d] rounded-xl p-2'>Sports Medicine</Link>
        <Link to="/Ayurveda" className='mr-8 text-2xl font-semibold text-white hover:bg-[#d6924d] rounded-xl p-2'>Sports & Ayurveda</Link>
        <Link to="/Global" className='mr-8 text-2xl font-semibold text-white hover:bg-[#d6924d] rounded-xl p-2'>Global Wellness City</Link>
        <Link to="/contactus" className='text-2xl text-black font-semibold mr-8 hover:bg-[#d6924d] rounded-xl p-2'>Contact Us</Link>
        </div>
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
