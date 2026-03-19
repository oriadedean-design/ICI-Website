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
    <div className="pt-32 pb-32 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/" className="flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-widest mb-6 hover:text-white transition-colors">
              <ArrowLeft size={16} /> BACK TO HOME
            </Link>
            <h1 className="text-6xl font-serif font-bold mb-4">{title}</h1>
            <p className="text-white/40 max-w-xl leading-relaxed">
              Explore our exclusive resale, lease, and assignment opportunities. Our team handles every detail of the transaction.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap gap-4">
            {['For Sale', 'For Lease', 'Assignments'].map((cat) => (
              <Link 
                key={cat}
                to={`/listings/${cat.toLowerCase().replace(' ', '-')}`}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${type === cat.toLowerCase().replace(' ', '-') ? 'bg-gold border-gold text-black' : 'border-white/10 text-white/60 hover:border-gold hover:text-gold'}`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing, i) => (
            <motion.div
              key={listing.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <ProjectCard {...listing} />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center py-20 bg-charcoal rounded-3xl border border-white/5">
          <h3 className="text-3xl font-serif font-bold mb-6">HAVE A UNIT TO SELL OR LEASE?</h3>
          <p className="text-white/40 mb-10 max-w-lg mx-auto leading-relaxed">Our marketing systems ensure your property gets maximum exposure to qualified buyers and tenants.</p>
          <Link to="/contact" className="bg-gold text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-white transition-all inline-block">LIST WITH US</Link>
        </div>
      </div>
    </div>
  );
}
