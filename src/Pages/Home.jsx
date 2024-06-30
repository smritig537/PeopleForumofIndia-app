import React from 'react'
import { useEffect,useState ,useRef} from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
// import "./Homeresp.css";
// import "./Home.js";
import img5 from "../images/Agriculture.png";
import img4 from "../images/business.jpg";
import img3 from "../images/hut..png";
import img2 from "../images/cow.jpg";
import left from "../images/left.png";
import yoga from "../images/yoga.jpg"
import right from "../images/right.png";
import medicine from "../images/medicine.jpg"
import img1 from "../images/sports.jpg";
import logo from "../images/logo.png";
import Homesection2 from '../components/Homesection2.jsx';
import arrow from "../images/arrow.png";
import Hero from "../components/Hero.js";
import Homesection3 from '../components/Homesection3.jsx';
import Navbar from '../components/Navbar.js';
// import img1 from "../images/fifth.png";
function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    const nextdom = nextRef.current;
    const prevdom = prevRef.current;
    const container = document.querySelector('.container');
    const containerList = document.querySelector('.container .list');
    const thumbnail = document.querySelector('.container .thumbnail');
    if (!nextdom || !prevdom || !container || !containerList || !thumbnail) {
      console.warn('DOM elements not found');
      return;
    }

    prevdom.addEventListener('click', () => show('prev'));
    nextdom.addEventListener('click', () => show('next'));

    const buttons = document.querySelectorAll('.container .list .item .content button');
    const seemore = document.querySelectorAll('.container .list .item .content .des');
    let flag = false;

    buttons.forEach((button, i) => {
      button.addEventListener('click', () => {
        if (!flag) {
          seemore[i].style.visibility = 'visible';
          flag = true;
        } else {
          seemore[i].style.visibility = 'hidden';
          flag = false;
        }
      });
    });

    let timeauto = 7000;
    let autoout = setTimeout(() => {
      nextdom.click();
    }, timeauto);

    let time = 3000;
    let timeout;

    prevdom.onclick = function () {
      show('prev');
    };
    nextdom.onclick = function () {
      show('next');
    };

    function show(direction) {
      const itemcontainer = document.querySelectorAll('.container .list .item');
      const itemsthumbnail = document.querySelectorAll('.container .thumbnail .item');

      if (itemcontainer.length === 0 || itemsthumbnail.length === 0) {
        console.warn('No items found');
        return;
      }

      if (direction === 'next') {
        containerList.appendChild(itemcontainer[0]);
        thumbnail.appendChild(itemsthumbnail[0]);
        container.classList.add('next');
      } else {
        let pos = itemcontainer.length - 1;
        containerList.prepend(itemcontainer[pos]);
        thumbnail.prepend(itemsthumbnail[pos]);
        container.classList.add('prev');
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        container.classList.remove('next');
        container.classList.remove('prev');
      }, time);

      clearTimeout(autoout);
      autoout = setTimeout(() => {
        nextdom.click();
      }, timeauto);
    }
  }, []);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
      // Function to update screenWidth state on window resize
      const handleResize = () => {
          setScreenWidth(window.innerWidth);
      };

      // Add event listener to update screenWidth on window resize
      window.addEventListener('resize', handleResize);

      // Clean up the event listener
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);
  // let screenwidth = window.innerWidth;
  // console.log(screenwidth);
  return (
    <>
 <body >

      <div className="container  ">
      <Navbar />
        <div className="list  ">
          <div className="item">
            <img src={img2} alt="cow" className='' />
            <div className="content">
              <div className="topic">PEOPLE FORUM</div>
              <div className="title">Organic Agriculture</div>
              <div className="type">Organic Flora</div>
              <button>See more</button>
              <div className="des">In integrated farming, the complete inputs for the farm will come from within. This mixed farming technique will keep the field under continuous production. It enhances the productivity of the farm and increases the per capita profitability.</div>
            </div>
          </div>
          <div className="item ">
            <img src={medicine} alt="Charlizad"  />
            <div className="content">
              <div className="topic">PEOPLE FORUM</div>
              <div className="title">Ayurveda</div>
              <div className="type">A complete science for Healthcare</div>
              <button>See more</button>
              <div className="des">Ayurveda, being a complete science of healthcare is based on the principles of "swasthasya saasthya samrakshanam" and aaturasya vikaraprashamanam". Hence aiming at the promotive, preventive, curative and rehabilitative aspects of sports persons, principles of Ayurveda can be effectively incorporated.</div>
            </div>
          </div>
          <div className="item ">
            <img src={img4} alt="Charmander"  />
            <div className="content">
              <div className="topic">PEOPLE FORUM</div>
              <div className="title">Business Model</div>
              <div className="type">Collaboration for a Sustainable Future</div>
              <button>See more</button>
              <div className="des">The business model of the People Forum of India revolves around establishing a collaborative platform for stakeholders across various sectors including businesses, government bodies, academia, and civil society. It serves as a nexus for dialogue and cooperation, aiming to address key socio-economic challenges in India through advocacy, networking, and knowledge exchange. </div>
            </div>
          </div>
          <div className="item">
            <img src={yoga} alt="Eevee"  />
            <div className="content">
              <div className="topic">PEOPLE FORUM</div>
              <div className="title">Carnoustie Wellness</div>
              <div className="type">Emphasizes Holistic Approaches</div>
              <button>See more</button>
              <div className="des">
Wellness tourism focuses on promoting health and well-being through activities such as spa treatments, yoga retreats, and mindfulness practices. It emphasizes holistic approaches to relaxation, rejuvenation, and personal growth, often set in tranquil and natural environments to foster mental and physical renewal.</div>
            </div>
          </div>
          <div className="item">
            <img src={img1} alt="Eevee"  />
            <div className="content">
              <div className="topic">PEOPLE FORUM</div>
              <div className="title">Sports Medicine</div>
              <div className="type">Vital For Sports Development</div>
              <button>See more</button>
              <div className="des">Sports is very competitive at all levels. Sports medicine playa a vital role in Development and progression of sports. Sports medicine helps in talent evaluation, support in better training & results, injury management including treatment & rehab</div>
            </div>
          </div>
        </div>
         <div class="thumbnail">
           
            <div class="item">
                <img src={img4} alt="" />
                <div class="content-1">
                    <div class="title">
                        Charlizad
                    </div>
                </div>
            </div>

            <div class="item">
                <img src={yoga} alt="" />
                <div class="content-1">
                    <div class="title">
                        Charmander
                    </div>
                </div>
            </div>

            <div class="item">
                <img src={medicine} alt="" />
                <div class="content-1">
                    <div class="title">
                        Eevee in pokeball
                    </div>
                </div>
            </div>
       
            <div class="item">
                <img src={img4} alt="" />
                <div class="content-1">
                    <div class="title">
                        Eevee
                    </div>
                </div>
            </div>
      
           
          
        </div> 
     
       <div className="thumbnail ">
          <div className="item ">
            <img src={yoga} alt="Charlizad"  />
            <div className="content-1">
              <div className="title"></div>
            </div>
          </div>
          <div className="item ">
            <img src={img4} alt="Charmander"  />
            <div className="content-1">
              <div className="title"></div>
            </div>
          </div>
          <div className="item ">
            <img src={medicine} alt="Eevee in pokeball"  />
            <div className="content-1">
              <div className="title"></div>
            </div>
          </div>
          <div className="item ">
            <img src={img1} alt="Eevee"  />
            <div className="content-1">
              <div className="title"></div>
            </div>
          </div>
          <div className="item">
            <img src={img2} alt="Pikachu" />
            <div className="content-1">
              <div className="title"></div>
            </div>
          </div>
        </div>
        <div className="arrows">
          <button id="prev" className="flex items-center justify-center" ref={prevRef}>
            <img className="h-[20px] w-[20px]" src={left} />
          </button>
          <button id="next" className="flex items-center justify-center" ref={nextRef}>
            <img className="h-[20px] w-[20px]" src={right} />
          </button>
        </div>
        <div className="time"></div>
      </div>
      </body>
    



      <Homesection2 />
      
   </>
  );
}

export default Home;
