import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-16">
      {/* Hero Header */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold text-brand-500 uppercase tracking-[0.3em] mb-6">Contact Us</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Let's Build the <br />
              <span className="text-gradient">Future of Hygiene</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Whether you're looking for a manufacturing partner, private label solutions, 
              or have a bulk inquiry, our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="card-modern bg-slate-900 text-white">
                <h3 className="text-2xl text-black font-bold mb-8">Direct Contact</h3>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-400 border border-white/10">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-black/40 uppercase tracking-widest mb-1">Email Us</div>
                      <div className="text-lg text-black font-medium">info@evvapurehygiene.com</div>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-400 border border-white/10">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-black/40 uppercase tracking-widest mb-1">Call Us</div>
                      <div className="text-lg text-black font-medium">+91 9988361821</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-modern">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Location</h3>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-accent-500 border border-slate-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Headquarters</div>
                    <div className="text-lg font-medium text-slate-700 leading-relaxed">
                      #300, Mamta Enclave, Dhakoli, Punjab, India, 140603
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 rounded-[2rem] bg-brand-50 border border-brand-100">
                  <Clock className="w-8 h-8 text-brand-500 mb-4" />
                  <div className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-1">Business Hours</div>
                  <div className="text-sm font-bold text-brand-900">Mon - Fri <br />9AM - 6PM</div>
                </div>
                <div className="p-8 rounded-[2rem] bg-accent-50 border border-accent-100">
                  <Globe className="w-8 h-8 text-accent-500 mb-4" />
                  <div className="text-xs font-bold text-accent-400 uppercase tracking-widest mb-1">Global Support</div>
                  <div className="text-sm font-bold text-accent-900">24/7 Support <br />For Partners</div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-modern shadow-2xl shadow-slate-200/50"
              >
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500 flex items-center justify-center text-white">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Send a Message</h3>
                </div>

                <form className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none text-slate-700 font-medium" placeholder="Jane Smith" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input type="email" className="w-full bg-slate-50 border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none text-slate-700 font-medium" placeholder="jane@company.com" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Company Name</label>
                      <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none text-slate-700 font-medium" placeholder="Acme Corp" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Inquiry Type</label>
                      <select className="w-full bg-slate-50 border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none text-slate-700 font-medium appearance-none">
                        <option>Private Label Manufacturing</option>
                        <option>Bulk Distribution</option>
                        <option>Custom Formulation</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea rows={6} className="w-full bg-slate-50 border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none text-slate-700 font-medium resize-none" placeholder="Tell us about your project requirements..."></textarea>
                  </div>

                  <button className="btn-primary w-full py-6 text-lg group">
                    Send Inquiry <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Global Presence Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="card-modern !p-0 overflow-hidden h-[500px] relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.3916103910747!2d76.52090489999999!3d30.5099638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6475fc9180118a63%3A0x529b1c2219abfc63!2sEvvapure%20Hygiene%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1776131303168!5m2!1sen!2sin" width="100%" height="500" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
