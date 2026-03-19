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
    <div className="pt-32 pb-32 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl font-serif font-bold mb-8 italic">CONNECT WITH <span className="text-gold">IMPACT</span></h1>
            <p className="text-xl text-white/60 leading-relaxed mb-12 max-w-lg">
              Whether you're looking for your first investment or expanding your portfolio, our team is ready to help you make an impact.
            </p>

            <div className="space-y-10 mb-16">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-charcoal rounded-2xl border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">ADDRESS</h4>
                  <p className="text-lg font-medium">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-charcoal rounded-2xl border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">PHONE</h4>
                  <p className="text-lg font-medium">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-charcoal rounded-2xl border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">EMAIL</h4>
                  <p className="text-lg font-medium">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-white/40">
              <a href={CONTACT_INFO.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors"><Facebook size={24} /></a>
              <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors"><Instagram size={24} /></a>
              <a href={CONTACT_INFO.socials.youtube} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors"><Youtube size={24} /></a>
              <a href={CONTACT_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors"><Linkedin size={24} /></a>
            </div>

            {/* Map Placeholder */}
            <div className="mt-20 h-64 bg-charcoal rounded-3xl border border-white/5 relative overflow-hidden grayscale opacity-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <MapPin size={48} className="text-gold animate-bounce" />
                  <span className="text-xs font-bold uppercase tracking-widest">QUEENS QUAY E, TORONTO</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <LeadForm 
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
