import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <section className="py-20 text-white bg-indigo-600">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg md:text-xl-justify">The People Forum of India serves as a platform for citizens from diverse backgrounds to voice their concerns, share ideas, and collaborate for the betterment of society. Through dialogue and collective action, we strive to address social issues, promote inclusivity, and uphold democratic values. Together, we envision a more equitable and prosperous India where every voice is heard and every individual is empowered to contribute to nation-building. Join us in shaping the future of our country through meaningful engagement and advocacy.</p>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-jusity">The People Forum Of India is a non-profit organization dedicated to fostering dialogue, promoting social justice, and empowering communities across India. We aim to bring people together to discuss critical issues, share knowledge, and work towards a more inclusive and equitable society.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              <p className="mt-4 text-gray-600">Our vision is to create a platform where voices from all walks of life can come together, share their stories, and collaborate on solutions for the challenges we face as a society. We believe in the power of community and the strength of collective action.</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/600x400" alt="Community" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <img src="https://via.placeholder.com/600x400" alt="Team" className="rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
              <ul className="mt-4 text-gray-600 list-disc list-inside">
                <li>Inclusivity</li>
                <li>Equality</li>
                <li>Transparency</li>
                <li>Collaboration</li>
                <li>Empowerment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
