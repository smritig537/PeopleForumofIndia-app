// import React from 'react';
// // import './App.css'; // Import your CSS file for styling
// import img from '../images/logo.png';
// import { Link } from 'react-router-dom';
// import Ham from "../images/ham.png"
//  import "./Navbar.css"
// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useRef } from 'react';
// function Navbar() {
//         const location = useLocation();
//         const isHomePage = location.pathname === "/";
//         console.log(isHomePage);
//         const [isMenuOpen, setIsMenuOpen] = useState(false);
//                          const handleClick = () => {
//                           setIsMenuOpen(!isMenuOpen);
//                                 if (!isMenuOpen) {
//                 document.body.classList.add('body-overflow-hidden');
//                 console.log("hidden");
//                 document.body.classList.remove('toggle');
//             } else {
//                 document.body.classList.remove('body-overflow-hidden');
//                 console.log("removed hidden");
            
//                 document.body.classList.add('toggle');
//                          }
        // const toggleMenu = () => {
        //     setIsMenuOpen(!isMenuOpen);
    
           
        //     if (!isMenuOpen) {
        //         document.body.classList.add('body-overflow-hidden');
        //         console.log("hidden");
        //         document.body.classList.remove('toggle');
        //     } else {
        //         document.body.classList.remove('body-overflow-hidden');
        //         console.log("removed hidden");
            
        //         document.body.classList.add('toggle');
        //     }
        // };
        // const handleClick = () =>{
        //         setIsMenuOpen(false);
        //         document.body.classList.remove('body-overflow-hidden');
        // }
// const navRef = useRef();

	// const showNavbar = () => {
	// 	navRef.current.classList.toggle(
	// 		"responsive_nav"
	// 	);
	// };

//   return (
//     <div className='overflow-x-hidden'>
//     <header className={`w-[100%] overflow-y-hidden  ${isHomePage ? '' : 'bg-[#049372]'}  overflow-x-hidden  h-[100px] m-auto`}>
     
//     <div class={`flex justify-between w-[100%] h-[100px] items-center`}>
    
//         <img src={img} className='h-[200px] w-[200px] mt-8' alt="Pokemon Logo" />
//        {/* <input type="checkbox" id="checkbox" />  */}
//    {/* <label htmlFor="checkbox" className='checkbtn'  >      */}
// <img src={Ham} className='h-[100px] w-[100px] ' onClick={handleClick}  />
//   {/* </label>   */}
//         <ul className={`nav-list toggle`}>
//         <Link to="/" className={`nav-list-item text-xl ${isHomePage ? 'text-[#049372]' : ''}   font-semibold mr-8 hover:bg-[#36D7B7] rounded-xl p-2 `}>Home</Link>
//         <Link to="/about" className={`nav-list-item text-xl ${isHomePage ? 'text-[#049372]' : ''}  font-semibold mr-8 hover:bg-[#36D7B7] rounded-xl p-2 `}>About</Link>     
//         {/* <Link to="/Agriculture" className='mr-8 nav-list-item text-xl font-semibold text-white hover:bg-[#36D7B7] rounded-xl p-2'>Agriculture</Link> */}
//         <Link to="/Ayurveda" className={`mr-8 nav-list-item ${isHomePage ? 'text-[#049372]' : ''} text-xl font-semibold hover:bg-[#36D7B7] rounded-xl p-2`}>Sports & Ayurveda</Link>
//         <Link to="/contactus" className={`nav-list-item text-xl ${isHomePage ? 'text-[#049372]' : ''}  font-semibold mr-8 hover:bg-[#36D7B7] rounded-xl p-2`}>Contact Us</Link>
//         </ul>
//     </div>
// </header>
//     </div>
//   );
// }











// // export default Navbar;

// import { FaBars, FaTimes } from "react-icons/fa";


// function Navbar() {
// 	const navRef = useRef();

// 	const showNavbar = () => {
// 		navRef.current.classList.toggle(
// 			"responsive_nav"
// 		);
// 	};

// 	return (
// 		<header>
// 			<h3>LOGO</h3>
// 			<nav ref={navRef}>
// 				<a href="/#">Home</a>
// 				<a href="/#">My work</a>
// 				<a href="/#">Blog</a>
// 				<a href="/#">About me</a>
// 				<button
// 					className="nav-btn nav-close-btn"
// 					onClick={showNavbar}>
// 					<img src={Ham} />
// 				</button>
// 			</nav>
// 			<button
// 				className="nav-btn"
// 				onClick={showNavbar}>
// 				<img src={Ham} />
// 			</button>
// 		</header>
// 	);
// }


