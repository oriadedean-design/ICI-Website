/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import LeadForm from '../components/LeadForm';
import { useSearchParams } from 'react-router-dom';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const interest = searchParams.get('interest') || "";
  const realtor = searchParams.get('realtor') || "";

  return (
    <div id="contact-page" className="pt-32 pb-32 min-h-screen bg-black">
      <div id="contact-container" className="max-w-7xl mx-auto px-6">
        <div id="contact-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div
            id="contact-info-section"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 id="contact-title" className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 md:mb-8 italic uppercase tracking-tighter">CONNECT WITH <span className="text-gold">IMPACT</span></h1>
            <p id="contact-description" className="text-base md:text-xl text-white/60 leading-relaxed mb-10 md:mb-12 max-w-lg">
              Whether you're looking for your first investment or expanding your portfolio, our team is ready to help you make an impact.
            </p>

            <div id="contact-details" className="space-y-6 md:space-y-10 mb-12 md:mb-16">
              <div id="contact-address-wrapper" className="flex items-center gap-4 md:gap-6 group">
                <div id="contact-address-icon-wrapper" className="w-12 h-12 md:w-16 md:h-16 bg-charcoal rounded-2xl border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <MapPin id="contact-address-icon" size={20} md:size={28} />
                </div>
                <div id="contact-address-content">
                  <h4 id="contact-address-label" className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">ADDRESS</h4>
                  <p id="contact-address-value" className="text-sm md:text-lg font-medium">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div id="contact-phone-wrapper" className="flex items-center gap-4 md:gap-6 group">
                <div id="contact-phone-icon-wrapper" className="w-12 h-12 md:w-16 md:h-16 bg-charcoal rounded-2xl border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <Phone id="contact-phone-icon" size={20} md:size={28} />
                </div>
                <div id="contact-phone-content">
                  <h4 id="contact-phone-label" className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">PHONE</h4>
                  <p id="contact-phone-value" className="text-sm md:text-lg font-medium">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div id="contact-email-wrapper" className="flex items-center gap-4 md:gap-6 group">
                <div id="contact-email-icon-wrapper" className="w-12 h-12 md:w-16 md:h-16 bg-charcoal rounded-2xl border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <Mail id="contact-email-icon" size={20} md:size={28} />
                </div>
                <div id="contact-email-content">
                  <h4 id="contact-email-label" className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">EMAIL</h4>
                  <p id="contact-email-value" className="text-sm md:text-lg font-medium">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            <div id="contact-socials" className="flex items-center gap-6 text-white/40">
              <a id="contact-social-facebook" href={CONTACT_INFO.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors"><Facebook size={20} md:size={24} /></a>
              <a id="contact-social-instagram" href={CONTACT_INFO.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors"><Instagram size={20} md:size={24} /></a>
              <a id="contact-social-youtube" href={CONTACT_INFO.socials.youtube} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors"><Youtube size={20} md:size={24} /></a>
              <a id="contact-social-linkedin" href={CONTACT_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors"><Linkedin size={20} md:size={24} /></a>
            </div>

            {/* Map Placeholder */}
            <motion.div 
              id="contact-map-placeholder" 
              className="mt-12 md:mt-20 h-48 md:h-64 bg-charcoal rounded-3xl border border-white/5 relative overflow-hidden grayscale opacity-50"
              whileHover={{ opacity: 0.8, grayscale: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div id="contact-map-overlay" className="absolute inset-0 flex items-center justify-center">
                <div id="contact-map-content" className="flex flex-col items-center gap-4">
                  <MapPin id="contact-map-pin" size={32} md:size={48} className="text-gold animate-bounce" />
                  <span id="contact-map-label" className="text-[10px] font-bold uppercase tracking-widest">QUEENS QUAY E, TORONTO</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            id="contact-form-section"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <LeadForm 
              id="contact-lead-form"
              title="REGISTER YOUR INTEREST" 
              subtitle="Fill out the form below and one of our experts will contact you within 24 hours."
              prefilledInterest={interest}
              prefilledRealtor={realtor}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
