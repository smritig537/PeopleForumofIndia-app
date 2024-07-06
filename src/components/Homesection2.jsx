import React from 'react'
import arrow from "../images/arrow.png";
// import { useEffect } from 'react';
import social from "../images/social.png";
import social1 from "../images/social1.png";
// import "./Homesection2.css";
import { useEffect ,useRef} from 'react';
function Homesection2() {
    // const cont1Ref = useRef(null);
   //  const cont2Ref = useRef(null);
   //  const contRef = useRef(null);
   //  const contbRef = useRef(null);
   //  // const cont1bRef = useRef(null);
   //  const cont2bRef = useRef(null);
   //  const contcRef = useRef(null);
   //  // const cont1cRef = useRef(null);
   //  const cont2cRef = useRef(null);
   //  useEffect(()=>{
   //                          //   const cont1 = cont1Ref.current;
   //                            const cont2 = cont2Ref.current;
   //                            const cont = contRef.current;
   //                            const contb = contbRef.current;
   //                          //   const cont1b = cont1bRef.current;
   //                            const cont2b = cont2bRef.current;
   //                            const contc = contcRef.current;
   //                          //   const cont1c = cont1cRef.current;
   //                            const cont2c = cont2cRef.current;
   //              //  let cont1 = document.querySelector(".cont1");
   //              //  let cont2 = document.querySelector(".cont2");
   //              //  let cont = document.querySelector("cont");
   //               cont.addEventListener("mouseover",()=>{
   //                  cont2.style.opacity = 1;
   //               })
   //               cont.addEventListener("mouseout",()=>{
   //                  cont2.style.opacity = 0;
   //               })
   //               contb.addEventListener("mouseover",()=>{
   //                  cont2b.style.opacity = 1;
   //               })
   //               contb.addEventListener("mouseout",()=>{
   //                  cont2b.style.opacity = 0;
   //               })
   //               contc.addEventListener("mouseover",()=>{
   //                  cont2c.style.opacity = 1;
   //               })
   //               contc.addEventListener("mouseout",()=>{
   //                  cont2c.style.opacity = 0;
   //               })
   //              //  console.log(cont1);
    
   //  },[])
  return (
    <div className='w-[100vw]  flex flex-wrap flex-col items-evenly mt-[10px] h-auto text-black  lg:flex-row lg:max-h-[355px]'>   
     <div className='box bg-[#262729] w-[100%] h-auto h-full max-h-[350px] lg:min-h-[355px] lg:w-[25%] '>
            <h1 className='text-white text-[40px]  w-[50%] ml-6 mt-8 xl:text-[50px]'>Our Objectives <img className=' w-[100px]' src={arrow} /></h1>
        </div>
        {/* <div  className='box bg-[#FFA500] h-auto px-4 cont2 flex flex-col items-center justify-center  h-full  text-white cont w-[100%] lg:w-[25%] max-h-[355px] lg:h-[355px] mb-4'>
        
                              <img src={social} className='w-[150px] h-[150px] xl:w-[200px] mt-4 h-[200px]' />
                        <h2 className='text-[32px] 2xl:text-[35px] text-[white] font-bold m-auto text-center'>Social Equity</h2>
                        <p className='w-[90%] text-[14px] 2xl:text-[16px] text-[white] text-center mt-4 mb-4'>Our forum strives to empower marginalized voices, ensuring everyone has a platform to advocate for their rights and needs.</p> 
          
        </div>  */}
         <div  className='box bg-[#FFA500] h-auto cont w-[100%] px-4 cont2 flex flex-col items-center justify-center  h-full  text-white  max-h-[355px] lg:h-[355px] lg:w-[25%]'>
         {/* <div  className=' bg-[#04AA6D] cont1 text-white flex absolute  w-[100%] h-full max-h-[350px]'>
                  <h1 className='font-[300] ml-8 text-[100px]'>03.</h1>
            </div>  */}
             {/* <div  className='bg-[white] w-[100%] px-4 cont2 flex flex-col items-center justify-center absolute h-full opacity-0 text-white max-h-[350px]'> */}
             <img src={social} className='w-[150px] h-[150px] xl:w-[200px]  h-[200px]' />
                        <h2 className='text-[32px] 2xl:text-[34px] text-[white] text-center font-bold m-auto w-[100%]'>Social Equity</h2>
                        <p className='w-[95%] text-[14px] 2xl:text-[16px] text-[white] text-center mt-2 xl:mt-2 mb-4'>the People Forum of India seeks to create a more equitable and inclusive society where every individual has the opportunity to thrive and contribute meaningfully, irrespective of their background or circumstances.</p> 
         
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic, quidem quam voluptate cupiditate ex sunt expedita et? Amet saepe officiis, quod ex sit incidunt ullam eius quisquam ducimus alias. */}
        </div> 
        <div  className='box bg-[white] h-auto cont w-[100%]  px-4 cont2 flex flex-col items-center justify-center  h-full  text-white  max-h-[355px] lg:h-[355px] lg:w-[25%]'>
         {/* <div className=' bg-[white] cont1 text-white flex absolute  w-[100%] h-full max-h-[350px]'>
                  <h1 className='font-[300] text-[black] ml-8 text-[100px]'>02.</h1>
            </div>  */}
             {/* <div  className='bg-[white]  w-[100%] px-4 cont2 flex flex-col items-center justify-center  h-full opacity-0 text-white max-h-[350px]'> */}
                        <img src={social1} className='w-[135px] h-[130px] xl:w-[200px]  mt-[16px] h-[185px]' />
                        <h2 className='text-[32px] 2xl:text-[35px] text-[#0047AB] font-bold m-auto text-center'>Economic Equity</h2>
                        <p className='w-[90%] text-[14px] 2xl:text-[16px] text-[#0047AB] text-center mt-2 mb-4'>Economic equity, a core goal of the People's Forum, aims to create a fair distribution of wealth and opportunities, prioritizing the needs of marginalized communities.

</p> 
            {/* </div>  */}
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic, quidem quam voluptate cupiditate ex sunt expedita et? Amet saepe officiis, quod ex sit incidunt ullam eius quisquam ducimus alias. */}
        </div>
        <div  className='box bg-[#04aa6d] h-auto cont w-[100%] px-4 cont2 flex flex-col items-center justify-center  h-full  text-white  max-h-[355px] lg:w-[25%]'>
         {/* <div  className=' bg-[#04AA6D] cont1 text-white flex absolute  w-[100%] h-full max-h-[350px]'>
                  <h1 className='font-[300] ml-8 text-[100px]'>03.</h1>
            </div>  */}
             {/* <div  className='bg-[white] w-[100%] px-4 cont2 flex flex-col items-center justify-center absolute h-full opacity-0 text-white max-h-[350px]'> */}
             <img src={social} className='w-[150px] h-[150px] xl:w-[200px] mt-4 h-[200px]' />
                        <h2 className='text-[32px] 2xl:text-[34px] text-[white] text-center font-bold m-auto w-[100%]'>Environmental Equity</h2>
                        <p className='w-[95%] text-[14px] 2xl:text-[16px] text-[white] text-center mt-2 xl:mt-2 mb-4'>Environmental equity, a core goal of the People's Forum, seeks to ensure that all communities, particularly marginalized ones, have equal access to a clean and healthy environment.</p> 
         
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