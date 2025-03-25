import React from "react";
import ClientWrapper from "../../components/ClientWrapper";

export default function Work() {
  return (
    <>
      <ClientWrapper />
      
      <div className="relative min-h-screen z-10 flex flex-col items-center justify-center">
        <main className="container mx-auto px-4 py-20 mt-16">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-3xl mx-auto fade-in">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 fade-in-up">My Work</h1>
            <p className="text-lg text-gray-700 mb-8 fade-in-up fade-in-delay-1">
              Here are some of the projects I've worked on. Each project represents my skills and passion for creating meaningful web experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 p-4 rounded shadow hover-scale fade-in-up fade-in-delay-1">
                <div className="h-40 bg-gray-200 rounded mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Project One</h3>
                <p className="text-gray-700">A brief description of the project and technologies used.</p>
              </div>
              
              <div className="bg-white/80 p-4 rounded shadow hover-scale fade-in-up fade-in-delay-2">
                <div className="h-40 bg-gray-200 rounded mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Project Two</h3>
                <p className="text-gray-700">A brief description of the project and technologies used.</p>
              </div>
              
              <div className="bg-white/80 p-4 rounded shadow hover-scale fade-in-up fade-in-delay-3">
                <div className="h-40 bg-gray-200 rounded mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Project Three</h3>
                <p className="text-gray-700">A brief description of the project and technologies used.</p>
              </div>
              
              <div className="bg-white/80 p-4 rounded shadow hover-scale fade-in-up fade-in-delay-4">
                <div className="h-40 bg-gray-200 rounded mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Project Four</h3>
                <p className="text-gray-700">A brief description of the project and technologies used.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
