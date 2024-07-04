import React from 'react'
import Farmer from '../images/farmer.jpg'
import Wheat from '../images/wheatIndia (1).jpg'
import Potato from '../images/Potato.jpg'
import Onion from '../images/Onion.jpg'
import corn from '../images/corn.png'
import Millets from '../images/Millets.jpg'
const Agriculture = () => {
  return (
    <>
      <h1 className="text-7xl font-bold text-center text-[#006442] mb-10 py-10">Agriculture</h1>
      <p className="max-w-2xl mx-auto text-lg text-center text-justify text-gray-700">The Agriculture in India is a pivotal sector, contributing around 15-18% to the GDP and employing nearly 50% of the workforce. With its diverse climate and geography, India supports a wide variety of crops including rice, wheat, pulses, oilseeds, and cash crops like cotton and sugarcane. The Green Revolution in the 1960s significantly boosted food grain production, but the sector still faces challenges such as small fragmented land holdings, dependence on monsoons, soil degradation, and water scarcity. Government initiatives like the Pradhan Mantri Krishi Sinchai Yojana and technological advancements in digital platforms and precision farming aim to address these issues, ensuring sustainable growth and improved livelihoods for farmers.</p>
     
     <h1 className="text-5xl font-bold text-center text-[#006442] mb-10 py-10">Rice</h1>
     <p className="max-w-2xl mx-auto text-lg text-center text-justify text-gray-700">Rice is the seed of the grass species Oryza sativa or Oryza glaberrima, widely consumed as a staple food, especially in Asia. It comes in varieties such as long-grain, medium-grain, and short-grain, each preferred in different cuisines. Rice can be white, brown, or black, depending on processing. Brown rice retains more nutrients than white rice. Its cultivation requires substantial water, contributing to environmental concerns. Despite this, rice paddies support biodiversity. Culturally, rice holds significance in rituals and celebrations worldwide.</p>
     <img className="h-auto rounded-lg shadow-lg w-200" src={Farmer} alt=""/>

     <h1 className="text-5xl font-bold text-center text-[#006442] mb-10 py-10">Wheat</h1>
     <p className="max-w-2xl mx-auto text-lg text-center text-justify text-gray-700">Wheat is nutritionally rich, providing essential carbohydrates, fiber, and protein to diets worldwide. Sustainable farming practices are increasingly emphasized to address environmental concerns associated with wheat cultivation, ensuring its continued role in global food security and agricultural economies.</p>
     <img className="h-auto rounded-lg shadow-lg w-200" src={Wheat} alt=''/>

     <h1 className="text-5xl font-bold text-center text-[#006442] mb-10 py-10">Potato</h1>
     <p className="max-w-2xl mx-auto text-lg text-center text-justify text-gray-700">In the embrace of the countryside, a Potato Field unfurls its bounty, each spud a testament to the earth's nurturing touch and the farmer's steadfast care.</p>
     <img className="h-auto rounded-lg shadow-lg w-200" src={Potato} alt=''/>

     <h1 className="text-5xl font-bold text-center text-[#006442] mb-10 py-10">Onion</h1>
     <p className="max-w-2xl mx-auto text-lg text-center text-justify text-gray-700">In the tranquil countryside, the Onion Field stretches its leafy tendrils, each bulb brimming with the promise of savory tang and culinary versatility. Engulfed in the earth's embrace, it whispers tales of growth and nourishment, embodying the essence of rustic abundance.</p>
     <img className="h-auto rounded-lg shadow-lg w-200" src={Onion} alt=''/>

     <h1 className="text-5xl font-bold text-center text-[#006442] mb-10 py-10">Maize</h1>
     <p className="max-w-2xl mx-auto text-lg text-center text-justify text-gray-700">In India, maize is a crucial crop both for food and industrial purposes. It is grown in diverse agro-climatic zones, making it adaptable to various regions across the country. Major maize-producing states include Karnataka, Andhra Pradesh, Tamil Nadu, Rajasthan, and Maharashtra. Maize is used for human consumption in the form of flour, porridge, and various traditional dishes. It also plays a significant role in the poultry and livestock feed industry. Additionally, maize is an important raw material for producing starch, sweeteners, and biofuels. The crop contributes to the livelihoods of millions of smallholder farmers and is integral to India's agricultural economy.</p>
     <img className="w-auto h-full mx-3 sm:w-full sm:m-auto rounded-xl" src={corn} alt=''/>

     <h1 className="text-5xl font-bold text-center text-[#006442] mb-10 py-10">Millets</h1>
     <p className="max-w-2xl mx-auto text-lg text-center text-justify text-gray-700">Millets are small-seeded cereal grains widely cultivated in India for their nutritional benefits and resilience to harsh climates. They include varieties like pearl millet (bajra), finger millet (ragi), sorghum (jowar), foxtail millet (kakum), barnyard millet (sanwa), proso millet (chena), little millet (kutki), and kodo millet (kodon). Major millet-producing states include Rajasthan, Karnataka, Andhra Pradesh, Tamil Nadu, and Maharashtra. Millets are rich in proteins, fibers, vitamins, and minerals, making them an essential part of the diet in many regions. They are used in traditional dishes, porridges, and as a staple food, contributing significantly to food security and the livelihoods of smallholder farmers in India.</p>
     <img className="w-auto h-full mx-3 sm:w-full sm:m-auto rounded-xl" src={Millets} alt=''/>
    </>
  )
}

export default Agriculture
