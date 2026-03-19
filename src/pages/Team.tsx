/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TEAM_MEMBERS, CONTACT_INFO } from '../constants';
import { TeamCard } from '../components/Cards';
import { ExternalLink, Users, Building, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Team() {
  return (
    <div id="team-page" className="pt-32 pb-32 min-h-screen bg-black">
      <div id="team-container" className="max-w-7xl mx-auto px-6">
        <div id="team-header" className="text-center mb-16 md:mb-24">
          <motion.div
            id="team-title-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 id="team-title" className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 uppercase tracking-tighter">THE <span className="text-gold italic">IMPACT</span> TEAM</h1>
            <p id="team-description" className="text-sm md:text-base text-white/40 max-w-2xl mx-auto leading-relaxed px-4">
              Our diverse team of real estate experts, property managers, and marketing specialists are dedicated to your success. We don't just sell condos; we build wealth.
            </p>
          </motion.div>
        </div>

        {/* Sales Team Section */}
        <section id="team-sales-section" className="mb-24 md:mb-32">
          <div id="team-sales-header" className="flex items-center gap-4 mb-10 md:mb-12">
            <Users id="team-sales-icon" className="text-gold" size={20} md:size={24} />
            <h2 id="team-sales-title" className="text-2xl md:text-3xl font-serif font-bold">SALES TEAM</h2>
            <div id="team-sales-line" className="flex-grow h-px bg-white/10"></div>
          </div>
          <div id="team-sales-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                id={`team-member-wrapper-${i}`}
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <TeamCard id={`team-member-${i}`} {...member} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section id="team-partners-section" className="mb-24 md:mb-32">
          <div id="team-partners-header" className="flex items-center gap-4 mb-10 md:mb-12">
            <Building id="team-partners-icon" className="text-gold" size={20} md:size={24} />
            <h2 id="team-partners-title" className="text-2xl md:text-3xl font-serif font-bold">STRATEGIC PARTNERS</h2>
            <div id="team-partners-line" className="flex-grow h-px bg-white/10"></div>
          </div>
          <div id="team-partners-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { 
                name: "The Red Haven Group", 
                title: "Property Management", 
                desc: "Full-service property management solutions for investors. From tenant screening to maintenance, we handle it all.",
                link: "https://redhavengroup.com",
                cta: "GET IN TOUCH"
              },
              { 
                name: "Remax Excel Titan", 
                title: "Brokerage Partner", 
                desc: "Our elite brokerage partner providing world-class infrastructure and support for our high-volume transactions.",
                link: "https://remaxexceltitan.com",
                cta: "VISIT WEBSITE"
              },
              { 
                name: "ROHIT Calgary", 
                title: "Internal Realtor Partner", 
                desc: "Specialized focus on the Alberta market, bringing Calgary's best pre-construction opportunities to our clients.",
                link: "https://rohitliving.com",
                cta: "EXPLORE ALBERTA"
              },
              { 
                name: "Impact Marketing", 
                title: "Agent Support", 
                desc: "New agent? Start strong with our specialized marketing support and lead generation systems.",
                link: "https://theimpactmarketing.net",
                cta: "JOIN THE TEAM"
              }
            ].map((partner, i) => (
              <motion.div
                id={`team-partner-card-${i}`}
                key={partner.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-charcoal p-8 md:p-10 rounded-3xl border border-white/5 group hover:border-gold/30 transition-all"
              >
                <h3 id={`team-partner-name-${i}`} className="text-xl md:text-2xl font-serif font-bold mb-2">{partner.name}</h3>
                <p id={`team-partner-title-${i}`} className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">{partner.title}</p>
                <p id={`team-partner-desc-${i}`} className="text-sm md:text-base text-white/60 mb-8 leading-relaxed">{partner.desc}</p>
                <a 
                  id={`team-partner-link-${i}`}
                  href={partner.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-xs md:text-sm font-bold hover:bg-gold hover:text-black transition-all"
                >
                  {partner.cta} <ExternalLink id={`team-partner-link-icon-${i}`} size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Back End Team Section */}
        <section id="team-backend-section">
          <div id="team-backend-header" className="flex items-center gap-4 mb-10 md:mb-12">
            <ShieldCheck id="team-backend-icon" className="text-gold" size={20} md:size={24} />
            <h2 id="team-backend-title" className="text-2xl md:text-3xl font-serif font-bold">ICI BACK END TEAM</h2>
            <div id="team-backend-line" className="flex-grow h-px bg-white/10"></div>
          </div>
          <motion.div 
            id="team-backend-content" 
            className="bg-charcoal p-8 md:p-12 rounded-3xl border border-white/5 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p id="team-backend-quote" className="text-sm md:text-base text-white/60 max-w-2xl mx-auto leading-relaxed italic">
              "Our operations team ensures every transaction is seamless, every lead is tracked, and every client is supported from signing to occupancy."
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
