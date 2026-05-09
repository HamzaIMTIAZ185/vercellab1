import React from 'react';
import Head from 'next/head';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black font-sans selection:bg-gray-200">
      <Head>
        <title>Portfolio | Hamza Imtiaz</title>
      </Head>

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-10 py-8 fixed w-full z-10">
        <div className="text-2xl font-bold tracking-tighter">
          {/* Simple Logo Placeholder */}
          <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
             <span className="text-white text-xs">H</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-black transition">About Me</a>
          <a href="#" className="hover:text-black transition">Portfolio</a>
          <a href="#" className="hover:text-black transition">Services</a>
          <a href="#" className="hover:text-black transition">Blog</a>
        </div>
        <div className="text-sm font-bold border-b-2 border-black cursor-pointer pb-0.5">
          Book A Call ↗
        </div>
      </nav>

      <main className="relative flex min-h-screen items-center justify-center pt-20">
        
        {/* Left Vertical Sidebar Text */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block">
          <p className="rotate-[-90deg] origin-left text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold whitespace-nowrap">
            Product Designer — Based in Pakistan
          </p>
          <div className="h-24 w-[1px] bg-gray-300 mt-20 ml-1"></div>
        </div>

        <div className="container mx-auto px-10 flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Content Area */}
          <div className="z-10 w-full lg:w-1/2 mb-10 lg:mb-0">
            {/* Stats row */}
            <div className="flex space-x-12 mb-16">
              <div>
                <h3 className="text-4xl font-light">+200</h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Project completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-light">+50</h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Startup raised</p>
              </div>
            </div>

            {/* Main Heading */}
            <div className="relative">
              <h1 className="text-[120px] md:text-[180px] font-medium leading-none tracking-tighter">
                Hello
              </h1>
              <div className="flex items-center mt-4 space-x-4">
                <div className="h-[1px] w-8 bg-black"></div>
                <p className="text-lg text-gray-700 italic">
                  It's <span className="font-bold">Hamza</span>, a design wizard.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="w-full lg:w-1/2 flex justify-end relative">
            <div className="grayscale contrast-125 transition-all duration-700 hover:grayscale-0">
              {/* Replace the src with your actual photo later */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Portrait" 
                className="max-h-[80vh] object-contain"
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}