import React from 'react'
import arrow from "../images/arrow.png";
// import { useEffect } from 'react';
// import "./Homesection2.css";
import { useEffect ,useRef} from 'react';
function Homesection2() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    useEffect(()=>{
                //  let cont1 = document.querySelector(".cont1");
                //  let cont2 = document.querySelector(".cont2");
                //  let cont = document.querySelector("cont");
                //  cont.addEventListener("click",()=>{
                //     cont2.style.opacity = 1;
                //  })
    
    },[])
    // useEffect(() => {
    //     // Add any initialization code here if needed
    //   //   document.addEventListener("DOMContentLoaded", function() {
    //   //     // Add any initialization code here if needed
    //   // });
    //   const nextdom = nextRef.current;
    //   const prevdom = prevRef.current;
    //   // Ensure nextdom and prevdom are not null before accessing
    //   if (nextdom && prevdom) {
    //       // Your logic that requires nextdom and prevdom
    //       prevdom.addEventListener('click', () => show('prev'));
    //       nextdom.addEventListener('click', () => show('next'));
    //   } else {
    //       console.warn('nextdom or prevdom is null');
    //   }
    //   // // slider.js
    // // let nextdom;
    // // let prevdom;
    // // document.addEventListener("DOMContentLoaded", function() {
    //   // let nextdom=document.querySelector("#next");
    //   // let prevdom=document.querySelector("#prev");
    
    //  console.log(nextdom); // Check if nextdom is null or the actual element
    //  console.log(prevdom); // Check if prevdom is null or the actual element
    
    //  // Rest of your code...
    // // });
    
    // // let nextdom=document.querySelector("#next");
    // // let prevdom=document.querySelector("#prev");
    // let container=document.querySelector(".container");
    // let containerList=document.querySelector(".container .list");
    // let thumbnail=document.querySelector(".container .thumbnail");
    // // Buttons functionality
    // let button=document.querySelectorAll(".container .list .item .content button");
    // let seemore=document.querySelectorAll(".container .list .item .content .des");
    // // console.log(seemore);
    // let flag=false;
    
    // for(let i=0;i<button.length;i++)
    // {
    //  button[i].addEventListener("click",()=>{
    //      if(!flag){
    //          seemore[i].style.visibility="visible";
    //          flag=true;
    //      }else{
    //          seemore[i].style.visibility="hidden";
    //          flag=false;
    //      }
    //  });
    // }
    
    // let timeauto=7000;
    // let autoout=setTimeout(()=>{
    //  nextdom.click();
    // },timeauto);
    
    // let time=3000;
    // let timeout;
    
    // prevdom.onclick = function(){
    //  show('prev');
    // }
    // nextdom.onclick = function(){
    //  show('next');
    // }
    // function show(t){
    //  let itemcontainer=document.querySelectorAll(".container .list .item");
    //  let itemsthumbnail=document.querySelectorAll(".container .thumbnail .item ");
    //  if(t==='next'){
    //      containerList.appendChild(itemcontainer[0]);
    //      thumbnail.appendChild(itemsthumbnail[0]);
    //      container.classList.add("next");
    //  }else{
    //      let pos=itemcontainer.length-1;
    //      containerList.prepend(itemcontainer[pos]);
    //      thumbnail.prepend(itemsthumbnail[pos]);
    //      container.classList.add("prev");
    //  }
    
    //  clearTimeout(timeout);
    //  timeout =setTimeout(()=>{
    //      container.classList.remove('next');
    //      container.classList.remove('prev');
    //  },time)
    
    //  clearTimeout(autoout);
    //  autoout=setTimeout(()=>{
    //      nextdom.click();
    //  },timeauto);
    // }
    // }, []);
  return (
    <div className='w-[100vw] z-200 flex  mt-[10px] min-h-[350px] text-black  bg-white'>
     <div className='box bg-[#262729] w-[25%]'>
            <h1 className='text-white text-[50px] w-[50%] ml-6 mt-8'>Our Objectives <img className=' w-[100px]' src={arrow} /></h1>
        </div>
        <div className='box bg-[blue] cont w-[25%] relative'>
         <div className=' bg-[#d6924d] cont1 text-white flex absolute  w-[100%] h-full'>
                  <h1 className='font-[300] ml-8 text-[100px]'>01.</h1>
            </div> 
             <div className='bg-[brown] w-[100%] cont2 absolute  h-full opacity-0 text-white'>
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non praesentium quas tenetur. Cumque consequatur nobis sit. Officiis, totam minima. Magnam esse blanditiis facilis, ea nam delectus qui excepturi omnis atque animi velit voluptate. Tenetur exercitationem alias ducimus aut vitae!
            </div> 
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic, quidem quam voluptate cupiditate ex sunt expedita et? Amet saepe officiis, quod ex sit incidunt ullam eius quisquam ducimus alias. */}
        </div>  
        <div className='box bg-[green] w-[25%]'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quam ex eum dolore repellendus exercitationem dignissimos! Nesciunt accusantium, corporis magni fugiat dolorum mollitia sint perspiciatis dolor non. Nemo cum explicabo pariatur veniam odit dolor quisquam nulla commodi. Nihil, alias? Soluta.
        </div>
        <div className='box bg-[purple] w-[25%]'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quam ex eum dolore repellendus exercitationem dignissimos! Nesciunt accusantium, corporis magni fugiat dolorum mollitia sint perspiciatis dolor non. Nemo cum explicabo pariatur veniam odit dolor quisquam nulla commodi. Nihil, alias? Soluta.
        </div>
    </div>
  )
}

export default Homesection2