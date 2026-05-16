import React from 'react';

const Contact = () => {
  const networks = [
    { label: "GitHub", href: "https://github.com/HamzaIMTIAZ185", username: "HamzaIMTIAZ185" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-hamza-imtiaz-26621b409/", username: "muhammad-hamza-imtiaz" }
  ];

  return (
    <section className="bg-slate-950 text-white py-24 border-t border-slate-900">
      <div className="container mx-auto px-10">
        <div className="mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold mb-2">03 / Communication Interface</p>
          <h2 className="text-4xl font-light tracking-tight">Let's Connect</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Communication Channels */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Primary Inquiries</span>
              <a href="mailto:hamzaimtiazcodes@gmail.com" className="text-lg hover:text-blue-400 transition font-mono block">
                hamzaimtiazcodes@gmail.com
              </a>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Secondary Communication</span>
              <a href="mailto:hamzaimtiazaaa@gmail.com" className="text-lg hover:text-blue-400 transition font-mono block">
                hamzaimtiazaaa@gmail.com
              </a>
            </div>
          </div>

          {/* Social Matrices */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {networks.map((network, index) => (
              <a 
                key={index} 
                href={network.href} 
                target="_blank" 
                rel="noreferrer" 
                className="p-4 border border-slate-800 rounded-lg hover:bg-slate-900 hover:border-slate-700 transition flex flex-col justify-between h-28 group"
              >
                <span className="text-xs font-mono text-gray-400 group-hover:text-blue-400 transition-colors">{network.label} ↗</span>
                <span className="text-xs truncate font-medium text-slate-200">{network.username}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-900 mt-20 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} Hamza Imtiaz. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;