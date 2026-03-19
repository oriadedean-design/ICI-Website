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

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav id="main-nav" className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-black/95 backdrop-blur-xl py-3 md:py-4 border-b border-white/10 shadow-2xl' : 'bg-transparent py-6 md:py-10'}`}>
      <div id="nav-container" className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          id="nav-logo-wrapper"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <Link id="nav-logo-link" to="/" className="flex items-center">
            <img 
              id="nav-logo-img"
              src="https://impactcondoinvestments.com/wp-content/uploads/2021/12/03-05-ICI-logo_FA-GOLDREV-websitewhite-e1638821622687.png" 
              alt="Impact Condo Investments" 
              className={`transition-all duration-700 ${scrolled ? 'h-8 md:h-10' : 'h-10 md:h-16'}`}
              referrerPolicy="no-referrer"
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div id="desktop-nav-links" className="hidden lg:flex items-center gap-10 xl:gap-14">
          {navLinks.map((link) => (
            <div id={`nav-link-group-${link.name.toLowerCase()}`} key={link.name} className="relative group">
              <Link 
                id={`nav-link-${link.name.toLowerCase()}`}
                to={link.path} 
                className={`text-[10px] font-mono uppercase tracking-[0.3em] transition-all flex items-center gap-2 py-2 relative ${isActive(link.path) ? 'text-gold' : 'text-white/60 hover:text-gold'}`}
              >
                {link.name}
                {link.subLinks && <div id={`nav-dot-${link.name.toLowerCase()}`} className={`w-1 h-1 rounded-full transition-colors ${isActive(link.path) ? 'bg-gold' : 'bg-white/20 group-hover:bg-gold'}`}></div>}
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="nav-active-line"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
              
              {link.subLinks && (
                <div id={`nav-dropdown-${link.name.toLowerCase()}`} className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] translate-y-4 group-hover:translate-y-0 p-2 rounded-xl overflow-hidden">
                  {link.subLinks.map((sub) => (
                    <Link 
                      id={`nav-sublink-${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
                      key={sub.name} 
                      to={sub.path} 
                      className="block px-6 py-4 text-[10px] font-mono uppercase tracking-widest text-white/50 hover:bg-white/5 hover:text-gold transition-all rounded-lg"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div id="nav-actions" className="hidden lg:flex items-center gap-8 xl:gap-10">
          <motion.a 
            id="nav-phone-link" 
            href={`tel:${CONTACT_INFO.phone}`} 
            whileHover={{ scale: 1.05, color: '#D4AF37' }}
            className="text-[10px] font-mono uppercase tracking-widest text-white/40 transition-colors"
          >
            {CONTACT_INFO.phone}
          </motion.a>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link id="nav-enquire-btn" to="/contact" className="border border-gold/40 text-gold px-8 xl:px-10 py-3 text-[10px] font-mono uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all rounded-full">
              Enquire
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button 
          id="mobile-menu-toggle" 
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-white p-2 -mr-2 relative z-[60]" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="mobile-nav-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 bg-black z-50 overflow-y-auto flex flex-col"
          >
            <div id="mobile-nav-bg" className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
              <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/20 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/10 blur-[120px] rounded-full"></div>
            </div>

            <div id="mobile-nav-content" className="relative px-8 pt-32 pb-12 flex-grow flex flex-col justify-between">
              <div className="flex flex-col gap-10">
                {navLinks.map((link, i) => (
                  <motion.div 
                    id={`mobile-nav-group-${link.name.toLowerCase()}`} 
                    key={link.name} 
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <Link 
                      id={`mobile-nav-link-${link.name.toLowerCase()}`} 
                      to={link.path} 
                      className={`text-4xl md:text-5xl font-serif font-bold transition-colors ${isActive(link.path) ? 'text-gold' : 'text-white hover:text-gold'}`}
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <div id={`mobile-nav-sublinks-${link.name.toLowerCase()}`} className="pl-6 flex flex-col gap-4 border-l border-white/10 mt-2">
                        {link.subLinks.slice(0, 4).map((sub, j) => (
                          <motion.div
                            key={sub.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.08 + j * 0.05 }}
                          >
                            <Link id={`mobile-nav-sublink-${sub.name.toLowerCase().replace(/\s+/g, '-')}`} to={sub.path} className="text-lg text-white/50 hover:text-gold transition-colors">{sub.name}</Link>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div 
                id="mobile-nav-footer" 
                className="pt-12 mt-12 border-t border-white/10 flex flex-col gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex flex-col gap-4">
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">Connect with us</p>
                  <a id="mobile-nav-phone" href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 text-2xl font-serif font-bold text-gold">
                    <Phone size={24} />
                    {CONTACT_INFO.phone}
                  </a>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Link id="mobile-nav-contact-btn" to="/contact" className="bg-gold text-black text-center py-5 rounded-2xl font-bold text-lg shadow-xl shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    ENQUIRE
                  </Link>
                  <div className="flex items-center justify-center gap-6 bg-white/5 rounded-2xl">
                    <Facebook size={20} className="text-white/60 hover:text-gold cursor-pointer" />
                    <Instagram size={20} className="text-white/60 hover:text-gold cursor-pointer" />
                    <Linkedin size={20} className="text-white/60 hover:text-gold cursor-pointer" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
