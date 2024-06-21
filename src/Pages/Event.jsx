import React from 'react'

const Event = () => {
  return (
    <>
    <section className="py-20 bg-gray-100">
    <div className="container px-4 mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800">Our Events</h2>
      <p className="max-w-2xl mx-auto mt-4 text-gray-600">Join us in our upcoming events to connect with like-minded
        individuals and make a difference in your community.</p>
      <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-indigo-600">Event 1</h3>
          <p className="mt-4 text-gray-600">Details about Event 1</p>
          <a href="#" className="inline-block mt-4 text-indigo-600">Learn More</a>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-indigo-600">Event 2</h3>
          <p className="mt-4 text-gray-600">Details about Event 2</p>
          <a href="#" className="inline-block mt-4 text-indigo-600">Learn More</a>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-indigo-600">Event 3</h3>
          <p className="mt-4 text-gray-600">Details about Event 3</p>
          <a href="#" className="inline-block mt-4 text-indigo-600">Learn More</a>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Event
