import React from 'react';

const Hero = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center pt-20">
      
      {/* Left Vertical Sidebar Text */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <p className="rotate-[-90deg] origin-left text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold whitespace-nowrap">
          JS Developer — Based in Pakistan
        </p>
        <div className="h-24 w-[1px] bg-gray-300 mt-20 ml-1"></div>
      </div>

      <div className="container mx-auto px-10 flex flex-col lg:flex-row items-center justify-between">
        
        <div className="z-10 w-full lg:w-1/2 mb-10 lg:mb-0">
          <div className="flex space-x-12 mb-16">
            <div>
              <h3 className="text-4xl font-light text-blue-900">+200</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Project completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-light text-blue-900">+50</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Startup raised</p>
            </div>
          </div>

          <div className="relative">
            <h1 className="text-[80px] md:text-[150px] font-medium leading-none tracking-tighter text-slate-900">
              Hello
            </h1>
            <div className="flex items-center mt-4 space-x-4">
              <div className="h-[1px] w-8 bg-black"></div>
              <p className="text-lg text-gray-700 italic">
                It's <span className="font-bold text-black text-xl">Hamza Imtiaz</span>, a JS developer.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-end relative">
          <div className="grayscale contrast-125 rounded-2xl overflow-hidden shadow-2xl shadow-blue-200">
            <img 
  src="/hamzaimtiaz2023.jpeg" 
  alt="Hamza Imtiaz Portrait" 
  className="max-h-[75vh] object-contain rounded-xl shadow-lg"
/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;