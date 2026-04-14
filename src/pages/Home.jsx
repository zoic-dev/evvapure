import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Droplets, Heart, Factory, ShieldCheck, Globe, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Full Height, Dynamic */}
      <section className="relative h-[90vh] md:h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
            alt="Evvapure Manufacturing Facility" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container-wide px-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              Global Hygiene Standards
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] mb-8">
              Redefining <br />
              <span className="text-gradient">Pure Hygiene</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-xl">
              Evvapure Hygiene is a world-class manufacturer of premium wet wipes and sanitary products, 
              powering global brands with precision engineering and uncompromising quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/products" className="btn-primary">
                View Product Line <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/manufacturing" className="btn-secondary !bg-white/10 !backdrop-blur-md hover:!bg-white/20">
                Our Capabilities
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats Card */}
        <div className="absolute bottom-12 right-6 md:right-12 z-20 hidden md:block">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[2rem] text-white"
          >
            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="text-4xl font-bold mb-1">50M+</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Monthly Units</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">45+</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Countries</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-slate-50 py-12 border-b border-slate-100">
        <div className="container-wide px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale">
          {['ISO 9001', 'CE CERTIFIED', 'FDA APPROVED', 'GMP COMPLIANT', 'ECO-FRIENDLY'].map((label) => (
            <span key={label} className="text-sm font-bold tracking-[0.2em]">{label}</span>
          ))}
        </div>
      </div>

      {/* Why Choose Us - Spacious Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070" 
                  alt="Precision Engineering" 
                  className="img-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-accent-500 p-12 rounded-[3rem] shadow-2xl text-white hidden lg:block max-w-xs">
                <ShieldCheck className="w-12 h-12 mb-6 text-brand-300" />
                <h4 className="text-2xl font-bold mb-4">Uncompromising Quality Control</h4>
                <p className="text-white/70 text-sm leading-relaxed">Every single unit undergoes a rigorous 12-point inspection before leaving our facility.</p>
              </div>
            </motion.div>

            <div className="space-y-12">
              <div>
                <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.3em] mb-6">The Evvapure Advantage</h2>
                <h3 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Excellence in Every <br />Single Fiber
                </h3>
              </div>
              
              <div className="grid gap-8">
                {[
                  { title: 'Advanced European Tech', desc: 'Fully automated production lines with zero human contact.', icon: <Zap /> },
                  { title: 'Dermatologically Safe', desc: 'Hypoallergenic formulations tested in our in-house laboratories.', icon: <Award /> },
                  { title: 'Sustainable Sourcing', desc: 'Committed to biodegradable materials and zero-waste production.', icon: <Recycle /> }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-accent-500 flex-shrink-0 border border-slate-100">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link to="/about" className="btn-primary w-fit">
                Learn More About Our Standards
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Bento Grid - High Visual Impact */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.3em] mb-6">Our Core Expertise</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-slate-900">Premium Product Lines</h3>
          </div>

          <div className="bento-grid">
            {/* Wet Wipes Large Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 group relative rounded-[3rem] overflow-hidden h-[600px] shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1500" 
                alt="Wet Wipes" 
                className="img-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-12 flex flex-col justify-end">
                <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg">
                  <Droplets className="w-8 h-8" />
                </div>
                <h4 className="text-4xl font-bold text-white mb-4">Premium Wet Wipes</h4>
                <p className="text-slate-300 text-lg mb-8 max-w-md">From baby care to medical-grade sanitizing solutions, our wipes are engineered for superior performance.</p>
                <Link to="/products" className="text-brand-400 font-bold flex items-center gap-2 group/link">
                  Explore Wipes Collection <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Sanitary Pads Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-5 group relative rounded-[3rem] overflow-hidden h-[600px] shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1627576424769-36669a952824?auto=format&fit=crop&q=80&w=1500" 
                alt="Sanitary Pads" 
                className="img-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-500/90 via-accent-500/20 to-transparent p-12 flex flex-col justify-end">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent-500 mb-8 shadow-lg">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="text-4xl font-bold text-white mb-4">Sanitary Care</h4>
                <p className="text-white/80 text-lg mb-8">Advanced absorption technology for maximum comfort and confidence.</p>
                <Link to="/products" className="text-white font-bold flex items-center gap-2 group/link">
                  View Sanitary Range <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Preview - Immersive */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-500/5 -skew-x-12 translate-x-1/4"></div>
        
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-sm font-bold text-brand-400 uppercase tracking-[0.3em]">Manufacturing Excellence</h2>
              <h3 className="text-5xl md:text-6xl font-bold leading-tight">
                Where Technology <br />Meets Hygiene
              </h3>
              <p className="text-slate-400 text-xl leading-relaxed">
                Our 50,000 sq. ft. facility is a testament to modern engineering. 
                With fully automated European lines, we maintain a clean-room 
                environment that exceeds global safety standards.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-brand-400 mb-2">1.5M+</div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest">Wipes / Day</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-400 mb-2">500K+</div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest">Pads / Day</p>
                </div>
              </div>
              <Link to="/manufacturing" className="btn-secondary w-fit">
                Tour Our Facility
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <img src="https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=800" alt="Machine" className="rounded-3xl w-full aspect-[3/4] object-cover shadow-2xl" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800" alt="QC" className="rounded-3xl w-full aspect-square object-cover shadow-2xl" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 pt-12"
              >
                <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" alt="Production" className="rounded-3xl w-full aspect-square object-cover shadow-2xl" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1581092341331-0f4a08158496?auto=format&fit=crop&q=80&w=800" alt="Warehouse" className="rounded-3xl w-full aspect-[3/4] object-cover shadow-2xl" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-wide max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-16 md:p-24 rounded-[4rem] border border-slate-100"
          >
            <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">Ready to Partner with <br />Evvapure Hygiene?</h3>
            <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto">
              Whether you need private label solutions or bulk supply, our team is ready to deliver excellence to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-primary px-12">Get a Custom Quote</Link>
              <Link to="/products" className="btn-secondary !bg-white !text-accent-500 border border-accent-500 px-12">View Catalog</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Recycle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11V7a5 5 0 0 1 10 0v4"/><path d="M11 21a8 8 0 0 0 8-8v-2H5v2a8 8 0 0 0 8 8Z"/><path d="M12 11v4"/></svg>
);

export default Home;
