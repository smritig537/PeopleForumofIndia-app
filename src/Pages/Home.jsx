import React from 'react'
import fifth from "../images/fifth.png";
import second from "../images/second.jpg";
import third from "../images/third.png";
import firstpick from "../images/firstpick.jpg";
import {Link} from "react-router-dom"
export default function Home() {
  return (
    <> 
    <header>
    <nav>
    <Link to="">Home</Link>
    <Link to="">Contacts</Link>
    <Link to="">Info</Link>
    </nav>
    </header>
        <div className='carousel w-[100vw] h-[100vh] hidden '>
        <div className='List'>
        <div className='item'>
        <img src="../images/fifth" />
        <div className='content'>
        <div className='author'>LUNDEV</div>
        <div className='title'>DESIGN SLIDER</div>
        <div className='topic'>ANIMAL</div>
        <div className='des'>lorem202ueigjijijopoejogjirjojeojikjmj opodoodopfieopigoimoo okofkogojogjv </div>
       <div className='buttons'>
       <button>SEE MORE</button>
       <button>SUBSCRIBE</button>
       </div>
        </div>
        </div>
        <div className='item'>
        <img src="../images/firstpick" />
        <div className='content'>
        <div className='author'>LUNDEV</div>
        <div className='title'>DESIGN SLIDER</div>
        <div className='topic'>ANIMAL</div>
        <div className='des'>lorem202ueigjijijopoejogjirjojeojikjmj opodoodopfieopigoimoo okofkogojogjv </div>
       <div className='buttons'>
       <button>SEE MORE</button>
       <button>SUBSCRIBE</button>
       </div>
        </div>
        </div>
        <div className='item'>
        <img src="../images/second" />
        <div className='content'>
        <div className='author'>LUNDEV</div>
        <div className='title'>DESIGN SLIDER</div>
        <div className='topic'>ANIMAL</div>
        <div className='des'>lorem202ueigjijijopoejogjirjojeojikjmj opodoodopfieopigoimoo okofkogojogjv </div>
       <div className='buttons'>
       <button>SEE MORE</button>
       <button>SUBSCRIBE</button>
       </div>
        </div>
        </div>
        <div className='item'>
        <img src="../images/third" />
        <div className='content'>
        <div className='author'>LUNDEV</div>
        <div className='title'>DESIGN SLIDER</div>
        <div className='topic'>ANIMAL</div>
        <div className='des'>lorem202ueigjijijopoejogjirjojeojikjmj opodoodopfieopigoimoo okofkogojogjv </div>
       <div className='buttons'>
       <button>SEE MORE</button>
       <button>SUBSCRIBE</button>
       </div>
        </div>
        </div>
        </div>
        </div>
    </>
  )
}
