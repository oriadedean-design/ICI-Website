/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Building2, MapPin } from 'lucide-react';
import { ProjectCard } from '../components/Cards';

export default function Listings() {
  const { type } = useParams();
  
  const titleMap: Record<string, string> = {
    'for-sale': 'Resale Units For Sale',
    'for-lease': 'Rental Listings For Lease',
    'assignments': 'Assignment Sale Listings',
  };

  const title = type ? titleMap[type] || 'Listings' : 'All Listings';

  const listings = [
    { name: "Luxury 1BR Downtown", location: "8 Elm St, Toronto", price: "$799,000", developer: "Reserve Properties", status: "For Sale" },
    { name: "Modern 2BR + Den", location: "101 Spadina Ave, Toronto", price: "$1,150,000", developer: "Devron", status: "For Sale" },
    { name: "High-Floor Studio", location: "LSQ, North York", price: "$525,000", developer: "Almadev", status: "Assignment" },
  ];

  return (
    <div id="listings-page" className="pt-24 md:pt-32 pb-24 md:pb-32 min-h-screen bg-black">
      <div id="listings-container" className="max-w-7xl mx-auto px-6">
        <div id="listings-header" className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-16">
          <motion.div
            id="listings-title-wrapper"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link id="listings-back-link" to="/" className="flex items-center gap-2 text-gold text-xs md:text-sm font-bold uppercase tracking-widest mb-4 md:mb-6 hover:text-white transition-colors">
              <ArrowLeft id="listings-back-icon" size={14} className="md:w-4 md:h-4" /> BACK TO HOME
            </Link>
            <h1 id="listings-title" className="text-4xl md:text-6xl font-serif font-bold mb-4">{title}</h1>
            <p id="listings-description" className="text-white/40 max-w-xl leading-relaxed text-sm md:text-base">
              Explore our exclusive resale, lease, and assignment opportunities. Our team handles every detail of the transaction.
            </p>
          </motion.div>
          
          <motion.div 
            id="listings-filter-wrapper" 
            className="flex flex-wrap gap-3 md:gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {['For Sale', 'For Lease', 'Assignments'].map((cat) => (
              <Link 
                id={`listings-filter-${cat.toLowerCase().replace(' ', '-')}`}
                key={cat}
                to={`/listings/${cat.toLowerCase().replace(' ', '-')}`}
                className={`px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border transition-all ${type === cat.toLowerCase().replace(' ', '-') ? 'bg-gold border-gold text-black' : 'border-white/10 text-white/60 hover:border-gold hover:text-gold'}`}
              >
                {cat}
              </Link>
            ))}
          </motion.div>
        </div>

        <div id="listings-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {listings.map((listing, i) => (
            <motion.div
              id={`listings-item-${i}`}
              key={listing.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard id={`listing-card-${i}`} {...listing} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          id="listings-cta-section" 
          className="mt-16 md:mt-24 text-center py-12 md:py-20 px-6 bg-charcoal rounded-3xl border border-white/5"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 id="listings-cta-title" className="text-2xl md:text-3xl font-serif font-bold mb-4 md:mb-6">HAVE A UNIT TO SELL OR LEASE?</h3>
          <p id="listings-cta-desc" className="text-white/40 mb-8 md:mb-10 max-w-lg mx-auto leading-relaxed text-sm md:text-base">Our marketing systems ensure your property gets maximum exposure to qualified buyers and tenants.</p>
          <Link id="listings-cta-link" to="/contact" className="bg-gold text-black px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white transition-all inline-block w-full sm:w-auto">LIST WITH US</Link>
        </motion.div>
      </div>
    </div>
  );
}
