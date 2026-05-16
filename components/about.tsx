import React from 'react';

const About = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Label Left side */}
        <div className="lg:col-span-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-blue-600 font-bold mb-2">00 / Profile Summary</p>
          <h2 className="text-2xl font-medium tracking-tight text-slate-900">Muhammad Hamza Imtiaz</h2>
          <p className="text-sm font-mono text-gray-400 mt-1">Cloud & Systems Engineer</p>
        </div>

        {/* Details right side */}
        <div className="lg:col-span-8">
          <p className="text-xl text-gray-800 leading-relaxed font-light">
            Specializing in the intersection of cloud architecture and high-performance data processing, I engineer scalable solutions using AWS and GCP. 
          </p>
          <p className="text-base text-gray-600 leading-relaxed mt-6">
            My technical focus centers on optimizing Linux environments and developing Python-based image processing pipelines that prioritize efficiency and system reliability. I bridge the gap between complex data requirements and robust cloud infrastructure, delivering production-ready code designed for enterprise-scale deployment and long-term maintainability.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default About;