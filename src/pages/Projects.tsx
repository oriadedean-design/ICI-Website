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
    <div id="projects-page" className="pt-24 md:pt-32 pb-24 md:pb-32 min-h-screen bg-black">
      <div id="projects-container" className="max-w-7xl mx-auto px-6">
        <div id="projects-header" className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-16">
          <motion.div
            id="projects-title-wrapper"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link id="projects-back-link" to="/" className="flex items-center gap-2 text-gold text-xs md:text-sm font-bold uppercase tracking-widest mb-4 md:mb-6 hover:text-white transition-colors">
              <ArrowLeft id="projects-back-icon" size={14} className="md:w-4 md:h-4" /> BACK TO HOME
            </Link>
            <h1 id="projects-title" className="text-4xl md:text-6xl font-serif font-bold mb-4">{title}</h1>
            <p id="projects-description" className="text-white/40 max-w-xl leading-relaxed text-sm md:text-base">
              Explore our curated selection of pre-construction opportunities in {title}. From luxury downtown high-rises to family-oriented townhomes.
            </p>
          </motion.div>
          
          <motion.div 
            id="projects-filter-wrapper" 
            className="flex flex-wrap gap-3 md:gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {['Toronto', 'Ontario', 'Quebec', 'Alberta', 'USA', 'Mexico'].map((cat) => (
              <Link 
                id={`projects-filter-${cat.toLowerCase()}`}
                key={cat}
                to={`/projects/${cat.toLowerCase()}`}
                className={`px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border transition-all ${category === cat.toLowerCase() ? 'bg-gold border-gold text-black' : 'border-white/10 text-white/60 hover:border-gold hover:text-gold'}`}
              >
                {cat}
              </Link>
            ))}
          </motion.div>
        </div>

        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              id={`projects-item-${i}`}
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard id={`project-card-${project.id || i}`} {...project} />
            </motion.div>
          ))}
        </div>

        {projects.length === 0 && (
          <motion.div 
            id="projects-empty" 
            className="text-center py-20 md:py-32 px-6 bg-charcoal rounded-3xl border border-white/5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 id="projects-empty-title" className="text-xl md:text-2xl font-serif font-bold text-white/40 italic">Coming Soon to {title}</h3>
            <p id="projects-empty-desc" className="text-white/20 mt-4 text-sm md:text-base">We are currently vetting new opportunities in this region. Register for alerts to be the first to know.</p>
            <Link id="projects-empty-register" to="/contact" className="mt-8 inline-block bg-gold text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-all w-full sm:w-auto">REGISTER FOR ALERTS</Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
