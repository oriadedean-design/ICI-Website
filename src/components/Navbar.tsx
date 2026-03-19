/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Facebook, Instagram, Youtube, Linkedin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_INFO } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Projects', 
      path: '/projects',
      subLinks: [
        { name: 'Toronto', path: '/projects/toronto' },
        { name: 'Ontario', path: '/projects/ontario' },
        { name: 'Quebec', path: '/projects/quebec' },
        { name: 'Alberta', path: '/projects/alberta' },
        { name: 'USA', path: '/projects/usa' },
        { name: 'Mexico', path: '/projects/mexico' },
        { name: 'Asia (Coming Soon)', path: '#' },
        { name: 'Sold Out Projects', path: '/projects/sold-out' },
        { name: 'New Developments', path: '/projects/new' },
      ]
    },
    { 
      name: 'Listings', 
      path: '/listings',
      subLinks: [
        { name: 'For Sale', path: '/listings/for-sale' },
        { name: 'For Lease', path: '/listings/for-lease' },
        { name: 'Assignments', path: '/listings/assignments' },
      ]
    },
    { 
      name: 'Resources', 
      path: '/resources',
      subLinks: [
        { name: 'Blog Article', path: '/resources/blog' },
        { name: 'Real Estate News', path: '/resources/news' },
        { name: 'Pre-Construction Q&A', path: '/resources/qa' },
      ]
    },
    { 
      name: 'Team', 
      path: '/team',
      subLinks: [
        { name: 'Sales Team', path: '/team/sales' },
        { name: 'Property Management', path: '/team/property-management' },
        { name: 'Remax Excel Titan', path: '/team/remax' },
        { name: 'ROHIT Calgary', path: '/team/rohit' },
        { name: 'ICI Back End Team', path: '/team/backend' },
        { name: 'Impact Marketing', path: '/team/marketing' },
      ]
    },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-sm py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="https://impactcondoinvestments.com/wp-content/uploads/2021/12/03-05-ICI-logo_FA-GOLDREV-websitewhite-e1638821622687.png" 
            alt="Impact Condo Investments" 
            className={`transition-all duration-500 ${scrolled ? 'h-10' : 'h-14'}`}
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link 
                to={link.path} 
                className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/60 hover:text-gold transition-colors flex items-center gap-2"
              >
                {link.name}
                {link.subLinks && <div className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-gold transition-colors"></div>}
              </Link>
              
              {link.subLinks && (
                <div className="absolute top-full left-0 mt-4 w-64 bg-black border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
                  {link.subLinks.map((sub) => (
                    <Link 
                      key={sub.name} 
                      to={sub.path} 
                      className="block px-6 py-4 text-[10px] font-mono uppercase tracking-widest text-white/50 hover:bg-white/5 hover:text-gold transition-colors border-b border-white/5 last:border-0"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <a href={`tel:${CONTACT_INFO.phone}`} className="text-[10px] font-mono uppercase tracking-widest text-white/40 hover:text-gold transition-colors">
            {CONTACT_INFO.phone}
          </a>
          <Link to="/contact" className="border border-white/20 text-white px-8 py-3 text-[10px] font-mono uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
            Enquire
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-charcoal border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  <Link to={link.path} className="text-xl font-serif font-bold hover:text-gold">{link.name}</Link>
                  {link.subLinks && (
                    <div className="pl-4 flex flex-col gap-2 border-l border-white/10">
                      {link.subLinks.map((sub) => (
                        <Link key={sub.name} to={sub.path} className="text-sm text-white/60 hover:text-gold">{sub.name}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 text-lg font-medium">
                  <Phone size={20} />
                  {CONTACT_INFO.phone}
                </a>
                <Link to="/contact" className="bg-gold text-black text-center py-4 rounded-xl font-bold">
                  CONTACT US
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
