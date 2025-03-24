import ClientWrapper from "../components/ClientWrapper";

export default function Home() {
  return (
    <>
      <ClientWrapper />
      
      <div className="relative min-h-screen z-10 flex flex-col items-center justify-center">
        <main className="container mx-auto px-4 py-20 mt-16">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-3xl mx-auto fade-in">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 fade-in-up">Welcome to My Portfolio</h1>
            <p className="text-lg text-gray-700 mb-8 fade-in-up fade-in-delay-1">
              I&apos;m a passionate developer creating beautiful and functional web experiences.
              Explore my work and get in touch if you&apos;d like to collaborate on a project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up fade-in-delay-2">
              <a 
                href="#about" 
                className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors text-center hover-scale"
              >
                Learn More
              </a>
              <a 
                href="#contact" 
                className="border border-gray-800 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-center hover-scale"
              >
                Contact Me
              </a>
            </div>
          </div>
        </main>
        
        <section id="about" className="container mx-auto px-4 py-20">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 fade-in-up">About</h2>
            <p className="text-lg text-gray-700 mb-4 fade-in-up fade-in-delay-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
              Vivamus hendrerit arcu sed erat molestie vehicula.
            </p>
            <p className="text-lg text-gray-700 fade-in-up fade-in-delay-2">
              Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. 
              Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
            </p>
          </div>
        </section>
        
        <section id="works" className="container mx-auto px-4 py-20">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 fade-in-up">Works</h2>
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
            </div>
          </div>
        </section>
        
        <section id="contact" className="container mx-auto px-4 py-20 mb-10">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 fade-in-up">Contact</h2>
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
        </section>
      </div>
    </>
  );
}
