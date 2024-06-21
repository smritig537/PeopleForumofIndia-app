import React from 'react';
import Navbar from './Navbar';

const AboutSection = () => {
    return (
        <>
    
        <section className="py-12 text-gray-800 bg-gray-100">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        People Forum of India
                    </p>
                    <p className="max-w-2xl mt-4 text-xl text-gray-600 lg:mx-auto">
                        The People Forum of India is a platform dedicated to fostering discussion, collaboration, and action on key issues facing the nation. We aim to bring together voices from all walks of life to promote understanding, progress, and positive change.
                    </p>
                </div>
                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h10M7 16h10M5 8h.01M5 12h.01M5 16h.01M19 8h.01M19 12h.01M19 16h.01M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Our Mission</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-600">
                                To provide a platform for dialogue and action on important social, economic, and political issues.
                            </dd>
                        </div>

                        <div className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3-3 3 3M8 15l3 3 3-3M11 12h2"></path>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Our Vision</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-600">
                                To create a more informed, engaged, and active citizenry, capable of driving positive change.
                            </dd>
                        </div>

                        <div className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zM12 14c2.21 0 4 1.79 4 4v1H8v-1c0-2.21 1.79-4 4-4z"></path>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Our Values</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-600">
                                Integrity, Inclusiveness, and Innovation.
                            </dd>
                        </div>

                        <div className="relative">
                            <dt>
                                <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg font-medium leading-6 text-gray-900"> Get Involved </p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-600">
                                Join us in our efforts to make a difference. Participate in our forums, contribute to our discussions, and help us drive change.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
        </>
    );
}

export default AboutSection;