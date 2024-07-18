import React from 'react';

function Contact() {
  return (
    <section id="Contact" name="Contact">
    <div name="Contact" className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="font-bold mb-4 text-3xl text-center">Contact</h1>
        <h2 className="font-bold mb-4 text-md text-center">Please fill out the form below to contact me</h2>
        <form action="https://getform.io/f/bgdylrga" 
        method="POST"
        className="space-y-6">
          <h1 className="text-lg font-medium">Send your Message</h1>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                required
              />
              <span className="text-red-500"> *</span>
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                required
              />
              <span className="text-red-500"> *</span>
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium">Message:</label>
              <textarea
                id="message"
                name="message"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                rows="5"
                required
              ></textarea>
              <span className="text-red-500"> *</span>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </section>
  );
}

export default Contact;
