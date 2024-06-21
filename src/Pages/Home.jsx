import React from 'react'
import { useEffect ,useRef} from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
// import "./Home.js";
import img5 from "../images/img.png";
import img4 from "../images/third.png";
import img3 from "../images/second.jpg";
import img2 from "../images/firstpick.jpg";
import left from "../images/left.png";
import right from "../images/right.png";
import img1 from "../images/img1.png";
import logo from "../images/logo.png";
import Homesection2 from '../components/Homesection2.jsx';
// import img1 from "../images/fifth.png";
function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    // Add any initialization code here if needed
  //   document.addEventListener("DOMContentLoaded", function() {
  //     // Add any initialization code here if needed
  // });
  const nextdom = nextRef.current;
  const prevdom = prevRef.current;
  // Ensure nextdom and prevdom are not null before accessing
  if (nextdom && prevdom) {
      // Your logic that requires nextdom and prevdom
      prevdom.addEventListener('click', () => show('prev'));
      nextdom.addEventListener('click', () => show('next'));
  } else {
      console.warn('nextdom or prevdom is null');
  }
  // // slider.js
// let nextdom;
// let prevdom;
// document.addEventListener("DOMContentLoaded", function() {
  // let nextdom=document.querySelector("#next");
  // let prevdom=document.querySelector("#prev");

 console.log(nextdom); // Check if nextdom is null or the actual element
 console.log(prevdom); // Check if prevdom is null or the actual element

 // Rest of your code...
// });

// let nextdom=document.querySelector("#next");
// let prevdom=document.querySelector("#prev");
let container=document.querySelector(".container");
let containerList=document.querySelector(".container .list");
let thumbnail=document.querySelector(".container .thumbnail");
// Buttons functionality
let button=document.querySelectorAll(".container .list .item .content button");
let seemore=document.querySelectorAll(".container .list .item .content .des");
// console.log(seemore);
let flag=false;

for(let i=0;i<button.length;i++)
{
 button[i].addEventListener("click",()=>{
     if(!flag){
         seemore[i].style.visibility="visible";
         flag=true;
     }else{
         seemore[i].style.visibility="hidden";
         flag=false;
     }
 });
}

let timeauto=7000;
let autoout=setTimeout(()=>{
 nextdom.click();
},timeauto);

let time=3000;
let timeout;

