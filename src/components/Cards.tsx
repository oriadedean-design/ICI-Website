/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectCardProps {
  id?: string;
  key?: any;
  name: string;
  location: string;
  price: string;
  description?: string;
  developer?: string;
  image?: string;
  status?: string;
}

export function ProjectCard({ id, name, location, price, description, developer, image, status }: ProjectCardProps) {
  const cardId = id || `project-card-${name.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <motion.div 
      id={cardId}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-black border border-white/10 group flex flex-col h-full overflow-hidden hover:border-gold/30 transition-colors"
    >
      <div id={`${cardId}-image-wrapper`} className="relative h-60 md:h-72 overflow-hidden">
        <img 
          id={`${cardId}-img`}
          src={image || `https://picsum.photos/seed/${name}/800/600`} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div id={`${cardId}-status-wrapper`} className="absolute top-0 left-0 p-4 md:p-6 flex flex-col gap-2">
          {status && (
            <motion.span 
              id={`${cardId}-status`} 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-black/80 backdrop-blur-sm text-white text-[8px] md:text-[9px] font-mono uppercase tracking-[0.3em] px-2.5 md:px-3 py-1 md:py-1.5 border border-white/10"
            >
              {status}
            </motion.span>
          )}
        </div>
      </div>
      
      <div id={`${cardId}-content`} className="p-6 md:p-8 flex flex-col flex-grow border-t border-white/10">
        <div id={`${cardId}-header`} className="flex justify-between items-start mb-4 md:mb-6">
          <div id={`${cardId}-title-wrapper`}>
            <h3 id={`${cardId}-title`} className="text-xl md:text-2xl font-bold text-white tracking-tighter uppercase mb-1 group-hover:text-gold transition-colors">{name}</h3>
            <div id={`${cardId}-location`} className="flex items-center gap-2 text-white/40 text-[9px] md:text-[10px] font-mono uppercase tracking-widest">
              <MapPin id={`${cardId}-location-icon`} size={10} className="text-gold" />
              {location}
            </div>
          </div>
          <span id={`${cardId}-price`} className="text-gold font-mono text-[10px] md:text-xs">{price}</span>
        </div>
        
        {description && <p id={`${cardId}-description`} className="text-xs md:text-sm text-white/40 leading-relaxed mb-6 md:mb-8 line-clamp-2 font-light">{description}</p>}
        
        <div id={`${cardId}-footer`} className="mt-auto pt-4 md:pt-6 border-t border-white/5 flex items-center justify-between">
          <span id={`${cardId}-developer`} className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-white/20">
            {developer || 'Impact Condo'}
          </span>
          <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
            <Link 
              id={`${cardId}-enquire-link`}
              to={`/contact?interest=${encodeURIComponent(name)}`}
              className="text-[10px] md:text-xs font-bold text-white hover:text-gold transition-colors flex items-center gap-2 group/link"
            >
              ENQUIRE 
              <ArrowRight id={`${cardId}-enquire-icon`} size={14} className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

interface TeamCardProps {
  id?: string;
  name: string;
  title: string;
  specialty: string;
  image: string;
}

export function TeamCard({ id, name, title, specialty, image }: TeamCardProps) {
  const cardId = id || `team-card-${name.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <motion.div 
      id={cardId}
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-charcoal rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 p-3 md:p-4 group hover:border-gold/30 transition-all"
    >
      <div id={`${cardId}-image-wrapper`} className="relative h-64 md:h-80 rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-6">
        <img 
          id={`${cardId}-img`}
          src={image} 
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div id={`${cardId}-overlay`} className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div id={`${cardId}-content`} className="px-1 md:px-2">
        <h3 id={`${cardId}-name`} className="text-xl md:text-2xl font-serif font-bold mb-1 group-hover:text-gold transition-colors">{name}</h3>
        <p id={`${cardId}-title`} className="text-gold text-[10px] md:text-sm font-bold uppercase tracking-widest mb-2 md:mb-3">{title}</p>
        <p id={`${cardId}-specialty`} className="text-white/40 text-[10px] md:text-xs mb-4 md:mb-6">{specialty}</p>
        <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
          <Link 
            id={`${cardId}-connect-link`}
            to={`/contact?realtor=${encodeURIComponent(name)}`}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold hover:text-gold transition-colors"
          >
            CONNECT <ArrowRight id={`${cardId}-connect-icon`} size={14} className="md:w-4 md:h-4" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
