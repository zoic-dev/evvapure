import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="logo.png" className="w-30" />
            </div>
            <p className="text-slate-400 leading-relaxed">
              Leading the way in hygiene manufacturing with a focus on quality, sustainability, and global excellence.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-slate-500">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Products', href: '/products' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-brand-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-slate-500">Products</h4>
            <ul className="space-y-4">
              {['Baby Wipes', 'Sanitizing Wipes', 'Cosmetic Wipes', 'Sanitary Pads', 'Maternity Pads'].map((link) => (
                <li key={link}>
                  <Link to="/products" className="text-slate-400 hover:text-brand-400 transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-slate-500">Newsletter</h4>
            <p className="text-slate-400 mb-6 text-sm">Subscribe to get the latest industry news and product updates.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-brand-500" />
              <button className="bg-brand-500 p-2 rounded-lg hover:bg-brand-600 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Evvapure Hygiene Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
