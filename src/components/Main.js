import React from 'react'
import Hand from './Hand.jpg'
import './App.css';
const Main = () => {
  return (
    <>
    <div className='Main-section'>
    <h1 className='heading'>Test People Forum of India is
    here to help you.</h1>
    <img src={Hand} alt='Handshake' className='background'/>
    </div>     
    </>
  )
}

export default Main;
