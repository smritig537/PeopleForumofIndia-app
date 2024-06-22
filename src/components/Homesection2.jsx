import React from 'react'
import arrow from "../images/arrow.png";
// import { useEffect } from 'react';
import social from "../images/social.png";
// import "./Homesection2.css";
import { useEffect ,useRef} from 'react';
function Homesection2() {
    // const cont1Ref = useRef(null);
    const cont2Ref = useRef(null);
    const contRef = useRef(null);
    const contbRef = useRef(null);
    // const cont1bRef = useRef(null);
    const cont2bRef = useRef(null);
    const contcRef = useRef(null);
    // const cont1cRef = useRef(null);
    const cont2cRef = useRef(null);
    useEffect(()=>{
                            //   const cont1 = cont1Ref.current;
                              const cont2 = cont2Ref.current;
                              const cont = contRef.current;
                              const contb = contbRef.current;
                            //   const cont1b = cont1bRef.current;
                              const cont2b = cont2bRef.current;
                              const contc = contcRef.current;
                            //   const cont1c = cont1cRef.current;
                              const cont2c = cont2cRef.current;
                //  let cont1 = document.querySelector(".cont1");
                //  let cont2 = document.querySelector(".cont2");
                //  let cont = document.querySelector("cont");
                 cont.addEventListener("mouseover",()=>{
                    cont2.style.opacity = 1;
                 })
                 cont.addEventListener("mouseout",()=>{
                    cont2.style.opacity = 0;
                 })
                 contb.addEventListener("mouseover",()=>{
                    cont2b.style.opacity = 1;
                 })
                 contb.addEventListener("mouseout",()=>{
                    cont2b.style.opacity = 0;
                 })
                 contc.addEventListener("mouseover",()=>{
                    cont2c.style.opacity = 1;
                 })
                 contc.addEventListener("mouseout",()=>{
                    cont2c.style.opacity = 0;
                 })
                //  console.log(cont1);
    
    },[])
  return (
    <div className='w-[100vw] z-200 flex flex-wrap mt-[10px] min-h-[350px] h-auto text-black  bg-white'>
     <div className='box bg-[#262729] w-[25%]'>
            <h1 className='text-white text-[40px]  w-[50%] ml-6 mt-8 xl:text-[50px]'>Our Objectives <img className=' w-[100px]' src={arrow} /></h1>
        </div>
        <div ref={contRef} className='box bg-[blue] cont w-[25%] relative'>
         <div  className=' bg-[#d6924d] cont1 text-white flex absolute  w-[100%] h-full'>
                  <h1 className='font-[300] ml-8 text-[100px]'>01.</h1>
            </div> 
             <div ref={cont2Ref} className='bg-[brown] w-[100%] cont2 px-4 flex flex-col items-center justify-center absolute h-full opacity-0 text-white'>
                              <img src={social} className='w-[150px] h-[150px] xl:w-[200px] mt-4 h-[200px]' />
                        <h2 className='text-[32px] 2xl:text-[35px] m-auto text-center'>Social Equity</h2>
                        <p className='w-[90%] text-[14px] 2xl:text-[16px] text-center mt-4 mb-4'>Our forum strives to empower marginalized voices, ensuring everyone has a platform to advocate for their rights and needs.</p> 
            </div>
        </div> 
        <div ref={contbRef} className='box bg-[blue] cont w-[25%] relative'>
         <div className=' bg-[#262729] cont1 text-white flex absolute  w-[100%] h-full'>
                  <h1 className='font-[300] ml-8 text-[100px]'>02.</h1>
            </div> 
             <div ref={cont2bRef} className='bg-[brown] w-[100%] px-4 cont2 flex flex-col items-center justify-center absolute h-full opacity-0 text-white'>
                        <img src={social} className='w-[150px] h-[150px] mt-4 xl:w-[200px] h-[200px]' />
                        <h2 className='text-[32px] 2xl:text-[35px] m-auto text-center'>Economic Equity</h2>
                        <p className='w-[90%] text-[14px] 2xl:text-[16px] text-center mt-4 mb-4'>Economic equity, a core goal of the People's Forum, aims to create a fair distribution of wealth and opportunities, prioritizing the needs of marginalized communities.

</p> 
            </div> 
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic, quidem quam voluptate cupiditate ex sunt expedita et? Amet saepe officiis, quod ex sit incidunt ullam eius quisquam ducimus alias. */}
        </div>
        <div ref={contcRef} className='box bg-[blue] cont w-[25%] relative'>
         <div  className=' bg-[#d6924d] cont1 text-white flex absolute  w-[100%] h-full'>
                  <h1 className='font-[300] ml-8 text-[100px]'>03.</h1>
            </div> 
             <div ref={cont2cRef} className='bg-[brown] w-[100%] px-4 cont2 flex flex-col items-center justify-center absolute h-full opacity-0 text-white'>
             <img src={social} className='w-[150px] h-[150px] xl:w-[200px] mt-4 h-[200px]' />
                        <h2 className='text-[32px] 2xl:text-[35px] text-center mx-auto'>Environmental Equity</h2>
                        <p className='w-[90%] text-[14px] 2xl:text-[16px] text-center mt-4 mb-4'>Environmental equity, a core goal of the People's Forum, seeks to ensure that all communities, particularly marginalized ones, have equal access to a clean and healthy environment.</p> 
            </div> 
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic, quidem quam voluptate cupiditate ex sunt expedita et? Amet saepe officiis, quod ex sit incidunt ullam eius quisquam ducimus alias. */}
        </div> 
        {/* <div className='box bg-[green] w-[25%]'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quam ex eum dolore repellendus exercitationem dignissimos! Nesciunt accusantium, corporis magni fugiat dolorum mollitia sint perspiciatis dolor non. Nemo cum explicabo pariatur veniam odit dolor quisquam nulla commodi. Nihil, alias? Soluta.
        </div>
        <div className='box bg-[purple] w-[25%]'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quam ex eum dolore repellendus exercitationem dignissimos! Nesciunt accusantium, corporis magni fugiat dolorum mollitia sint perspiciatis dolor non. Nemo cum explicabo pariatur veniam odit dolor quisquam nulla commodi. Nihil, alias? Soluta.
        </div> */}
    </div>
  )
}

export default Homesection2