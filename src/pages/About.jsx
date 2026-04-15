import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, Target, Award, Globe, History, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Header - Immersive with Background */}
      <section className="relative py-32 md:py-48 px-6 text-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000" 
            alt="Evvapure Laboratory" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-[0.95]">
              A Legacy of <br />
              <span className="text-gradient">Pure Trust</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Evvapure Hygiene is an initiative led by Zoic’s Managing Director, Vivek Singla, 
              built on the strong foundation of Zoic’s manufacturing excellence since 1990. 
              Combining decades of expertise with modern innovation, Evvapure delivers trusted 
              hygiene solutions with a deep commitment to quality and human well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section - Split Layout */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.3em]">Our Journey</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                From Legacy Manufacturing <br />to Modern Innovation
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Zoic has been a trusted name in manufacturing since 1990, building a strong 
                reputation in both herbal and allopathic product segments. With over three decades 
                of experience, the company has consistently delivered high-quality solutions across 
                domestic and international markets.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Under the leadership of Managing Director Vivek Singla, Evvapure Hygiene was 
                established to extend this legacy into the hygiene and personal care space. 
                Backed by advanced manufacturing capabilities and continuous R&D, Evvapure stands 
                as a modern brand rooted in proven expertise.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="text-4xl font-bold text-accent-500 mb-2">1990</div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Manufacturing Since</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent-500 mb-2">35+</div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Years of Experience</p>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1500" 
                  alt="Manufacturing History" 
                  className="img-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 bg-brand-500 p-10 rounded-[3rem] shadow-2xl text-white hidden md:block">
                <History className="w-10 h-10 mb-4" />
                <div className="text-2xl font-bold">35+ Years</div>
                <div className="text-sm opacity-70">Manufacturing Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Modern Cards */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-16 rounded-[3rem] border border-slate-100 shadow-sm"
            >
              <div className="w-16 h-16 bg-brand-100 text-brand-500 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To leverage Zoic’s decades of manufacturing expertise to deliver high-quality, 
                safe, and affordable hygiene products globally through Evvapure. We aim to 
                empower brands and consumers with reliable solutions built on trust and innovation.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-accent-500 p-16 rounded-[3rem] text-white shadow-xl shadow-accent-500/20"
            >
              <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-8">
                <Globe className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                To position Evvapure as a globally trusted hygiene brand backed by Zoic’s legacy, 
                setting new benchmarks in quality, innovation, and sustainable manufacturing practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.3em] mb-6">Our Core Values</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">The Principles That Guide Us</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Quality First', icon: <ShieldCheck />, desc: 'Driven by Zoic’s legacy of uncompromised manufacturing standards.' },
              { title: 'Innovation', icon: <Award />, desc: 'Continuously advancing products under the vision of Vivek Singla.' },
              { title: 'Customer Centric', icon: <Users />, desc: 'Delivering tailored solutions for modern hygiene needs.' },
              { title: 'Integrity', icon: <ShieldCheck />, desc: 'Building trust through transparent and ethical practices.' }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent-500 shadow-sm mb-8 transition-transform group-hover:scale-110">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-sm font-bold text-brand-400 uppercase tracking-[0.3em] mb-6">Global Standards</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Certified for <br />Your Peace of Mind</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-12">
                Backed by Zoic’s established manufacturing systems, our processes follow global 
                certifications ensuring the highest benchmarks for safety, quality, and compliance.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  'ISO 9001:2015 Quality Management',
                  'ISO 22716:2007 (GMP)',
                  'CE Marking for Sanitary Products',
                  'FDA Registered Facility',
                  'FSC Certified Raw Materials',
                  'Dermatologically Tested'
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-400" />
                    <span className="text-slate-300 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 text-center">
                  <div className="text-5xl font-bold text-brand-400 mb-2">100%</div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">Compliance</p>
                </div>
                <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800" alt="QC" className="rounded-[2.5rem] w-full aspect-square object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-6 pt-12">
                <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" alt="Lab" className="rounded-[2.5rem] w-full aspect-square object-cover" referrerPolicy="no-referrer" />
                <div className="bg-accent-500 p-10 rounded-[2.5rem] text-center">
                  <div className="text-5xl font-bold text-white mb-2">Zero</div>
                  <p className="text-xs uppercase tracking-widest text-white/60">Defect Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;