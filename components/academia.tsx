import React from 'react';

const Academia = () => {
  const certifications = [
    { title: "AWS Academy Graduate: Cloud Foundations", issuer: "AWS Academy", license: "162237" },
    { title: "Neural Networks and Deep Learning", issuer: "DeepLearning.AI / Coursera" },
    { title: "How to Write a Research Paper", issuer: "Higher Education Commission / Coursera" },
    { title: "Microsoft Excel: Data Analysis & Visualization", issuer: "Coursera" }
  ];

  const achievements = [
    "Active involvement in cloud computing, data analysis, and AI-focused learning.",
    "Completed industry-recognized certifications in cloud technologies and deep learning.",
    "Developed strong analytical and research-oriented problem-solving skills."
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-10">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-blue-600 font-bold mb-2">01 / Education & Credentials</p>
          <h2 className="text-4xl font-medium tracking-tight text-slate-900">Academia</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Degree Block */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-gray-200 pb-8 lg:pb-0 lg:pr-8">
            <span className="text-xs font-mono text-gray-400">Degree</span>
            <h3 className="text-2xl font-medium text-slate-950 mt-2">University of Central Punjab</h3>
            <p className="text-lg text-gray-600 mt-1">Bachelor’s in Computer Science</p>
          </div>

          {/* Certifications and Focus */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-xs font-mono text-gray-400 block mb-4">Certifications</span>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex justify-between items-start border-b border-gray-100 pb-3 last:border-0">
                    <div>
                      <h4 className="text-sm font-medium text-slate-900">{cert.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{cert.issuer}</p>
                    </div>
                    {cert.license && (
                      <span className="text-[10px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                        ID: {cert.license}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-gray-400 block mb-3">Academic Key Focus</span>
              <ul className="space-y-2.5">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <span className="text-blue-600 mr-2.5 mt-1 text-xs">▪</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academia;