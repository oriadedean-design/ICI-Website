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
  prefilledRealtor = ""
}: LeadFormProps) {
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-black p-12 border border-white/10 text-center flex flex-col items-center gap-8"
      >
        <div className="w-16 h-16 border border-gold/30 flex items-center justify-center text-gold">
          <CheckCircle2 size={32} />
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter">THANK YOU</h3>
          <p className="text-white/40 text-sm font-light max-w-sm mx-auto">Your registration is complete. A specialist will be in touch shortly with the details you requested.</p>
        </div>
        <div className="h-px w-12 bg-white/10"></div>
        <p className="text-[10px] font-mono uppercase tracking-widest text-white/20">Enrolled in launch alert system</p>
      </motion.div>
    );
  }

  return (
    <div className="bg-black p-8 md:p-16 border border-white/10">
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-8 bg-gold"></span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-gold">Registration</span>
        </div>
        <h3 className="text-4xl font-bold mb-4 uppercase tracking-tighter">{title}</h3>
        <p className="text-white/40 text-sm font-light">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        <div className="flex flex-col gap-3">
          <label className="text-[10px] font-mono uppercase tracking-widest text-white/30">First Name</label>
          <input 
            required
            type="text" 
            className="bg-transparent border-b border-white/10 px-0 py-3 focus:border-gold outline-none transition-colors font-light text-sm"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-[10px] font-mono uppercase tracking-widest text-white/30">Last Name</label>
          <input 
            required
            type="text" 
            className="bg-transparent border-b border-white/10 px-0 py-3 focus:border-gold outline-none transition-colors font-light text-sm"
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-[10px] font-mono uppercase tracking-widest text-white/30">Email Address</label>
          <input 
            required
            type="email" 
            className="bg-transparent border-b border-white/10 px-0 py-3 focus:border-gold outline-none transition-colors font-light text-sm"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-[10px] font-mono uppercase tracking-widest text-white/30">Phone Number</label>
          <input 
            required
            type="tel" 
            className="bg-transparent border-b border-white/10 px-0 py-3 focus:border-gold outline-none transition-colors font-light text-sm"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-[10px] font-mono uppercase tracking-widest text-white/30">Working with realtor?</label>
          <select 
            className="bg-transparent border-b border-white/10 px-0 py-3 focus:border-gold outline-none transition-colors font-light text-sm appearance-none"
            value={formData.workingWithRealtor}
            onChange={(e) => setFormData({...formData, workingWithRealtor: e.target.value})}
          >
            <option className="bg-black">No</option>
            <option className="bg-black">Yes</option>
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-[10px] font-mono uppercase tracking-widest text-white/30">Budget Range</label>
          <select 
            className="bg-transparent border-b border-white/10 px-0 py-3 focus:border-gold outline-none transition-colors font-light text-sm appearance-none"
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
        </div>

        <div className="flex flex-col gap-3 md:col-span-2">
          <label className="text-[10px] font-mono uppercase tracking-widest text-white/30">Property or Location Interest</label>
          <input 
            type="text" 
            className="bg-transparent border-b border-white/10 px-0 py-3 focus:border-gold outline-none transition-colors font-light text-sm"
            placeholder="e.g. Q Tower, Downtown Toronto"
            value={formData.interest}
            onChange={(e) => setFormData({...formData, interest: e.target.value})}
          />
        </div>

        <div className="md:col-span-2 flex gap-6 mt-6">
          <input 
            required
            type="checkbox" 
            id="consent"
            className="mt-1 accent-gold w-4 h-4"
            checked={formData.consent}
            onChange={(e) => setFormData({...formData, consent: e.target.checked})}
          />
          <label htmlFor="consent" className="text-[10px] text-white/30 leading-relaxed font-mono uppercase tracking-wider">
            I agree to be contacted by Impact Condo Investments via call, email, and text for real estate services. Message and data rates may apply.
          </label>
        </div>

        <button 
          type="submit"
          className="md:col-span-2 bg-white text-black py-6 font-bold text-xs tracking-[0.3em] hover:bg-gold transition-all uppercase"
        >
          Register Now
        </button>
      </form>
    </div>
  );
}
