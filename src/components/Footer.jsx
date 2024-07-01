import React from 'react'
import logo from "../images/logo.png";
function Footer() {
  return (
           <>
           <footer className='w-[100vw] text-[13px] md:text-[15px] xl:text-[17px] h-auto flex overflow-y-auto items-center justify-center bg-[#414542]'>
          <div className='w-[90%] m-auto h-[100%] flex  flex-col '>
            <div className='flex flex-col md:flex-row justify-between mt-8'>
                 <img src={logo} className='w-[350px] h-[350px] mx-auto mt-0' />
                 <div className='flex flex-col text-center mb-8'>
                     <h1 className='font-bold text-center text-[#006442]'>Quick Links</h1>
                     <p>Home</p>
                     <p>About</p>
                     <p>Our Team</p>
                     <p>Services</p>
                     <p>Membership</p>
                 </div>
                 <div className='flex flex-col mb-8'>
                       <h1 className='font-bold text-center text-[#006442]'>Address:</h1>
                       <p className='w-[90%] text-center'>4690/2, Shora Kothi, Near Main Market, Pahar Ganj, New Delhi-110055</p>
                 </div>
                 <div className='flex flex-col text-center mb-8'>
                      <h1 className='font-bold text-[#006442]'>Get In Touch</h1>
                      <p>info@peopleforumofindia.in</p>
                 </div>
            </div>
                 <div >
                    <p className='text-center'>Copyright © 2024  People Forum Of India All Rights Reserved.</p>
                 </div>
           </div>
           </footer>
           </>
  )
}

export default Footer