import React from 'react';
import { motion } from 'motion/react';
import { Factory, ShieldCheck, Zap, Recycle, Settings, Microscope, Box, Truck } from 'lucide-react';

const Manufacturing = () => {
  const steps = [
    { 
      title: 'Raw Material Sourcing', 
      icon: <Recycle />, 
      desc: 'We source medical-grade non-woven fabrics and high-absorption SAP from certified global suppliers.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: 'Automated Production', 
      icon: <Settings />, 
      desc: 'High-speed European lines ensure zero human contact, maintaining absolute hygiene throughout the cycle.',
      img: 'https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: 'Quality Inspection', 
      icon: <ShieldCheck />, 
      desc: 'Real-time camera monitoring and automated defect rejection systems ensure 100% compliance.',
      img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: 'Sterile Packaging', 
      icon: <Box />, 
      desc: 'Products are sealed in a controlled environment to prevent any external contamination.',
      img: 'https://images.unsplash.com/photo-1581092341331-0f4a08158496?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero - Industrial Aesthetic */}
      <section className="relative py-32 md:py-48 px-6 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=2000" 
            alt="Factory Floor" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        
        <div className="container-wide relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <h2 className="text-sm font-bold text-brand-400 uppercase tracking-[0.3em] mb-6">Our Infrastructure</h2>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-[0.95]">
              Manufacturing <br />
              <span className="text-gradient">Excellence</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Our 50,000 sq. ft. state-of-the-art facility is a testament to modern engineering, 
              designed to deliver hygiene products at a global scale with zero compromise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facility Highlights - Bento Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="bento-grid">
            <div className="md:col-span-8 card-modern !p-0 overflow-hidden relative h-[500px]">
              <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1500" alt="Tech" className="img-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent p-12 flex flex-col justify-end">
                <h4 className="text-3xl font-bold text-white mb-4">European Technology</h4>
                <p className="text-slate-300 max-w-md">Equipped with the latest high-speed automated lines from Germany and Italy for precision manufacturing.</p>
              </div>
            </div>
            <div className="md:col-span-4 card-modern bg-accent-500 text-white flex flex-col justify-center">
              <div className="text-6xl font-bold mb-4">1.5M</div>
              <div className="text-sm uppercase tracking-widest font-bold text-white/60 mb-8">Daily Capacity</div>
              <p className="text-white/80">Our facility operates 24/7 to meet the growing global demand for hygiene solutions.</p>
            </div>
            <div className="md:col-span-4 card-modern bg-brand-500 text-white flex flex-col justify-center">
              <Microscope className="w-12 h-12 mb-6" />
              <h4 className="text-2xl font-bold mb-4">In-House R&D Lab</h4>
              <p className="text-white/80">Continuous innovation in material science and formulation to stay ahead of industry trends.</p>
            </div>
            <div className="md:col-span-8 card-modern !p-0 overflow-hidden relative h-[400px]">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1500" alt="Lab" className="img-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* The Production Journey - Vertical Steps */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="text-center mb-24">
            <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.3em] mb-6">The Process</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-slate-900">A Journey of Precision</h3>
          </div>

          <div className="space-y-32">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-16 md:gap-24 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 space-y-8">
                  <div className="text-8xl font-black text-slate-200 leading-none">0{i + 1}</div>
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent-500 shadow-xl border border-slate-100">
                    {step.icon}
                  </div>
                  <h4 className="text-4xl font-bold text-slate-900">{step.title}</h4>
                  <p className="text-slate-500 text-xl leading-relaxed">{step.desc}</p>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src={step.img} alt={step.title} className="img-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1500" alt="Logistics" className="rounded-[3rem] shadow-2xl" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-10 -right-10 bg-slate-900 p-12 rounded-[3rem] text-white hidden md:block">
                <Truck className="w-12 h-12 mb-6 text-brand-400" />
                <h4 className="text-2xl font-bold mb-2">Global Logistics</h4>
                <p className="text-slate-400 text-sm">Seamless distribution to over 45 countries worldwide.</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.3em]">Supply Chain</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Reliable Delivery, <br />Every Time</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our integrated supply chain management ensures that whether you're a local distributor 
                or a global retail giant, your orders are processed and shipped with maximum efficiency.
              </p>
              <ul className="space-y-4">
                {['Real-time Inventory Tracking', 'Automated Order Processing', 'Eco-friendly Packaging Options', 'Global Shipping Network'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
