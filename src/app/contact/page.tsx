import React from "react";
import ClientWrapper from "../../components/ClientWrapper";

export default function Contact() {
  return (
    <>
      <ClientWrapper />
      
      <div className="relative min-h-screen z-10 flex flex-col items-center justify-center">
        <main className="container mx-auto px-4 py-20 mt-16">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-3xl mx-auto fade-in">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 fade-in-up">Contact Me</h1>
            <p className="text-lg text-gray-700 mb-8 fade-in-up fade-in-delay-1">
              I'm always open to new opportunities and collaborations. Feel free to get in touch using the form below.
            </p>
            
            <form className="space-y-4">
              <div className="fade-in-up fade-in-delay-1">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              
              <div className="fade-in-up fade-in-delay-1">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              
              <div className="fade-in-up fade-in-delay-2">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors hover-scale fade-in-up fade-in-delay-3"
              >
                Send Message
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
