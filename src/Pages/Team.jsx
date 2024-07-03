import React from 'react'
import img11 from "../images/img11.png";
import img22 from "../images/img22.png";
import abc from "../images/abc.jpg";
import img44 from "../images/img44.png";
import img55 from "../images/img55.png";
import img66 from "../images/img66.png";
import img77 from "../images/img77.png";
import img88 from "../images/img88.png";
import swami from "../images/swami.png";
import mam from "../images/mam.jpg";
function Team() {
  return (
  <>
         <h2 className='text-[40px] text-[#006442] my-[3rem] font-bold text-center sm:text-[50px]'>Meet Our Team</h2>
                <div className="flex flex-col mx-auto w-[70%]">
                    <div className="cont1 mb-[5rem]  mx-auto">
                         <div className='h-auto w-[310px] border-[#006442] border-[1px] rounded-[30px]  flex flex-col sm:h-[450px] sm:w-[360px]'>
                                   <img src={swami} className='w-[100%] h-[80%] rounded-t-[30px] ' />
                                   <h1 className='text-xl m-[0.4rem] text-[#006442] font-semibold'>
                                   Narayananand Giri Maharaj
                                   </h1>
                                   <h1  className='text-[#006442] text-[17px] m-[0.4rem]'>President</h1>
                         </div>
                    </div>
                <div className='flex flex-wrap'>
                    <div className="cont1 mx-auto  mb-[5rem]">
                         <div className='h-auto w-[310px] border-[#006442] border-[1px] rounded-[30px]  flex flex-col sm:h-[450px] sm:w-[360px]'>
                                   <img src={img11} className='w-[100%] h-[80%] rounded-t-[30px] ' />
                                   <h1 className='text-xl m-[0.4rem] text-[#006442] font-semibold'>                      
                                    P. D. Dinakaran Premkumar
                                   </h1>
                                   <h1 className='text-[#006442] text-[17px] m-[0.4rem]'>Former Chief Justice, Tamil Nadu</h1>
                         </div>
                    </div>      
                    <div className="cont1 mx-auto  mb-[5rem]"> 
                         <div className='h-auto w-[310px] border-[#006442] border-[1px] rounded-[30px]  flex flex-col sm:h-[450px] sm:w-[360px]'>
                                   <img src={abc} className='w-[100%] h-[80%] rounded-t-[30px] ' />
                                   <h1 className='text-xl m-[0.4rem] text-[#006442] font-semibold'>                          
                                                                                                     John Joseph
                                   </h1>
                                   <h1 className='text-[#006442] text-[17px] m-[0.4rem]'>Former Retd, National GST Chairman</h1>
                         </div>
                    </div>
                   
                    <div className="cont1 mx-auto  mb-[5rem]">
                         <div className='h-auto w-[310px] border-[#006442] border-[1px] rounded-[30px]  flex flex-col sm:h-[450px] sm:w-[360px]'>
                                   <img src={img55} className='w-[100%] h-[80%] rounded-t-[30px] ' />
                                   <h1 className='text-xl m-[0.4rem] text-[#006442] font-semibold'>
                                   
Buddarapu Venkateswara Rao
                                   </h1>
                                   <h1 className='text-[#006442] text-[17px] m-[0.4rem]'>Former Judicial Member C.A.T, AP</h1>
                         </div>
                    </div>
                    <div className="cont1 mx-auto  mb-[5rem]">
                         <div className='h-auto w-[310px] border-[#006442] border-[1px] rounded-[30px]  flex flex-col sm:h-[450px] sm:w-[360px]'>
                                   <img src={mam} className='w-[100%] h-[80%] rounded-t-[30px] ' />
                                   <h1 className='text-xl m-[0.4rem] text-[#006442] font-semibold'>
                                   Priya Nair
                                   </h1>
                                   <h1 className='text-[#006442] text-[17px] m-[0.4rem]'>Corporate International Coordinator</h1>
                         </div>
                    </div>
                    <div className="cont1 mx-auto  mb-[5rem]">
                         <div className='h-auto w-[310px] border-[#006442] border-[1px] rounded-[30px]  flex flex-col sm:h-[450px] sm:w-[360px]'>
                                   <img src={img66} className='w-[100%] h-[80%] rounded-t-[30px] ' />
                                   <h1 className='text-xl m-[0.4rem] text-[#006442] font-semibold'>
                                 
Rajesh Bhatter
                                   </h1>
                                   <h1 className='text-[#006442] text-[17px] m-[0.4rem]'>Social Activist & Business man</h1>
                         </div>
                    </div>
                    <div className="cont1 mx-auto  mb-[5rem]">
                         <div className='h-auto w-[310px] border-[#006442] border-[1px] rounded-[30px]  flex flex-col sm:h-[450px] sm:w-[360px]'>
                                   <img src={img77} className='w-[100%] h-[80%] rounded-t-[30px] ' />
                                   <h1 className='text-xl m-[0.4rem] text-[#006442] font-semibold'>
                                   

                                   Renu Gupta
                                   </h1>
                                   <h1 className='text-[#006442] text-[17px] m-[0.4rem]'>Social Activist, Haryana</h1>
                         </div>
                    </div>
                    <div className="cont1 mx-auto  mb-[5rem]">
                         <div className='h-auto w-[310px] border-[#006442] border-[1px] rounded-[30px]  flex flex-col sm:h-[450px] sm:w-[360px]'>
                                   <img src={img88} className='w-[100%] h-[80%] rounded-t-[30px] ' />
                                   <h1 className='text-xl m-[0.4rem] text-[#006442] font-semibold'>
                                   Dhanraj Kella
                                   </h1>
                                   <h1 className='text-[#006442] text-[17px] m-[0.4rem]'>Ex MLA Surender Nagar, Gujarat</h1>
                         </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                <h2 className='text-[50px] text-[#006442] my-[3rem] font-bold text-center'>Business Development Team</h2>
                    <div className='flex flex-wrap'>
                <div className="cont1 mx-auto  mb-[5rem]">
                         <div className='h-auto w-[310px] border-[#006442] border-[1px] rounded-[30px]  flex flex-col sm:h-[450px] sm:w-[360px]'>
                                   <img src={img22} className='w-[100%] h-[80%] rounded-t-[30px] ' />
                                   <h1 className='text-xl m-[0.4rem] text-[#006442] font-semibold'>
                                  
Surjit Singh Rana
                                   </h1>
                                   <h1 className='text-[#006442] text-[17px] m-[0.4rem]'>


Pathankoth, Punjab</h1>
                         </div>
                    </div>
                    <div className="cont1 mx-auto  mb-[5rem]">
                         <div className='h-auto w-[310px] border-[#006442] border-[1px] rounded-[30px]  flex flex-col sm:h-[450px] sm:w-[360px]'>
                                   <img src={img44} className='w-[100%] h-[80%] rounded-t-[30px] ' />
                                   <h1 className='text-xl m-[0.4rem] text-[#006442] font-semibold'>
                                   
Bhawna
                                   </h1>
                                   <h1 className='text-[#006442] text-[17px] m-[0.4rem]'>Pathankoth, Punjab</h1>
                         </div>
                    </div>
                    </div>
                </div>
                </div>       
  </>
  )
}

export default Team