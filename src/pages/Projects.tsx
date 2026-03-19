/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin } from 'lucide-react';
import { PROJECTS } from '../constants';
import { ProjectCard } from '../components/Cards';

export default function Projects() {
  const { category } = useParams();
  
  const title = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Projects';
  const projects = category && (PROJECTS as any)[category] ? (PROJECTS as any)[category] : PROJECTS.featured;

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
              Explore our curated selection of pre-construction opportunities in {title}. From luxury downtown high-rises to family-oriented townhomes.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap gap-4">
            {['Toronto', 'Ontario', 'Quebec', 'Alberta', 'USA', 'Mexico'].map((cat) => (
              <Link 
                key={cat}
                to={`/projects/${cat.toLowerCase()}`}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${category === cat.toLowerCase() ? 'bg-gold border-gold text-black' : 'border-white/10 text-white/60 hover:border-gold hover:text-gold'}`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-32 bg-charcoal rounded-3xl border border-white/5">
            <h3 className="text-2xl font-serif font-bold text-white/40 italic">Coming Soon to {title}</h3>
            <p className="text-white/20 mt-4">We are currently vetting new opportunities in this region. Register for alerts to be the first to know.</p>
            <Link to="/contact" className="mt-8 inline-block bg-gold text-black px-8 py-3 rounded-full font-bold">REGISTER FOR ALERTS</Link>
          </div>
        )}
      </div>
    </div>
  );
}
