/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Footer() {
  const footerLinks = [
    { 
      title: 'Projects', 
      links: [
        { name: 'Toronto', path: '/projects/toronto' },
        { name: 'Ontario', path: '/projects/ontario' },
        { name: 'Quebec', path: '/projects/quebec' },
        { name: 'Alberta', path: '/projects/alberta' },
        { name: 'USA', path: '/projects/usa' },
        { name: 'Mexico', path: '/projects/mexico' },
      ]
    },
    { 
      title: 'Listings', 
      links: [
        { name: 'For Sale', path: '/listings/for-sale' },
        { name: 'For Lease', path: '/listings/for-lease' },
        { name: 'Assignments', path: '/listings/assignments' },
      ]
    },
    { 
      title: 'Resources', 
      links: [
        { name: 'Blog', path: '/resources/blog' },
        { name: 'News', path: '/resources/news' },
        { name: 'Q&A', path: '/resources/qa' },
      ]
    },
    { 
      title: 'Team', 
      links: [
        { name: 'Sales Team', path: '/team/sales' },
        { name: 'Property Management', path: '/team/property-management' },
        { name: 'Impact Marketing', path: '/team/marketing' },
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer id="main-footer" className="bg-black border-t border-white/10 pt-24 md:pt-40 pb-12 overflow-hidden">
      <motion.div 
        id="footer-container" 
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 md:gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div id="footer-branding" className="sm:col-span-2 lg:col-span-2" variants={itemVariants}>
          <Link id="footer-logo-link" to="/">
            <motion.img 
              id="footer-logo-img"
              whileHover={{ scale: 1.05 }}
              src="https://impactcondoinvestments.com/wp-content/uploads/2021/12/03-05-ICI-logo_FA-GOLDREV-websitewhite-e1638821622687.png" 
              alt="Impact Condo Investments" 
              className="h-10 md:h-14 object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p id="footer-tagline" className="mt-8 md:mt-10 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.3em] text-white/30 leading-loose max-w-sm">
            Invest Today. Impact Tomorrow. <br />
            Toronto's premier gateway to exclusive pre-construction opportunities.
          </p>
          <div id="footer-socials" className="mt-10 md:mt-14 flex items-center gap-8 text-white/20">
            {[
              { icon: Facebook, href: CONTACT_INFO.socials.facebook, id: 'fb' },
              { icon: Instagram, href: CONTACT_INFO.socials.instagram, id: 'ig' },
              { icon: Youtube, href: CONTACT_INFO.socials.youtube, id: 'yt' },
              { icon: Linkedin, href: CONTACT_INFO.socials.linkedin, id: 'li' }
            ].map((social) => (
              <motion.a 
                key={social.id}
                id={`footer-social-${social.id}`} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer" 
                whileHover={{ y: -5, color: '#D4AF37' }}
                className="transition-colors"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {footerLinks.map((group) => (
          <motion.div id={`footer-group-${group.title.toLowerCase()}`} key={group.title} className="flex flex-col" variants={itemVariants}>
            <h4 id={`footer-group-title-${group.title.toLowerCase()}`} className="text-[10px] font-mono uppercase tracking-[0.4em] text-gold/60 mb-8 md:mb-10">{group.title}</h4>
            <ul id={`footer-group-list-${group.title.toLowerCase()}`} className="flex flex-col gap-4 md:gap-5">
              {group.links.map((link) => (
                <li key={link.name}>
                  <Link 
                    id={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    to={link.path} 
                    className="text-[10px] font-mono uppercase tracking-widest text-white/40 hover:text-gold transition-all hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        id="footer-bottom" 
        className="max-w-7xl mx-auto px-6 mt-24 md:mt-40 pt-12 border-t border-white/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div id="footer-bottom-content" className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div id="footer-contact-info" className="flex flex-col sm:flex-row justify-center md:justify-start gap-x-16 gap-y-6 text-center sm:text-left">
            <div id="footer-phone" className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 hover:text-gold transition-colors cursor-pointer">
              {CONTACT_INFO.phone}
            </div>
            <div id="footer-email" className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 hover:text-gold transition-colors cursor-pointer">
              {CONTACT_INFO.email}
            </div>
          </div>

          <div id="footer-copyright" className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/10 text-center">
            © {new Date().getFullYear()} Impact Condo Investments. All Rights Reserved.
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
