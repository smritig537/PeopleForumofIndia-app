import React from 'react'
import { useEffect ,useRef} from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import "./Homeresp.css";
// import "./Home.js";
import img5 from "../images/Agriculture.png";
import img4 from "../images/pie.png";
import img3 from "../images/hut..png";
import img2 from "../images/cow.jpg";
import left from "../images/left.png";
import right from "../images/right.png";
import img1 from "../images/Grass.jpg";
import logo from "../images/logo.png";
import Homesection2 from '../components/Homesection2.jsx';
import arrow from "../images/arrow.png";
import Hero from "../components/Hero.js";
import Homesection3 from '../components/Homesection3.jsx';
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

  return (
    <>
 
      <div className="container w-[100%]">
        <div className="list">
          <div className="item">
            <img src={img2} alt="cow" className="w-[100vw]" />
            <div className="content">
              <div className="topic">PEOPLE FORUM</div>
              <div className="title">Organic Agriculture</div>
              <div className="type">Mystical Zones</div>
              <button>See more</button>
              <div className="des">The Global City is set in the spiritual landscape which we have identified as mystical zones.</div>
            </div>
          </div>
          <div className="item">
            <img src={img5} alt="Charlizad" />
            <div className="content">
              <div className="topic">PEOPLE FORUM</div>
              <div className="title">RAMESHWARAM</div>
              <div className="type">An Auspicious Temple</div>
              <button>See more</button>
              <div className="des">Rameshwaram, an island off the southeastern coast of India, is renowned for its historic temples, most notably the Ramanathaswamy Temple, revered by Hindus as one of the twelve Jyotirlinga shrines. It holds cultural significance as a pilgrimage site and is famed for its stunning beaches and traditional architecture.</div>
            </div>
          </div>
          <div className="item">
            <img src={img4} alt="Charmander" />
            <div className="content">
              <div className="topic">PEOPLE FORUM</div>
              <div className="title">Religion and Spirituality</div>
              <div className="type">A Preferred Global Destination for Tourists</div>
              <button>See more</button>
              <div className="des">Religion and Spirituality are both rooted in the same foundation to understand the meaning of life.The idea of religion and Spirituality is like a rectangule versus a square</div>
            </div>
          </div>
          <div className="item">
            <img src={img3} alt="Eevee" />
            <div className="content">
              <div className="topic">PEOPLE FORUM</div>
              <div className="title">WELNESS TOURISM</div>
              <div className="type">Emphasizes Holistic Approaches</div>
              <button>See more</button>
              <div className="des">
ChatGPT
Wellness tourism focuses on promoting health and well-being through activities such as spa treatments, yoga retreats, and mindfulness practices. It emphasizes holistic approaches to relaxation, rejuvenation, and personal growth, often set in tranquil and natural environments to foster mental and physical renewal.</div>
            </div>
          </div>
          <div className="item">
            <img src={img1} alt="Eevee" />
            <div className="content">
              <div className="topic">PEOPLE FORUM</div>
              <div className="title">Adi Shankaracharya</div>
              <div className="type">A Great Spiritual Catalyst</div>
              <button>See more</button>
              <div className="des">It is believed that Lord Shiva of the Ramanathaswamy temple was consecrated by Lord
Rama. Adi Shankaracharya, during his ‘Dig Vijaya’, Spiritual conquest of the whole
country visited the shrine and anointed lord Rama with the holy water from Ganges,
reciting ‘Sri Rudram’</div>
            </div>
          </div>
        </div>
        <div className="thumbnail">
          <div className="item">
            <img src={img3} alt="Charlizad" />
            <div className="content-1">
              <div className="title"></div>
            </div>
          </div>
          <div className="item">
            <img src={img4} alt="Charmander" />
            <div className="content-1">
              <div className="title"></div>
            </div>
          </div>
          <div className="item">
            <img src={img5} alt="Eevee in pokeball" />
            <div className="content-1">
              <div className="title"></div>
            </div>
          </div>
          <div className="item">
            <img src={img1} alt="Eevee" />
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
      <Homesection2 />
      
   </>
  );
}

export default Home;
