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
    <div id="resources-page" className="pt-32 pb-32 min-h-screen bg-black">
      <div id="resources-container" className="max-w-7xl mx-auto px-6">
        <div id="resources-header" className="text-center mb-16 md:mb-24">
          <motion.div
            id="resources-title-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 id="resources-title" className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 uppercase tracking-tighter">RESOURCES & <span className="text-gold italic">INSIGHTS</span></h1>
            <p id="resources-description" className="text-sm md:text-base text-white/40 max-w-2xl mx-auto leading-relaxed px-4">
              Stay ahead of the market with our expert analysis, news updates, and comprehensive guides for pre-construction investors.
            </p>
          </motion.div>
        </div>

        {/* Blog Section */}
        <section id="resources-blog-section" className="mb-24 md:mb-32">
          <div id="resources-blog-header" className="flex items-center gap-4 mb-10 md:mb-12">
            <BookOpen id="resources-blog-icon" className="text-gold" size={20} md:size={24} />
            <h2 id="resources-blog-title" className="text-2xl md:text-3xl font-serif font-bold">BLOG ARTICLES</h2>
            <div id="resources-blog-line" className="flex-grow h-px bg-white/10"></div>
          </div>
          <div id="resources-blog-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                id={`resources-blog-post-${i}`}
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-charcoal rounded-3xl overflow-hidden border border-white/5 group"
              >
                <div id={`resources-blog-post-image-wrapper-${i}`} className="h-48 overflow-hidden">
                  <img 
                    id={`resources-blog-post-image-${i}`}
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div id={`resources-blog-post-content-${i}`} className="p-6 md:p-8">
                  <span id={`resources-blog-post-date-${i}`} className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2 block">{post.date}</span>
                  <h3 id={`resources-blog-post-title-${i}`} className="text-lg md:text-xl font-serif font-bold mb-4 group-hover:text-gold transition-colors">{post.title}</h3>
                  <p id={`resources-blog-post-excerpt-${i}`} className="text-white/40 text-xs md:text-sm mb-6 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <Link id={`resources-blog-post-link-${i}`} to="#" className="inline-flex items-center gap-2 text-xs md:text-sm font-bold hover:text-gold transition-colors">
                    READ MORE <ChevronRight id={`resources-blog-post-link-icon-${i}`} size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="resources-faq-section">
          <div id="resources-faq-header" className="flex items-center gap-4 mb-10 md:mb-12">
            <HelpCircle id="resources-faq-icon" className="text-gold" size={20} md:size={24} />
            <h2 id="resources-faq-title" className="text-2xl md:text-3xl font-serif font-bold">PRE-CONSTRUCTION Q&A</h2>
            <div id="resources-faq-line" className="flex-grow h-px bg-white/10"></div>
          </div>
          <div id="resources-faq-list" className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            {FAQS.map((faq, i) => (
              <motion.div
                id={`resources-faq-item-${i}`}
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-charcoal p-6 md:p-8 rounded-3xl border border-white/5 hover:border-gold/20 transition-all"
              >
                <h4 id={`resources-faq-question-${i}`} className="text-lg md:text-xl font-serif font-bold mb-4 text-gold">Q: {faq.question}</h4>
                <p id={`resources-faq-answer-${i}`} className="text-sm md:text-base text-white/60 leading-relaxed">A: {faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="resources-cta-section" className="mt-24 md:mt-32 text-center">
          <motion.div 
            id="resources-cta-container" 
            className="bg-gold p-10 md:p-16 rounded-3xl text-black"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 id="resources-cta-title" className="text-3xl md:text-5xl font-serif font-bold mb-6 italic">STILL HAVE QUESTIONS?</h2>
            <p id="resources-cta-description" className="text-lg md:text-xl font-medium mb-10 max-w-xl mx-auto">Our experts are here to guide you through every step of the pre-construction process.</p>
            <Link id="resources-cta-link" to="/contact" className="bg-black text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white hover:text-black hover:scale-105 transition-all flex items-center gap-3 mx-auto w-fit">
              CONNECT WITH A REALTOR <ArrowRight id="resources-cta-link-icon" size={20} />
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
