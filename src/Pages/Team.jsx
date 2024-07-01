import React from 'react'
import img11 from "../images/img11.png";
import img22 from "../images/img22.png";
import img33 from "../images/img33.png";
import img44 from "../images/img44.png";
import img55 from "../images/img55.png";
import img66 from "../images/img66.png";
import img77 from "../images/img77.png";
import img88 from "../images/img88.png";
import swami from "../images/swami.png";
function Team() {
  return (
  <>
         <h2 className='text-[50px] text-[#006442] my-[3rem] font-bold text-center'>Meet Our Team</h2>
                <div className="container flex flex-col mx-auto ">
                    <div className="cont1 my-[7rem] mx-auto">
                         <div className='h-[400px] w-[470px] rounded-[30px] bg-[#006442] flex items-center'>
                                   <img src={swami} className='w-[200px] ml-[rem] h-[200px] rounded-[50%] my-auto' />
                                   <div className='bg-white w-[250px] h-[150px] mr-0 rounded-l-3xl'></div>
                         </div>
                    </div>
                </div>
  </>
  )
}

export default Team