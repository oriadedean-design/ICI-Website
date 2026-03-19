/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Star, Instagram, ExternalLink, ShieldCheck, TrendingUp, Key } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS, TESTIMONIALS, CONTACT_INFO } from '../constants';
import { ProjectCard } from '../components/Cards';
import LeadForm from '../components/LeadForm';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background"
            className="w-full h-full object-cover opacity-50 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-gold"></span>
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gold">Invest Today. Impact Tomorrow.</span>
            </div>
            <h1 className="text-7xl md:text-[140px] font-black leading-[0.8] mb-12 tracking-tighter uppercase">
              GENERATE <br />
              <span className="text-gold">WEALTH.</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-end gap-12">
              <p className="text-lg text-white/50 leading-relaxed max-w-md font-light">
                Toronto's premier gateway to exclusive pre-construction opportunities. 
                Strategic investments for the modern visionary.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-white text-black px-12 py-5 font-bold text-sm hover:bg-gold transition-all uppercase tracking-widest">
                  Get Early Access
                </Link>
                <Link to="/projects/toronto" className="bg-transparent border border-white/20 text-white px-12 py-5 font-bold text-sm hover:bg-white/10 transition-all uppercase tracking-widest">
                  Browse Projects
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 right-12 hidden md:flex flex-col items-end gap-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 rotate-90 origin-right translate-y-12">Scroll to explore</span>
          <div className="h-24 w-px bg-gradient-to-b from-white/20 to-transparent"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'Units Sold', value: '1,200+' },
            { label: 'Total Volume', value: '$1.5B+' },
            { label: 'Years Experience', value: '15+' },
            { label: 'Realtor Network', value: '500+' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-4xl md:text-6xl font-bold text-white tracking-tighter">{stat.value}</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl font-serif font-bold mb-4">FEATURED PROJECTS</h2>
              <p className="text-white/40 max-w-md">Hand-picked investment opportunities in Ontario's most sought-after locations.</p>
            </div>
            <Link to="/projects/toronto" className="hidden md:flex items-center gap-2 text-gold font-bold hover:text-white transition-colors">
              VIEW ALL PROJECTS <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.featured.map((project) => (
              <ProjectCard 
                key={project.id} 
                name={project.name}
                location={project.location}
                price={project.price}
                description={project.description}
                image={project.image}
                status={project.status}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif font-bold mb-4">CLIENT SUCCESS STORIES</h2>
            <p className="text-white/40">Real impact for real investors. Hear from our community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-black/40 p-10 rounded-3xl border border-white/5 relative"
              >
                <div className="flex gap-1 text-gold mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-xl font-serif italic text-white/80 leading-relaxed mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <span className="font-bold text-white">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-serif font-bold mb-8">OUR STRATEGIC PARTNERS</h2>
              <div className="space-y-6">
                {[
                  { title: "INTERNAL REALTOR PARTNER", desc: "Rohit X Impact banner — Strategic collaboration for Alberta markets.", link: "/team/rohit" },
                  { title: "REMAX EXCEL TITAN", desc: "Find Your Real Estate Agent Today! Our elite brokerage partner.", link: "/team/remax" },
                  { title: "RED HAVEN GROUP", desc: "Have Property Management Needs? Full-service management solutions.", link: "/team/property-management" },
                  { title: "IMPACT MARKETING", desc: "New agent? Start strong with our specialized marketing support.", link: "/team/marketing" }
                ].map((partner, i) => (
                  <Link 
                    key={i}
                    to={partner.link}
                    className="group block p-8 bg-charcoal rounded-2xl border border-white/5 hover:border-gold/50 transition-all"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-gold font-bold tracking-widest text-sm">{partner.title}</h4>
                      <ExternalLink size={16} className="text-white/20 group-hover:text-gold transition-colors" />
                    </div>
                    <p className="text-white/60 group-hover:text-white transition-colors">{partner.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://i.pinimg.com/736x/12/c0/f3/12c0f318c1569309bd64456947293ae4.jpg" 
                alt="Partnership"
                className="rounded-3xl shadow-2xl grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-gold p-8 rounded-3xl text-black max-w-xs shadow-xl">
                <p className="font-serif text-2xl font-bold leading-tight">"We build wealth through strong relationships."</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-widest">— Matthew Mah</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Placeholder */}
      <section className="py-32 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram size={32} className="text-gold" />
            <h2 className="text-4xl font-serif font-bold italic">@impactcondoinvestments</h2>
          </div>
          <p className="text-white/40 mb-12">Follow us for daily market updates and project tours.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-black/40 rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={`https://picsum.photos/seed/insta${i}/400/400`} 
                  alt="Instagram Post"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="py-32 bg-black" id="register">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl font-serif font-bold leading-tight mb-8">
              READY TO <span className="text-gold italic">IMPACT</span> YOUR FUTURE?
            </h2>
            <p className="text-xl text-white/60 leading-relaxed mb-12">
              Join our exclusive list of investors. Get notified the second a project launches and secure your unit at the lowest possible price.
            </p>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-black shrink-0 font-bold">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Launch Alerts</h4>
                  <p className="text-white/40">Triggered when a matching property goes live.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-black shrink-0 font-bold">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Weekly Newsletter</h4>
                  <p className="text-white/40">Sent every week with project news and market updates.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-black shrink-0 font-bold">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Personalized Outreach</h4>
                  <p className="text-white/40">Connect with a realtor matched to your budget and interest.</p>
                </div>
              </div>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </div>
  );
}
