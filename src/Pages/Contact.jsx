import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="py-20">
    <div className="container px-4 mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
      <p className="max-w-2xl mx-auto mt-4 text-gray-600">Have questions or want to get involved? Reach out to us!</p>
      <form className="max-w-xl mx-auto mt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input type="text" placeholder="Name" className="p-2 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded-lg" />
        </div>
        <textarea placeholder="Message" className="w-full p-2 mt-4 border border-gray-300 rounded-lg" rows="4"></textarea>
        <button type="submit" className="px-6 py-2 mt-4 text-white bg-indigo-600 rounded-full">Send Message</button>
      </form>
    </div>
  </section> 
    </>
  )
}

export default Contact
