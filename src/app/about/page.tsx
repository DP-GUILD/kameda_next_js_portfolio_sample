import React from "react";
import ClientWrapper from "../../components/ClientWrapper";

export default function About() {
  return (
    <>
      <ClientWrapper />
      
      <div className="relative min-h-screen z-10 flex flex-col items-center justify-center">
        <main className="container mx-auto px-4 py-20 mt-16">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-3xl mx-auto fade-in">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 fade-in-up">About Me</h1>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 fade-in-up fade-in-delay-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                Vivamus hendrerit arcu sed erat molestie vehicula.
              </p>
              <p className="text-lg text-gray-700 fade-in-up fade-in-delay-2">
                Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. 
                Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
              </p>
              <p className="text-lg text-gray-700 fade-in-up fade-in-delay-3">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
                Morbi lacinia molestie dui. Praesent blandit dolor. 
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
