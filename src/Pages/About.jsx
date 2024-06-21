import React from 'react';
import teamPhoto from '../images/firstpick.jpg'; // Replace with your actual image paths


const About = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container px-4 py-16 mx-auto">
          <h1 className="mb-12 text-4xl font-bold text-center text-gray-800">About Us</h1>

          <section className="mb-16">
            <div className="flex flex-col items-center md:flex-row">
              
              <div className="mt-6 text-center md:mt-0 md:ml-8 md:text-left">
                <h2 className="text-3xl font-bold text-gray-800">Our Founder</h2>
                <p className="mt-4 text-gray-600">
                  Our founder, John Doe, has always been passionate about creating exceptional web experiences. With over
                  15 years in the industry, John has led our team to success through innovation and dedication.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Our Mission</h2>
            <p className="max-w-3xl mx-auto text-center text-gray-600">
              At Our Company, our mission is to deliver high-quality web solutions that exceed our clients' expectations.
              We strive for excellence in every project, ensuring that each one is tailored to meet the unique needs of our
              clients. Our dedication to innovation and customer satisfaction sets us apart in the industry.
            </p>
          </section>

          <section>
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Meet Our Team</h2>
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <img src={teamPhoto} alt="Team Member" className="w-32 h-32 mx-auto rounded-full" />
                  <h3 className="mt-4 text-2xl font-bold text-center text-gray-800">Jane Smith</h3>
                  <p className="text-center text-gray-600">Lead Developer</p>
                </div>
              </div>
              <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <img src={teamPhoto} alt="Team Member" className="w-32 h-32 mx-auto rounded-full" />
                  <h3 className="mt-4 text-2xl font-bold text-center text-gray-800">Bob Johnson</h3>
                  <p className="text-center text-gray-600">UI/UX Designer</p>
                </div>
              </div>
              <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <img src={teamPhoto} alt="Team Member" className="w-32 h-32 mx-auto rounded-full" />
                  <h3 className="mt-4 text-2xl font-bold text-center text-gray-800">Alice Brown</h3>
                  <p className="text-center text-gray-600">Project Manager</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
