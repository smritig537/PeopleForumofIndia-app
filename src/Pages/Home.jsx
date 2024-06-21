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
import arrow from "../images/arrow.png";
import Hero from "../components/Hero.js";
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
            <img src={img2} alt="Balbasaur" className="w-[100vw]" />
            <div className="content">
              <div className="topic">POKEMON</div>
              <div className="title">BALBASAUR</div>
              <div className="type">Dual-type pokemon</div>
              <button>See more</button>
              <div className="des">Bulbasaur is a dual-type Grass/Poison Pokémon introduced in Generation I...</div>
            </div>
          </div>
          <div className="item">
            <img src={img3} alt="Charlizad" />
            <div className="content">
              <div className="topic">POKEMON</div>
              <div className="title">CHARLIZAD</div>
              <div className="type">Dual-type pokemon</div>
              <button>See more</button>
              <div className="des">Charizard is a dual-type Fire/Flying Pokémon introduced in Generation I...</div>
            </div>
          </div>
          <div className="item">
            <img src={img4} alt="Charmander" />
            <div className="content">
              <div className="topic">POKEMON</div>
              <div className="title">CHARMANDER</div>
              <div className="type">Fire-type pokemon</div>
              <button>See more</button>
              <div className="des">Charmander, when captured in a Poké Ball, becomes a portable and loyal companion...</div>
            </div>
          </div>
          <div className="item">
            <img src={img5} alt="Eevee" />
            <div className="content">
              <div className="topic">POKEMON</div>
              <div className="title">EEVEE</div>
              <div className="type">Normal-type pokemon</div>
              <button>See more</button>
              <div className="des">Eevee, when inside a Poké Ball, is a versatile and adaptable companion...</div>
            </div>
          </div>
          <div className="item">
            <img src={img1} alt="Eevee" />
            <div className="content">
              <div className="topic">POKEMON</div>
              <div className="title">EEVEE</div>
              <div className="type">Normal-type pokemon</div>
              <button>See more</button>
              <div className="des">Eevee is a Normal-type Pokémon known for its unique ability to evolve...</div>
            </div>
          </div>
        </div>
        <div className="thumbnail">
          <div className="item">
            <img src={img3} alt="Charlizad" />
            <div className="content-1">
              <div className="title">Charlizad</div>
            </div>
          </div>
          <div className="item">
            <img src={img4} alt="Charmander" />
            <div className="content-1">
              <div className="title">Charmander</div>
            </div>
          </div>
          <div className="item">
            <img src={img5} alt="Eevee in pokeball" />
            <div className="content-1">
              <div className="title">Eevee in pokeball</div>
            </div>
          </div>
          <div className="item">
            <img src={img1} alt="Eevee" />
            <div className="content-1">
              <div className="title">Eevee</div>
            </div>
          </div>
          <div className="item">
            <img src={img2} alt="Pikachu" />
            <div className="content-1">
              <div className="title">Pikachu</div>
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
