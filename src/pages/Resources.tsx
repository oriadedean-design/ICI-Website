/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { FAQS } from '../constants';
import { BookOpen, Newspaper, HelpCircle, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Resources() {
  const blogPosts = [
    { title: "Top 5 Reasons to Invest in Pre-Construction in 2024", date: "March 15, 2024", excerpt: "Discover why pre-construction remains the most powerful wealth-building tool in the Toronto market.", image: "https://picsum.photos/seed/blog1/800/600" },
    { title: "Understanding the Tarion Warranty: What You Need to Know", date: "March 10, 2024", excerpt: "Everything you need to know about your new home warranty and how it protects your investment.", image: "https://picsum.photos/seed/blog2/800/600" },
    { title: "Interim Occupancy vs. Final Closing: A Detailed Guide", date: "March 5, 2024", excerpt: "Don't be caught off guard by the interim occupancy phase. We break down the costs and timelines.", image: "https://picsum.photos/seed/blog3/800/600" },
  ];

  return (
    <div className="pt-32 pb-32 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-7xl font-serif font-bold mb-6">RESOURCES & <span className="text-gold italic">INSIGHTS</span></h1>
            <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">
              Stay ahead of the market with our expert analysis, news updates, and comprehensive guides for pre-construction investors.
            </p>
          </motion.div>
        </div>

        {/* Blog Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="text-gold" size={24} />
            <h2 className="text-3xl font-serif font-bold">BLOG ARTICLES</h2>
            <div className="flex-grow h-px bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-charcoal rounded-3xl overflow-hidden border border-white/5 group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <span className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2 block">{post.date}</span>
                  <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-gold transition-colors">{post.title}</h3>
                  <p className="text-white/40 text-sm mb-6 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <Link to="#" className="inline-flex items-center gap-2 text-sm font-bold hover:text-gold transition-colors">
                    READ MORE <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <HelpCircle className="text-gold" size={24} />
            <h2 className="text-3xl font-serif font-bold">PRE-CONSTRUCTION Q&A</h2>
            <div className="flex-grow h-px bg-white/10"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-charcoal p-8 rounded-3xl border border-white/5"
              >
                <h4 className="text-xl font-serif font-bold mb-4 text-gold">Q: {faq.question}</h4>
                <p className="text-white/60 leading-relaxed">A: {faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-32 text-center">
          <div className="bg-gold p-16 rounded-3xl text-black">
            <h2 className="text-5xl font-serif font-bold mb-6 italic">STILL HAVE QUESTIONS?</h2>
            <p className="text-xl font-medium mb-10 max-w-xl mx-auto">Our experts are here to guide you through every step of the pre-construction process.</p>
            <Link to="/contact" className="bg-black text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all flex items-center gap-3 mx-auto w-fit">
              CONNECT WITH A REALTOR <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
