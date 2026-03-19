/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
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

  return (
    <footer className="bg-black border-t border-white/10 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
        <div className="lg:col-span-2">
          <Link to="/">
            <img 
              src="https://impactcondoinvestments.com/wp-content/uploads/2021/12/03-05-ICI-logo_FA-GOLDREV-websitewhite-e1638821622687.png" 
              alt="Impact Condo Investments" 
              className="h-12 object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="mt-8 text-[11px] font-mono uppercase tracking-widest text-white/30 leading-loose max-w-sm">
            Invest Today. Impact Tomorrow. <br />
            Toronto's premier gateway to exclusive pre-construction opportunities.
          </p>
          <div className="mt-12 flex items-center gap-6 text-white/30">
            <a href={CONTACT_INFO.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors"><Facebook size={16} /></a>
            <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors"><Instagram size={16} /></a>
            <a href={CONTACT_INFO.socials.youtube} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors"><Youtube size={16} /></a>
            <a href={CONTACT_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors"><Linkedin size={16} /></a>
          </div>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 mb-8">{group.title}</h4>
            <ul className="flex flex-col gap-4">
              {group.links.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-[10px] font-mono uppercase tracking-widest text-white/50 hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-32 pt-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/20">
              {CONTACT_INFO.phone}
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/20">
              {CONTACT_INFO.email}
            </div>
          </div>

          <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/10">
            © {new Date().getFullYear()} Impact Condo Investments.
          </div>
        </div>
      </div>
    </footer>
  );
}
