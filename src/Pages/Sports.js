import React from 'react'
import Sportsman from '../images/Sports.png';
import Sports1 from '../images/sports1.png'
import Sports2 from '../images/sports2.png'
const Sports = () => {
  return (
    <>
    <div className='bg-gray-100'>
     <h1 className="text-6xl font-bold text-center text-[#4db8d6] mb-10 py-20">
     SPORTS MEDICINE
     </h1>
     <h2 className="mb-5 text-5xl font-semibold text-center text-blue-500">
            Vital for Sports Development
          </h2>
    
          <div className="flex justify-center mb-8 ">
          <img className="h-auto max-w-full rounded-lg shadow-lg" src={Sportsman} alt="Sportsman" />
          
      
        </div>
        <p className="max-w-2xl mx-auto text-lg text-center text-justify text-gray-700">
          Sports medicine is an essential aspect of sports development and overall athlete health. It encompasses a range of practices aimed at preventing injuries, enhancing performance, and ensuring quick recovery for athletes. Understanding sports medicine is vital for coaches, trainers, and athletes alike to maintain peak physical condition and achieve their best performances.
        </p>
        <div className="flex justify-center mb-8 ">
        <img className="h-auto max-w-full rounded-lg shadow-lg" src={Sports1} alt=""/>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-center text-justify text-gray-700">1. Sports very competitive at all levels. Sports medicine plays a vital role in development and progression of sport<br></br>

        2. Sports medicine helps in talent evaluation, support in better training & results, injury management including treatment & rehab<br/>
        
        3. Sports injuries are very common. Elite sportspersons are out of action for long periods, overall performance also gets affected<br/>
        
        4. Mangement of sports injuries only possible at 'Sports Medicine Centres' & currently very few in our country<br/>
        
        5. Establishment of Sports medicine centres: a must at National, State & District level</p>
       <div>
       <h1 className="text-6xl font-bold text-center text-[#4db8d6] mb-10 py-20">CENTRE OF EXCELLENCE FOR SPORTS MEDICINE
       </h1>
       <h2 className="mb-5 text-5xl font-semibold text-center text-blue-500">
       SPORTS MEDICINE
       </h2>
       <p className="max-w-2xl mx-auto text-lg text-center text-justify text-gray-700">
       The Centre of excellence for sports medicine based on our ancient wisdom of Ayurveda, Kalari, Marma, Yoga, Diet and Nutrition.
       <ol>
       <h2 className="py-5 mb-5 text-3xl font-semibold text-center text-blue-500"> Pre-Event Conditioning of Sports Person</h2>
       <li className='text-jutify'>
       Event wise body type assessment and conditioning
       </li>
       <li>Diet management
       </li>
       <li>Kerala Ayurveda treatment
       </li>
       <li>Marma Therapy
       </li>
       <li>Gym/Workouts</li>
       <li>Injury Management</li>
       <li>Examination and assessment of the injury</li>
       <li>Treatment of Injury</li>
       
       <h2 className="py-5 mb-5 text-5xl font-semibold text-center text-blue-500">
       Ayurveda 
       (Kerala Ayurveda treatments & Para surgical techniques)
       </h2>
       <li>Marma Therapy</li>
       <li>Rehabilitation (Ortho-Neuro, Physical Fitness & Endurance)</li>
       <li>Kerala Ayurveda treatments
       </li>
       <li>Yoga/Kalari/Meditation</li>
       <li>Gym/Workouts
       </li>
       <li>Diet management
       </li>
       <h4 className="py-5 mb-5 text-3xl font-semibold text-center text-blue-500">
        Programs offered
       </h4>     
       <li>Bachelor's of Science in Sports Medicine</li>
       <li>Bachelor's of Science in Health, Fitness and Training
       </li>
       </ol> 
            
       </p>
       <div className="flex justify-center mb-8 ">
       <img className="h-auto max-w-full rounded-lg shadow-lg" src={Sports2} alt=""/>
       </div>
       </div>       
  </div>
  
   
    </>
  )
}

export default Sports