prevdom.onclick = function(){
 show('prev');
}
nextdom.onclick = function(){
 show('next');
}
function show(t){
 let itemcontainer=document.querySelectorAll(".container .list .item");
 let itemsthumbnail=document.querySelectorAll(".container .thumbnail .item ");
 if(t==='next'){
     containerList.appendChild(itemcontainer[0]);
     thumbnail.appendChild(itemsthumbnail[0]);
     container.classList.add("next");
 }else{
     let pos=itemcontainer.length-1;
     containerList.prepend(itemcontainer[pos]);
     thumbnail.prepend(itemsthumbnail[pos]);
     container.classList.add("prev");
 }

 clearTimeout(timeout);
 timeout =setTimeout(()=>{
     container.classList.remove('next');
     container.classList.remove('prev');
 },time)

 clearTimeout(autoout);
 autoout=setTimeout(()=>{
     nextdom.click();
 },timeauto);
}
}, []);
  return (
   <>
  
                 <body >
    {/* <!-- Header --> */}
   
    {/* <!-- Main content --> */}
    <div class="container w-[100%]">
        <div class="list">
            {/* <!-- Item-1 --> */}
            <div class="item">
                <img src={img2} alt="Balbasaur image" className='w-[100vw]' />
                <div class="content">
                    <div class="topic">POKEMON</div>
                    <div class="title">BALBASAUR</div>
                    <div class="type">Dual-type pokemon</div>
                    <button>See more</button>
                    <div class="des">Bulbasaur is a dual-type Grass/Poison Pokémon introduced in Generation I.
                        Known for the plant bulb on its back, which grows into a large flower as it evolves.
                        It is the starter Pokémon in the Kanto region, recognized for its versatility in battles
                        and distinctive design.
                    </div>
                </div>
            </div>
            {/* <!-- Item-2 --> */}
            <div class="item">
                <img src={img3} alt="Charlizad image" />
                <div class="content">
                    <div class="topic">POKEMON</div>
                    <div class="title">CHARLIZAD</div>
                    <div class="type">Dual-type pokemon</div>
                    <button>See more</button>
                    <div class="des">Charizard is a dual-type Fire/Flying Pokémon introduced in Generation I. It is
                        known for its dragon-like appearance and powerful fire-based attacks,
                        capable of flying at high altitudes and unleashing intense flames. Charizard is the final
                        evolution of Charmander, and it is a popular and iconic
                        Pokémon in the franchise.
                    </div>
                </div>
            </div>
            {/* <!-- Item-3 --> */}
            <div class="item">
                <img src={img4} alt="Charmander in pokeball image" />
                <div class="content">
                    <div class="topic">POKEMON</div>
                    <div class="title">CHARMANDER</div>
                    <div class="type">Fire-type pokemon</div>
                    <button>See more</button>
                    <div class="des">Charmander, when captured in a Poké Ball, becomes a portable and loyal companion
                        for trainers. The Poké Ball allows Charmander to be safely stored and transported, ready for
                        battles or adventures. Despite being inside the Poké Ball, Charmander’s flame remains
                        ever-bright,
                        symbolizing its readiness and vitality.
                    </div>
                </div>
            </div>
            {/* <!-- Item 4  --> */}
            <div class="item">
                <img src={img5} alt="Eevee in pokeball image" />
                <div class="content">
                    <div class="topic">POKEMON</div>
                    <div class="title">EEVEE</div>
                    <div class="type">Normal-type pokemon</div>
                    <button>See more</button>
                    <div class="des">Eevee, when inside a Poké Ball, is a versatile and adaptable companion for
                        trainers.
                        The Poké Ball allows Eevee to rest and be easily carried, ready to join battles or explore new
                        environments. Known for its potential to evolve into multiple different forms, Eevee remains an
                        exciting and strategic choice for any Pokémon team.
                    </div>
                </div>
            </div>

            {/* <!-- Item 5 --> */}
            <div class="item">
                <img src={img1} alt="Eevee image" />
                <div class="content">
                    <div class="topic">POKEMON</div>
                    <div class="title">EEVEE</div>
                    <div class="type">Normal-type pokemon</div>
                    <button>See more</button>
                    <div class="des">Eevee is a Normal-type Pokémon known for its unique ability to evolve
                        into multiple different forms, each representing a different type. Its cute and adaptable
                        nature makes it a favorite among trainers. Eevee's evolutionary potential includes eight
                        distinct forms, offering diverse strategies in battles.
                    </div>
                </div>
            </div>
            {/* <!-- Item 6 --> */}
            {/* {/* <div class="item">
                <img src="./assets/Pikachu.png" alt="Pickachu image" />
                <div class="content">
                    <div class="topic">POKEMON</div>
                    <div class="title">PICKACHU</div>
                    <div class="type">Electric-type pokemon</div>
                    <button>See more</button>
                    <div class="des">Pikachu is an Electric-type Pokémon introduced in Generation I,
                        known for its yellow fur and lightning bolt-shaped tail. It is the franchise's
                        mascot and is famous for its powerful electric attacks, particularly Thunderbolt.
                        Pikachu evolves from Pichu and can evolve into Raichu when exposed to a Thunder Stone.
                    </div>
                </div>
            </div> */}
            {/* <!-- Item 7 --> */}
            {/* <div class="item">
                <img src="./assets/Pokeball in hand yelloe.jpg" alt="Pokeball in hand image" />
                <div class="content">
                    <div class="topic">POKEMON</div>
                    <div class="title">POKEBALL</div>
                    <button>See more</button>
                    <div class="des">A Poké Ball in hand is a symbol of readiness and adventure for Pokémon trainers.
                        It allows trainers to capture, carry, and command their Pokémon companions with ease.
                        Holding a Poké Ball signifies a bond between the trainer and their Pokémon, ready
                        for battles and exploration.
                    </div>
                </div>
            </div> */}
            {/* <!-- Item 8 --> */}
            {/* <div class="item">
                <img src="./assets/pokeballs.jpg" alt="Pokeballs image" />
                <div class="content">
                    <div class="topic">POKEMON</div>
                    <div class="title">POKEBALL</div>
                    <button>See more</button>
                    <div class="des">A Poké Ball is a spherical device used by Pokémon trainers to capture
                        and store Pokémon. It functions by converting Pokémon into energy, allowing them to
                        be safely contained and transported. Poké Balls are essential tools in the Pokémon
                        world, representing the bond between trainers and their Pokémon companions.
                    </div>
                </div>
            </div> */}
            {/* <!-- Item 9 --> */}
            {/* <div class="item item-9">
                <img src="./assets/Zapdo.jpg" alt="Zapdos image" />
                <div class="content">
                    <div class="topic">POKEMON</div>
                    <div class="title">ZAPDOS</div>
                    <div class="type">LEGENDARY POKEMON</div>
                    <button>See more</button>
                    <div class="des">Zapdos is a dual-type Electric/Flying Legendary Pokémon introduced
                        in Generation I. Known for its striking appearance and powerful electric attacks,
                        it can generate massive thunderstorms. Zapdos is one of the three Legendary birds
                        of the Kanto region, making it a rare and sought-after Pokémon for trainers.
                    </div>
                </div>
            </div>  */}

        </div>
        {/* <!-- Thumbnails --> */}
        <div class="thumbnail">
            {/* <!-- item-2 --> */}
            <div class="item">
                <img src={img3} alt="" />
                <div class="content-1">
                    <div class="title">
                        Charlizad
                    </div>
                </div>
            </div>
            {/* <!-- item-3 --> */}
            <div class="item">
                <img src={img4} alt="" />
                <div class="content-1">
                    <div class="title">
                        Charmander
                    </div>
                </div>
            </div>
            {/* <!-- item-4 --> */}
            <div class="item">
                <img src={img5} alt="" />
                <div class="content-1">
                    <div class="title">
                        Eevee in pokeball
                    </div>
                </div>
            </div>
            {/* <!-- Item-5 --> */}
            <div class="item">
                <img src={img1} alt="" />
                <div class="content-1">
                    <div class="title">
                        Eevee
                    </div>
                </div>
            </div>
            {/* <!-- Item-6 --> */}
            <div class="item">
                <img src={img2} alt="" />
                <div class="content-1">
                    <div class="title">
                        Pikachu
                    </div>
                </div>
            </div>
            {/* <!-- Item-7 --> */}
            {/* <div class="item">
                <img src="./assets/Pokeball in hand yelloe.jpg" alt="" />
                <div class="content-1">
                    <div class="title">
                        Pokeball
                    </div>
                </div>
            </div> */}
            {/* <!-- Item-8 --> */}
            {/* <div class="item">
                <img src="./assets/pokeballs.jpg" alt=""  />
                <div class="content-1">
                    <div class="title">
                        Pokeballs
                    </div>
                </div>
            </div> */}
            {/* <!-- Item-9 --> */}
            {/* <div class="item">
                <img src="./assets/Zapdo.jpg" alt="" />
                <div class="content-1">
                    <div class="title">
                        Zapdos
                    </div>
                </div>
            </div> */}
             {/* <!-- item-1 --> */}
             {/* <div class="item">
                <img src="./assets/Balbasaur.png" alt="" />
                <div class="content-1">
                    <div class="title">
                        Balbasaur
                    </div>
                </div>
            </div> */}
        </div>
        {/* <!-- Arrow --> */}
        <div class="arrows">
            <button id="prev" className='flex items-center justify-center' ref={prevRef}><img className='h-[20px] w-[20px]' src={left} /></button>
            <button id="next" className='flex items-center justify-center' ref={nextRef}><img className='h-[20px] w-[20px]' src={right} /></button>
        </div>
        {/* <!-- time --> */}
        <div class="time"></div>
    </div>
     {/* <!-- Script File --> */}
   
    {/* <script src="./app.js"></script> */}

                      </body>

      <Homesection2 />
   </>
  );
};

export default Home;
