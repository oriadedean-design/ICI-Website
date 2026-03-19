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

export function ProjectCard({ name, location, price, description, developer, image, status }: ProjectCardProps) {
  return (
    <motion.div 
      className="bg-black border border-white/10 group flex flex-col h-full overflow-hidden"
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={image || `https://picsum.photos/seed/${name}/800/600`} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-0 left-0 p-6 flex flex-col gap-2">
          {status && (
            <span className="bg-black/80 backdrop-blur-sm text-white text-[9px] font-mono uppercase tracking-[0.3em] px-3 py-1.5 border border-white/10">
              {status}
            </span>
          )}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow border-t border-white/10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tighter uppercase mb-1">{name}</h3>
            <div className="flex items-center gap-2 text-white/40 text-[10px] font-mono uppercase tracking-widest">
              <MapPin size={10} className="text-gold" />
              {location}
            </div>
          </div>
          <span className="text-gold font-mono text-xs">{price}</span>
        </div>
        
        {description && <p className="text-sm text-white/40 leading-relaxed mb-8 line-clamp-2 font-light">{description}</p>}
        
        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/20">
            {developer || 'Impact Condo'}
          </span>
          <Link 
            to={`/contact?interest=${encodeURIComponent(name)}`}
            className="text-xs font-bold text-white hover:text-gold transition-colors flex items-center gap-2 group/link"
          >
            ENQUIRE 
            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

interface TeamCardProps {
  name: string;
  title: string;
  specialty: string;
  image: string;
}

export function TeamCard({ name, title, specialty, image }: TeamCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-charcoal rounded-3xl overflow-hidden border border-white/10 p-4 group"
    >
      <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="px-2">
        <h3 className="text-2xl font-serif font-bold mb-1">{name}</h3>
        <p className="text-gold text-sm font-bold uppercase tracking-widest mb-3">{title}</p>
        <p className="text-white/40 text-xs mb-6">{specialty}</p>
        <Link 
          to={`/contact?realtor=${encodeURIComponent(name)}`}
          className="inline-flex items-center gap-2 text-sm font-bold hover:text-gold transition-colors"
        >
          CONNECT <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
