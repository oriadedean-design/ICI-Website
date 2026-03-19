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
    <div id="home-page" className="flex flex-col">
      {/* Hero Section */}
      <section id="hero-section" className="relative min-h-[90vh] md:h-screen flex items-center pt-24 overflow-hidden border-b border-white/10">
        <motion.div 
          id="hero-bg-container" 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
          <img 
            id="hero-bg-img"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div id="hero-overlay" className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
        </motion.div>

        <div id="hero-content-container" className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12 md:py-0">
          <motion.div
            id="hero-motion-div"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <div id="hero-tagline-wrapper" className="flex items-center gap-4 mb-6 md:mb-8">
              <motion.span 
                id="hero-tagline-line" 
                className="h-px bg-gold"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.8, duration: 1 }}
              ></motion.span>
              <motion.span 
                id="hero-tagline-text" 
                className="text-[8px] md:text-[10px] font-mono uppercase tracking-[0.4em] text-gold"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Invest Today. Impact Tomorrow.
              </motion.span>
            </div>
            <h1 id="hero-title" className="text-5xl sm:text-7xl md:text-[120px] lg:text-[140px] font-black leading-[0.9] mb-8 md:mb-12 tracking-tighter uppercase">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="block"
              >
                GENERATE
              </motion.span>
              <motion.span 
                id="hero-title-accent" 
                className="text-gold block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                WEALTH.
              </motion.span>
            </h1>
            <div id="hero-cta-wrapper" className="flex flex-col md:flex-row md:items-end gap-8 md:gap-12">
              <motion.p 
                id="hero-description" 
                className="text-base md:text-lg text-white/50 leading-relaxed max-w-md font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                Toronto's premier gateway to exclusive pre-construction opportunities. 
                Strategic investments for the modern visionary.
              </motion.p>
              <motion.div 
                id="hero-buttons" 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                <Link id="hero-btn-access" to="/contact" className="w-full sm:w-auto bg-white text-black px-8 md:px-12 py-4 md:py-5 font-bold text-sm hover:bg-gold hover:scale-105 transition-all uppercase tracking-widest text-center">
                  Get Early Access
                </Link>
                <Link id="hero-btn-projects" to="/projects/toronto" className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 md:px-12 py-4 md:py-5 font-bold text-sm hover:bg-white/10 hover:scale-105 transition-all uppercase tracking-widest text-center">
                  Browse Projects
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          id="hero-scroll-indicator" 
          className="absolute bottom-12 right-12 hidden md:flex flex-col items-end gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span id="hero-scroll-text" className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 rotate-90 origin-right translate-y-12">Scroll to explore</span>
          <motion.div 
            id="hero-scroll-line" 
            className="h-24 w-px bg-gradient-to-b from-white/20 to-transparent"
            animate={{ height: [96, 48, 96] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-16 md:py-24 bg-black border-b border-white/10">
        <div id="stats-container" className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { label: 'Units Sold', value: '1,200+', id: 'units-sold' },
            { label: 'Total Volume', value: '$1.5B+', id: 'total-volume' },
            { label: 'Years Experience', value: '15+', id: 'years-exp' },
            { label: 'Realtor Network', value: '500+', id: 'realtor-network' },
          ].map((stat, i) => (
            <motion.div 
              id={`stat-item-${stat.id}`} 
              key={stat.id} 
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span id={`stat-value-${stat.id}`} className="text-3xl md:text-6xl font-bold text-white tracking-tighter">{stat.value}</span>
              <span id={`stat-label-${stat.id}`} className="text-[8px] md:text-[10px] font-mono uppercase tracking-widest text-white/30">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects-section" className="py-24 md:py-32 bg-black">
        <div id="featured-projects-container" className="max-w-7xl mx-auto px-6">
          <div id="featured-projects-header" className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
            <motion.div 
              id="featured-projects-title-wrapper"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 id="featured-projects-title" className="text-4xl md:text-5xl font-serif font-bold mb-4">FEATURED PROJECTS</h2>
              <p id="featured-projects-subtitle" className="text-white/40 max-w-md">Hand-picked investment opportunities in Ontario's most sought-after locations.</p>
            </motion.div>
            <Link id="featured-projects-view-all" to="/projects/toronto" className="flex items-center gap-2 text-gold font-bold hover:text-white transition-colors text-sm md:text-base">
              VIEW ALL PROJECTS <ArrowRight size={18} />
            </Link>
          </div>

          <div id="featured-projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PROJECTS.featured.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProjectCard 
                  id={`featured-project-${project.id}`}
                  name={project.name}
                  location={project.location}
                  price={project.price}
                  description={project.description}
                  image={project.image}
                  status={project.status}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials-section" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
        <div id="testimonials-glow" className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-gold/5 blur-[80px] md:blur-[120px] rounded-full"></div>
        <div id="testimonials-container" className="max-w-7xl mx-auto px-6">
          <div id="testimonials-header" className="text-center mb-16 md:mb-20">
            <h2 id="testimonials-title" className="text-4xl md:text-5xl font-serif font-bold mb-4">CLIENT SUCCESS STORIES</h2>
            <p id="testimonials-subtitle" className="text-white/40">Real impact for real investors. Hear from our community.</p>
          </div>

          <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                id={`testimonial-card-${i}`}
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black/40 p-8 md:p-10 rounded-3xl border border-white/5 relative"
              >
                <div id={`testimonial-stars-${i}`} className="flex gap-1 text-gold mb-6">
                  {[...Array(5)].map((_, j) => <Star id={`testimonial-star-${i}-${j}`} key={j} size={14} fill="currentColor" />)}
                </div>
                <p id={`testimonial-text-${i}`} className="text-lg md:text-xl font-serif italic text-white/80 leading-relaxed mb-8">"{t.text}"</p>
                <div id={`testimonial-author-${i}`} className="flex items-center gap-4">
                  <div id={`testimonial-avatar-${i}`} className="w-10 h-10 md:w-12 md:h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <span id={`testimonial-name-${i}`} className="font-bold text-white text-sm md:text-base">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners-section" className="py-24 md:py-32 bg-black">
        <div id="partners-container" className="max-w-7xl mx-auto px-6">
          <div id="partners-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div 
              id="partners-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 id="partners-title" className="text-4xl md:text-5xl font-serif font-bold mb-8">OUR STRATEGIC PARTNERS</h2>
              <div id="partners-list" className="space-y-4 md:space-y-6">
                {[
                  { title: "INTERNAL REALTOR PARTNER", desc: "Rohit X Impact banner — Strategic collaboration for Alberta markets.", link: "/team/rohit", id: "rohit" },
                  { title: "REMAX EXCEL TITAN", desc: "Find Your Real Estate Agent Today! Our elite brokerage partner.", link: "/team/remax", id: "remax" },
                  { title: "RED HAVEN GROUP", desc: "Have Property Management Needs? Full-service management solutions.", link: "/team/property-management", id: "red-haven" },
                  { title: "IMPACT MARKETING", desc: "New agent? Start strong with our specialized marketing support.", link: "/team/marketing", id: "marketing" }
                ].map((partner, i) => (
                  <Link 
                    id={`partner-link-${partner.id}`}
                    key={partner.id}
                    to={partner.link}
                    className="group block p-6 md:p-8 bg-charcoal rounded-2xl border border-white/5 hover:border-gold/50 transition-all"
                  >
                    <div id={`partner-header-${partner.id}`} className="flex justify-between items-center mb-2">
                      <h4 id={`partner-title-${partner.id}`} className="text-gold font-bold tracking-widest text-[10px] md:text-sm">{partner.title}</h4>
                      <ExternalLink id={`partner-icon-${partner.id}`} size={16} className="text-white/20 group-hover:text-gold transition-colors" />
                    </div>
                    <p id={`partner-desc-${partner.id}`} className="text-sm md:text-base text-white/60 group-hover:text-white transition-colors">{partner.desc}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
            <motion.div 
              id="partners-image-wrapper" 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                id="partners-img"
                src="https://i.pinimg.com/736x/12/c0/f3/12c0f318c1569309bd64456947293ae4.jpg" 
                alt="Partnership"
                className="rounded-3xl shadow-2xl grayscale w-full"
                referrerPolicy="no-referrer"
              />
              <motion.div 
                id="partners-quote-card" 
                className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-gold p-6 md:p-8 rounded-3xl text-black max-w-[240px] md:max-w-xs shadow-xl"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p id="partners-quote-text" className="font-serif text-xl md:text-2xl font-bold leading-tight">"We build wealth through strong relationships."</p>
                <p id="partners-quote-author" className="mt-4 text-[10px] md:text-sm font-bold uppercase tracking-widest">— Matthew Mah</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Placeholder */}
      <section id="instagram-section" className="py-24 md:py-32 bg-charcoal">
        <div id="instagram-container" className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            id="instagram-header-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div id="instagram-header" className="flex items-center justify-center gap-3 mb-4">
              <Instagram id="instagram-icon" size={28} md:size={32} className="text-gold" />
              <h2 id="instagram-handle" className="text-2xl md:text-4xl font-serif font-bold italic">@impactcondoinvestments</h2>
            </div>
            <p id="instagram-subtitle" className="text-sm md:text-base text-white/40 mb-12">Follow us for daily market updates and project tours.</p>
          </motion.div>
          <div id="instagram-grid" className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {[...Array(6)].map((_, i) => (
              <motion.div 
                id={`instagram-post-wrapper-${i}`} 
                key={i} 
                className="aspect-square bg-black/40 rounded-xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <img 
                  id={`instagram-post-img-${i}`}
                  src={`https://picsum.photos/seed/insta${i}/400/400`} 
                  alt="Instagram Post"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section id="register-section" className="py-24 md:py-32 bg-black">
        <div id="register-container" className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <motion.div 
            id="register-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="register-title" className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">
              READY TO <span id="register-title-accent" className="text-gold italic">IMPACT</span> YOUR FUTURE?
            </h2>
            <p id="register-description" className="text-lg md:text-xl text-white/60 leading-relaxed mb-12">
              Join our exclusive list of investors. Get notified the second a project launches and secure your unit at the lowest possible price.
            </p>
            <div id="register-steps" className="space-y-6 md:space-y-8">
              {[
                { num: 1, title: "Launch Alerts", desc: "Triggered when a matching property goes live.", id: "launch" },
                { num: 2, title: "Weekly Newsletter", desc: "Sent every week with project news and market updates.", id: "newsletter" },
                { num: 3, title: "Personalized Outreach", desc: "Connect with a realtor matched to your budget and interest.", id: "outreach" }
              ].map((step, i) => (
                <motion.div 
                  id={`register-step-${step.num}`} 
                  key={step.num} 
                  className="flex gap-4 md:gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                >
                  <div id={`register-step-${step.num}-number`} className="w-10 h-10 md:w-12 md:h-12 bg-gold rounded-full flex items-center justify-center text-black shrink-0 font-bold text-sm md:text-base">{step.num}</div>
                  <div id={`register-step-${step.num}-content`}>
                    <h4 id={`register-step-${step.num}-title`} className="font-bold text-base md:text-lg mb-1">{step.title}</h4>
                    <p id={`register-step-${step.num}-desc`} className="text-xs md:text-sm text-white/40">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <LeadForm id="home-lead-form" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