// export default Navbar
import React from 'react'
// import './App.css'; // Import your CSS file for styling
import img from '../images/logo.png';
import { Link } from 'react-router-dom';
import Ham from "../images/ham.png"
 import "./Navbar.css"
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';
function Navbar() {
 
  const location = useLocation();
          const isHomePage = location.pathname === "/";
  //         console.log(isHomePage);
          const [isMenuOpen, setIsMenuOpen] = useState(false);
          //                  const handleClick = () => {
          //                   setIsMenuOpen(!isMenuOpen);
          //                   if(list){

          //                     if (!isMenuOpen) {
          //                       document.body.classList.remove('body-overflow-hidden');
          //     console.log("hidden");          
          //     list.classList.remove('toggle');
            
          // } else {
            
          //     console.log("removed hidden");
          //     document.body.classList.add('body-overflow-hidden');
          //     list.classList.add('toggle');
          //              }}else{
          //               console.log("list doesn't exist");
          //              }
          //                   }
          const handleClick = () => {
            setIsMenuOpen(!isMenuOpen);
        }
    
        useEffect(() => {
            // Accessing DOM element using ref after component is mounted
            // const list = listRef.current;
            let list  = document.querySelector("ul");
            console.log(list);
            if (list) {
                if (!isMenuOpen) {
                    document.body.classList.remove('body-overflow-hidden');
                    console.log("hidden");
                    list.classList.remove('toggle');
                } else {
                    console.log("removed hidden");
                    document.body.classList.add('body-overflow-hidden');
                    list.classList.add('toggle');
                }
            }
        }, [isMenuOpen]); // Effect runs when isMenuOpen changes
    
  //         const toggleMenu = () => {
  //             setIsMenuOpen(!isMenuOpen);
      
             
  //             if (!isMenuOpen) {
  //                 document.body.classList.add('body-overflow-hidden');
  //                 console.log("hidden");
  //                 document.body.classList.remove('toggle');
  //             } else {
  //                 document.body.classList.remove('body-overflow-hidden');
  //                 console.log("removed hidden");
              
  //                 document.body.classList.add('toggle');
  //             }
  //         };
          // const handleClick = () =>{
          //         setIsMenuOpen(false);
          //         document.body.classList.remove('body-overflow-hidden');
          // }
  return (
        <div className='overflow-x-hidden'>
        <header className={`w-[100%] overflow-y-hidden  ${isHomePage ? '' : 'bg-[#049372]'}  overflow-x-hidden  h-[100px] m-auto`}>
         
        <div class={`flex justify-between w-[100%] h-[100px] items-center`}>
        
            <img src={img} className='h-[200px] w-[200px] mt-8' alt="Pokemon Logo" />
           {/* <input type="checkbox" id="checkbox" />  */}
       {/* <label htmlFor="checkbox" className='checkbtn'  >      */}
    <img src={Ham} className='h-[100px] w-[100px] checkbtn' onClick={handleClick}  />
      {/* </label>   */}
            <ul className={`nav-list `}>
            <Link to="/" className={`nav-list-item text-xl ${isHomePage ? 'text-[#049372]' : ''}   font-semibold mr-8 hover:bg-[#36D7B7] rounded-xl p-2 `} onClick={handleClick}>Home</Link>
            <Link to="/about" className={`nav-list-item text-xl ${isHomePage ? 'text-[#049372]' : ''}  font-semibold mr-8 hover:bg-[#36D7B7] rounded-xl p-2 `} onClick={handleClick}>About</Link>     
            {/* <Link to="/Agriculture" className='mr-8 nav-list-item text-xl font-semibold text-white hover:bg-[#36D7B7] rounded-xl p-2'>Agriculture</Link> */}
            <Link to="/Ayurveda" className={`mr-8 nav-list-item ${isHomePage ? 'text-[#049372]' : ''} text-xl font-semibold hover:bg-[#36D7B7] rounded-xl p-2`} onClick={handleClick}>Sports & Ayurveda</Link>
            <Link to="/contactus" className={`nav-list-item text-xl ${isHomePage ? 'text-[#049372]' : ''}  font-semibold mr-8 hover:bg-[#36D7B7] rounded-xl p-2`} onClick={handleClick}>Contact Us</Link>
            </ul>
        </div>
    </header>
        </div>
      );
}

export default Navbar