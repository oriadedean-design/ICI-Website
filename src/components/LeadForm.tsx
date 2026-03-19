/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  prefilledInterest?: string;
  prefilledRealtor?: string;
}

export default function LeadForm({ 
  title = "GET EARLY ACCESS & PRICING", 
  subtitle = "Register now to receive exclusive launch alerts and weekly updates.",
  prefilledInterest = "",
  prefilledRealtor = "",
  id = "lead-form"
}: LeadFormProps & { id?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    workingWithRealtor: 'No',
    budget: 'Under $400K',
    interest: prefilledInterest,
    realtor: prefilledRealtor,
    source: 'Social Media',
    notes: '',
    consent: false
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    
    // In a real app, this would send data to a backend
    console.log('Lead Captured:', {
      ...formData,
      timestamp: new Date().toISOString(),
      tags: [formData.budget, formData.interest, formData.source]
    });
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        id={`${id}-success`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-black p-12 border border-white/10 text-center flex flex-col items-center gap-8"
      >
        <div id={`${id}-success-icon-wrapper`} className="w-16 h-16 border border-gold/30 flex items-center justify-center text-gold">
          <CheckCircle2 id={`${id}-success-icon`} size={32} />
        </div>
        <div id={`${id}-success-content`}>
          <h3 id={`${id}-success-title`} className="text-3xl font-bold mb-4 uppercase tracking-tighter">THANK YOU</h3>
          <p id={`${id}-success-desc`} className="text-white/40 text-sm font-light max-w-sm mx-auto">Your registration is complete. A specialist will be in touch shortly with the details you requested.</p>
        </div>
        <div id={`${id}-success-divider`} className="h-px w-12 bg-white/10"></div>
        <p id={`${id}-success-footer`} className="text-[10px] font-mono uppercase tracking-widest text-white/20">Enrolled in launch alert system</p>
      </motion.div>
    );
  }

  return (
    <div id={id} className="bg-black p-6 md:p-16 border border-white/10">
      <motion.div 
        id={`${id}-header`} 
        className="mb-10 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div id={`${id}-tagline-wrapper`} className="flex items-center gap-4 mb-4 md:mb-6">
          <span id={`${id}-tagline-line`} className="h-px w-6 md:w-8 bg-gold"></span>
          <span id={`${id}-tagline-text`} className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-gold">Registration</span>
        </div>
        <h3 id={`${id}-title`} className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 uppercase tracking-tighter">{title}</h3>
        <p id={`${id}-subtitle`} className="text-white/40 text-xs md:text-sm font-light">{subtitle}</p>
      </motion.div>

      <form id={`${id}-form`} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8 md:gap-y-10">
        <motion.div 
          id={`${id}-field-first-name`} 
          className="flex flex-col gap-2 md:gap-3"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <label id={`${id}-label-first-name`} className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-white/30">First Name</label>
          <input 
            id={`${id}-input-first-name`}
            required
            type="text" 
            className="bg-transparent border-b border-white/10 px-0 py-2 md:py-3 focus:border-gold outline-none transition-colors font-light text-sm"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          />
        </motion.div>
        <motion.div 
          id={`${id}-field-last-name`} 
          className="flex flex-col gap-2 md:gap-3"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label id={`${id}-label-last-name`} className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-white/30">Last Name</label>
          <input 
            id={`${id}-input-last-name`}
            required
            type="text" 
            className="bg-transparent border-b border-white/10 px-0 py-2 md:py-3 focus:border-gold outline-none transition-colors font-light text-sm"
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          />
        </motion.div>
        <motion.div 
          id={`${id}-field-email`} 
          className="flex flex-col gap-2 md:gap-3"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label id={`${id}-label-email`} className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-white/30">Email Address</label>
          <input 
            id={`${id}-input-email`}
            required
            type="email" 
            className="bg-transparent border-b border-white/10 px-0 py-2 md:py-3 focus:border-gold outline-none transition-colors font-light text-sm"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </motion.div>
        <motion.div 
          id={`${id}-field-phone`} 
          className="flex flex-col gap-2 md:gap-3"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label id={`${id}-label-phone`} className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-white/30">Phone Number</label>
          <input 
            id={`${id}-input-phone`}
            required
            type="tel" 
            className="bg-transparent border-b border-white/10 px-0 py-2 md:py-3 focus:border-gold outline-none transition-colors font-light text-sm"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </motion.div>

        <motion.div 
          id={`${id}-field-realtor`} 
          className="flex flex-col gap-2 md:gap-3"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <label id={`${id}-label-realtor`} className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-white/30">Working with realtor?</label>
          <select 
            id={`${id}-select-realtor`}
            className="bg-transparent border-b border-white/10 px-0 py-2 md:py-3 focus:border-gold outline-none transition-colors font-light text-sm appearance-none"
            value={formData.workingWithRealtor}
            onChange={(e) => setFormData({...formData, workingWithRealtor: e.target.value})}
          >
            <option className="bg-black">No</option>
            <option className="bg-black">Yes</option>
          </select>
        </motion.div>

        <motion.div 
          id={`${id}-field-budget`} 
          className="flex flex-col gap-2 md:gap-3"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <label id={`${id}-label-budget`} className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-white/30">Budget Range</label>
          <select 
            id={`${id}-select-budget`}
            className="bg-transparent border-b border-white/10 px-0 py-2 md:py-3 focus:border-gold outline-none transition-colors font-light text-sm appearance-none"
            value={formData.budget}
            onChange={(e) => setFormData({...formData, budget: e.target.value})}
          >
            <option className="bg-black">Under $400K</option>
            <option className="bg-black">$400K–$500K</option>
            <option className="bg-black">$500K–$600K</option>
            <option className="bg-black">$600K–$700K</option>
            <option className="bg-black">$700K–$800K</option>
            <option className="bg-black">$800K–$900K</option>
            <option className="bg-black">$900K–$1M</option>
            <option className="bg-black">Over $1M</option>
          </select>
        </motion.div>

        <motion.div 
          id={`${id}-field-interest`} 
          className="flex flex-col gap-2 md:gap-3 md:col-span-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <label id={`${id}-label-interest`} className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-white/30">Property or Location Interest</label>
          <input 
            id={`${id}-input-interest`}
            type="text" 
            className="bg-transparent border-b border-white/10 px-0 py-2 md:py-3 focus:border-gold outline-none transition-colors font-light text-sm"
            placeholder="e.g. Q Tower, Downtown Toronto"
            value={formData.interest}
            onChange={(e) => setFormData({...formData, interest: e.target.value})}
          />
        </motion.div>

        <motion.div 
          id={`${id}-field-consent`} 
          className="md:col-span-2 flex gap-4 md:gap-6 mt-4 md:mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <input 
            required
            type="checkbox" 
            id={`${id}-checkbox-consent`}
            className="mt-1 accent-gold w-4 h-4 shrink-0"
            checked={formData.consent}
            onChange={(e) => setFormData({...formData, consent: e.target.checked})}
          />
          <label htmlFor={`${id}-checkbox-consent`} className="text-[9px] md:text-[10px] text-white/30 leading-relaxed font-mono uppercase tracking-wider">
            I agree to be contacted by Impact Condo Investments via call, email, and text for real estate services. Message and data rates may apply.
          </label>
        </motion.div>

        <motion.button 
          id={`${id}-submit-btn`}
          type="submit"
          className="md:col-span-2 bg-white text-black py-4 md:py-6 font-bold text-[10px] md:text-xs tracking-[0.3em] hover:bg-gold transition-all uppercase mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileTap={{ scale: 0.98 }}
        >
          Register Now
        </motion.button>
      </form>
    </div>
  );
}
