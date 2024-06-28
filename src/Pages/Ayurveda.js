import React from 'react'
import Ayurveda1 from '../images/Ayurveda.png'
import Ayu from '../images/ayu.png'
import aims from '../images/aims.png'
import med from '../images/med.png'
const Ayurveda = () => {
  return (
    <>
      <div className='bg-white '>  
      <h1 className="text-7xl font-bold text-center text-[#006442] mb-10 py-20">SPORTS & ARYURVEDA</h1> 
      <div className="flex justify-center mb-8 ">
      <img className="h-auto max-w-full rounded-lg shadow-lg" src={Ayurveda1} alt=""/>
      </div>
      <p className="max-w-2xl mx-auto text-lg text-center text-justify text-gray-700">The modern medical science has recorded a terrific development in sports medicine, because of the constant application of newer inventions and development of advanced technologies. New research works are being invited by the sports community for the maintenance of health of sports professionals and for the treatment of sports related injuries. Ayurveda, being a complete science of healthcare is based on the principles of "swasthasya saasthya samrakshanam" and aaturasya vikaraprashamanam". Hence aiming at the promotive, preventive, curative and rehabilitative aspects of sports persons, principles of Ayurveda can be effectively incorporated. Very few direct references are available regarding sports related subjects in Ayurveda classics. But if efforts are made to understand these principles in depth, the roots of almost all</p>
      <div className="flex justify-center mb-8 ">
      <img className="h-auto max-w-full rounded-lg shadow-lg" src={Ayu} alt=""/>
  
      </div>
      <p className="max-w-2xl mx-auto text-lg text-center text-justify text-gray-700">it can be understand that, Ayurveda principles can be effectively incorporated into the field of sports medicine for maintaining the fitness and improving the performance level os sports persons.
      <br/>
      Ayurveda is both preventive as well as curative and will play a major role in Sports medicine. There are seven dhatu (body-tissues) that give form and shape to the human body.
      <br/>
      In sport medicine mamsa (Muscles), Asthi (bones) are main dhatu ans snayu (ligaments), kandra (tendons) are upadhatu which deals with sports injury. Ayurveda, the functions of asthi (Bones) is to give shape & structure to our body Ligaments, muscles and tendons are connected to asthi. Having strong bones means having a strong body.</p>

      <h1 className="text-7xl font-bold text-center text-[#006442] mb-10 py-20">
      Aims of Ayurvedic
      Sports Medicine</h1>
      <div className="flex justify-center mb-8 "><img className="h-auto max-w-full rounded-lg shadow-lg" src={aims} alt=""/></div>
      <h2 className='text-italics text-[#0c9815] text-2xl text-center'>Prakritisthaapana (Conditioning of Sports Person):
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-center text-justify text-gray-700">To regain physical fitness of a sports person and send him back to the field as early as possible.
    <br/>
      To evaluate the effects of various principles of Ayurvedic management in different sports injuries.</p>
      <h2 className='text-italics text-[#0c9815] text-2xl text-center'>Objective of Ayurvedic Sports Medicine
      <p className="max-w-2xl mx-auto text-lg text-center text-justify text-gray-700">
      • Prevention of injuries and illness related with sports and other activites
      
      Early treatment of sports related injuries and illness.
      <br/>
      • Improvement of physical fitness and performance of sports person.
      
      Design of treatment, exercise and nutrition programs for maintaining pea
      
      physical performance.
      </p>
      </h2>
      <h2 className='text-italics text-[#0c9815] text-2xl text-center'>Treatment of acute and chronic injuries
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-center text-justify text-gray-700">
      Rehabilitation of sports injuries with Panchakarma treatment and exercises

      Conditioning by complementary therapy of Ayurveda, Physiotherapy and Yoga

      Better and quick results for post-operative and traumatic complications.

      Early recovery and back to sports:

      Special treatment to promote strength and tone of the muscles.

      Ayurvedic herbal combination for better performance.
      </p>
      <div className="flex justify-center mb-8 "><img className="h-auto max-w-full rounded-lg shadow-lg" src={med} alt=""/></div>
      </div>
    </>
  )
}

export default Ayurveda
