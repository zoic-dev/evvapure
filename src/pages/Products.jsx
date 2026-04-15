import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Heart, ShieldCheck, Zap, Sparkles, Wind, Leaf, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.3em] mb-6">Our Catalog</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Hygiene Solutions <br />
              <span className="text-gradient">Engineered for Life</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
              From ultra-soft baby wipes to high-performance sanitary care, our products 
              combine advanced material science with dermatological safety.
            </p>
          </div>
        </div>
      </section>

      {/* Category 1: Wet Wipes Deep Dive */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-brand-50 text-brand-500 text-xs font-bold uppercase tracking-widest mb-8">
                <Droplets className="w-4 h-4" />
                Premium Wet Wipes
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Superior Moisture <br />Retention & Softness
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Our wet wipes are manufactured using cross-lapped spunlace technology, 
                ensuring high tensile strength and a cloth-like feel. Infused with 
                pH-balanced formulations and natural extracts.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: '99% Pure Water', icon: <Sparkles className="w-5 h-5" /> },
                  { title: 'Alcohol Free', icon: <ShieldCheck className="w-5 h-5" /> },
                  { title: 'Dermatologically Tested', icon: <CheckCircle2 className="w-5 h-5" /> },
                  { title: 'Eco-Friendly Fabric', icon: <Leaf className="w-5 h-5" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-500 border border-slate-100">
                      {item.icon}
                    </div>
                    <span className="font-bold text-slate-700">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1500" 
                  alt="Wet Wipes Manufacturing" 
                  className="img-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 hidden md:block max-w-xs">
                <div className="text-brand-500 font-bold mb-2">Technical Spec</div>
                <p className="text-slate-500 text-sm">45-80 GSM Spunlace Non-woven fabric with honeycomb texture for better cleaning.</p>
              </div>
            </motion.div>
          </div>

          {/* Wipes Sub-categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Baby Wipes', desc: 'Extra thick and soft, infused with Aloe Vera and Vitamin E for sensitive skin.' },
              { title: 'Disinfecting Wipes', desc: 'Kills 99.9% of germs. Ideal for surfaces and high-traffic areas.' },
              { title: 'Cosmetic Wipes', desc: 'Micellar water infused for gentle makeup removal and skin hydration.' }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category 2: Sanitary Pads Deep Dive */}
      <section className="section-padding bg-slate-50 overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-accent-50 text-accent-500 text-xs font-bold uppercase tracking-widest mb-8">
                <Heart className="w-4 h-4" />
                Sanitary Care
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Advanced Absorption <br />& Breathability
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Our sanitary pads feature a 7-layer protection system with a SAP (Super Absorbent Polymer) 
                core that locks in moisture instantly, keeping the surface dry and comfortable.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: 'Cottony Soft Top', icon: <Wind className="w-5 h-5" /> },
                  { title: 'Leak-Proof Barriers', icon: <ShieldCheck className="w-5 h-5" /> },
                  { title: 'Odor Control', icon: <Zap className="w-5 h-5" /> },
                  { title: 'Breathable Back', icon: <Wind className="w-5 h-5" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-accent-500 border border-slate-100 shadow-sm">
                      {item.icon}
                    </div>
                    <span className="font-bold text-slate-700">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:order-1 relative"
            >
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1627576424769-36669a952824?auto=format&fit=crop&q=80&w=1500" 
                  alt="Sanitary Pad Technology" 
                  className="img-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 bg-accent-500 p-10 rounded-[3rem] shadow-2xl text-white hidden md:block max-w-xs">
                <div className="font-bold mb-2">7-Layer Tech</div>
                <p className="text-white/70 text-sm">Ultra-thin design with wings for maximum coverage and zero leakage.</p>
              </div>
            </motion.div>
          </div>

          {/* Pads Sub-categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Ultra Thin', desc: 'Discreet and comfortable for daily use with high absorption capacity.' },
              { title: 'Overnight Maxi', desc: 'Extra long with a wider back for maximum protection during sleep.' },
              { title: 'Panty Liners', desc: 'Breathable and soft for daily freshness and light discharge.' }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Label Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="bg-slate-900 rounded-[4rem] p-16 md:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-500/10 -skew-x-12 translate-x-1/4"></div>
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-sm font-bold text-brand-400 uppercase tracking-[0.3em] mb-6">Partnership Opportunities</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Private Label & <br />Custom Formulation</h3>
              <p className="text-slate-400 text-xl leading-relaxed mb-12">
                We offer end-to-end contract manufacturing services. From custom fabric selection 
                to unique liquid formulations and packaging design, we bring your brand to life.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="btn-primary">Start Your Project</Link>
                {/* <Link to="/manufacturing" className="btn-secondary !bg-white/10 !backdrop-blur-md hover:!bg-white/20">Our Capabilities</Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
