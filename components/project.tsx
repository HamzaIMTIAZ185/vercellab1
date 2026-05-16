import React from 'react';

const Projects = () => {
  const projectList = [
    {
      num: "01",
      title: "GrainScale AI: Low-Level CV for Rice Morphometry",
      impact: "Engineered a custom image processing pipeline to automate rice quality assessment without the use of high-level CV libraries. By working directly with raw pixel arrays, developed a scale normalization framework using a fiducial reference (coin) and automated morphological profiling.",
      work: "Implemented manual thresholding, spatial filtering, and edge detection to segment individual grains. Extracted precise length, width, and aspect metrics calculating Euclidean distances at the pixel level, compiling metrics to structured formats. Demonstrates Matrix Manipulation, Digital Image Fundamentals, and Custom Feature Extraction logic."
    },
    {
      num: "02",
      title: "E-Governance Transparency Dashboard",
      impact: "Developed a web-based infrastructure designed to provide direct transparency into public sector metrics—including resource allocation, live execution timelines, and completion status. Focused heavily on translating complex operational requirements into system specifications during the architecture design phase.",
      work: "Handled end-to-end full-stack assembly, mapping out system schemas and real-time synchronization pipelines. Programmed a responsive database visualization module pulling accurate information updates dynamically. Showcases Full-Stack Development, System Architecture Design (SRS), and Information Management."
    },
    {
      num: "03",
      title: "Neural-Snake: Real-Time State Engine",
      impact: "Developed a performance-optimized execution engine in C++ focusing on low-latency memory operations and explicit data structures. The runtime loops feature near-zero input processing delays and optimized frame updates natively inside compiler layout configurations.",
      work: "Utilized a custom Doubly Linked List structure to maintain coordinates for complex allocations, yielding O(1) operational complexities for body updates. Created manual directional spatial bounding logic and pointer configurations to control runtime loops smoothly. Highlights Dynamic Memory Allocation, Pointer Arithmetic, and State Management."
    },
    {
      num: "04",
      title: "Pakistan Import-Export Relational Database",
      impact: "Architected a high-throughput transaction and structural storage database using MySQL specifically modeled to capture, profile, and search macroscopic tracking patterns across custom cross-border logistic pathways.",
      work: "Designed normalized multidimensional database schemas with explicitly defined data constraints and index lookups. Programmed complex analytical SQL queries to optimize query runtime operations and eliminate redundancy across massive data blocks. Highlights Schema Architecture, Custom Query Optimization, and Data Management."
    }
  ];

  return (
    <section className="py-24 bg-blue-50/50 border-t border-gray-200">
      <div className="container mx-auto px-10">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-blue-600 font-bold mb-2">02 / Technical Work</p>
          <h2 className="text-4xl font-medium tracking-tight text-slate-900">Selected Projects</h2>
        </div>

        {/* Project Layout List */}
        <div className="space-y-20">
          {projectList.map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-200 pt-8 group">
              {/* Project Index Number */}
              <div className="lg:col-span-1 text-sm font-mono text-gray-400 group-hover:text-blue-600 transition-colors">
                {project.num}
              </div>

              {/* Title */}
              <div className="lg:col-span-4">
                <h3 className="text-xl font-medium text-slate-950 leading-snug">{project.title}</h3>
              </div>

              {/* Engineering Details */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Technical Impact</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{project.impact}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Engineering Work</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{project.work}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;