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
    <div className="pt-32 pb-32 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-7xl font-serif font-bold mb-6">THE <span className="text-gold italic">IMPACT</span> TEAM</h1>
            <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">
              Our diverse team of real estate experts, property managers, and marketing specialists are dedicated to your success. We don't just sell condos; we build wealth.
            </p>
          </motion.div>
        </div>

        {/* Sales Team Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <Users className="text-gold" size={24} />
            <h2 className="text-3xl font-serif font-bold">SALES TEAM</h2>
            <div className="flex-grow h-px bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <TeamCard {...member} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <Building className="text-gold" size={24} />
            <h2 className="text-3xl font-serif font-bold">STRATEGIC PARTNERS</h2>
            <div className="flex-grow h-px bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                key={partner.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-charcoal p-10 rounded-3xl border border-white/5 group hover:border-gold/30 transition-all"
              >
                <h3 className="text-2xl font-serif font-bold mb-2">{partner.name}</h3>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-6">{partner.title}</p>
                <p className="text-white/60 mb-8 leading-relaxed">{partner.desc}</p>
                <a 
                  href={partner.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-sm font-bold hover:bg-gold hover:text-black transition-all"
                >
                  {partner.cta} <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Back End Team Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <ShieldCheck className="text-gold" size={24} />
            <h2 className="text-3xl font-serif font-bold">ICI BACK END TEAM</h2>
            <div className="flex-grow h-px bg-white/10"></div>
          </div>
          <div className="bg-charcoal p-12 rounded-3xl border border-white/5 text-center">
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed italic">
              "Our operations team ensures every transaction is seamless, every lead is tracked, and every client is supported from signing to occupancy."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
